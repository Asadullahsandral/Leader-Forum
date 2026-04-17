import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { db, storage } from "../firebase/config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

// ─── ZOD SCHEMA ──────────────────────────────────────────────────────────────
const schema = z.object({
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters OR Retype")
    .max(50, "Full name too long OR Retype"),

  email: z.string().email("Please enter a valid email address OR Retype"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits OR Retype")
    .max(15, "Phone number too long OR Retype")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format OR Retype"),

  location: z.string().min(2, "Please enter your city or country OR Retype"),

  linkedIn: z
    .string()
    .url("Please enter a valid URL OR Retype")
    .includes("linkedin.com", { message: "Must be a LinkedIn URL" }),

  role: z.string().min(2, "Please enter your role or title OR Retype"),

  industry: z
    .string()
    .min(1, "Please select an industry OR Retype")
    .refine((val) => val !== "Select Industry", {
      message: "Please select an industry",
    }),

  experience: z
    .string()
    .min(1, "Please enter years of experience OR Retype")
    .refine((val) => !isNaN(val) && Number(val) >= 0 && Number(val) <= 60, {
      message: "Please enter a valid number of years (0-60)",
    }),

  expertise: z
    .string()
    .min(3, "Please enter your areas of expertise OR Retype"),
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────
function ForumForm() {
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageError, setImageError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ── Image Handler ──
  const fileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setImageError("Only JPG, PNG, or WEBP images are allowed");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setImageError("Image size must be less than 2MB");
      return;
    }

    setImageError("");
    setImageFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      { method: "POST", body: formData },
    );

    const data = await response.json();

    if (!data.success) throw new Error("ImgBB upload failed");

    return data.data.url; // ✅ image URL
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData },
    );

    const data = await response.json();

    if (data.error) throw new Error(data.error.message);

    return data.secure_url; // ✅ image URL
  };

  // ── Remove Image ──
  const removeImage = () => {
    setPreview(null);
    setImageFile(null);
    setImageError("");
  };

  const checkEmailExists = async (email) => {
    const q = query(collection(db, "forumUsers"), where("email", "==", email));
    const snapshot = await getDocs(q);
    return !snapshot.empty; // true = email exists
  };

  const onSubmit = async (formData) => {
    if (!imageFile) {
      setImageError("Profile picture is required");
      return;
    }

    try {
      setSubmitting(true);

      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        toast.error("This email is already registered!");
        setSubmitting(false);
        return;
      }

      const imageURL = await uploadToImgBB(imageFile);
      // const imageURL = await uploadToCloudinary(imageFile);

      // const response = await fetch(`${import.meta.env.VITE_GOOGLE_SHEET_URL}`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     ...formData,
      //     imageURL,
      //     formType: "forum",
      //   }),
      // });
      // const result = await response.json();

      // if (result.status === "error") {
      //   toast.error(result.message);
      //   return;
      // }

      // if (result.status === "success") {
      //   toast.success("Form submitted successfully!");

      await addDoc(collection(db, "forumUsers"), {
        ...formData,
        profileImage: imageURL,
        createdAt: new Date().toISOString(),
      });

      toast.success("You have successfully joined the forum!");

      reset();
      setPreview(null);
      setImageFile(null);
      // }
    } catch (error) {
      console.error(error);
      toast.error("Image upload failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Error Field Component ──
  const ErrorMsg = ({ msg }) =>
    msg ? <p className="text-xs text-red-500 mt-1">{msg}</p> : null;

  return (
    <>
      <Header />

      <section className="py-16 px-4">
        <h2 className="text-center text-xl font-semibold mb-8">
          Join the Forum
        </h2>

        <form
          className="max-w-3xl mx-auto bg-gray-200 rounded-2xl p-8 md:p-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ── PERSONAL DATA ── */}
          <h3 className="font-semibold mb-4">Personal Data</h3>

          {/* ── PROFILE IMAGE ── */}
          <div className="mb-6">
            <label className="text-sm mb-2 block">
              Profile Picture <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center gap-4">
              <label className="w-24 h-24 rounded-full border border-gray-400 flex items-center justify-center relative cursor-pointer overflow-hidden bg-white">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <span className="text-2xl text-gray-400">+</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={fileUpload}
                      className="absolute inset-0 cursor-pointer opacity-0"
                    />
                  </>
                )}
              </label>

              {preview && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="text-sm text-red-500 underline"
                >
                  Remove
                </button>
              )}
            </div>

            <ErrorMsg msg={imageError} />
          </div>

          {/* ── INPUTS ── */}
          <div className="space-y-4">
            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.fullName ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.fullName?.message} />
            </div>

            <div>
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.email ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.email?.message} />
            </div>

            <div>
              <label className="text-sm">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.phone ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.phone?.message} />
            </div>

            <div>
              <label className="text-sm">City / Country</label>
              <input
                type="text"
                placeholder="City / Country"
                {...register("location")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.location ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.location?.message} />
            </div>

            <div>
              <label className="text-sm">LinkedIn Profile Link</label>
              <input
                type="text"
                placeholder="https://linkedin.com/in/yourprofile"
                {...register("linkedIn")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.linkedIn ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.linkedIn?.message} />
            </div>
          </div>

          {/* ── PROFESSIONAL DATA ── */}
          <h3 className="font-semibold mt-8 mb-4">Professional Data</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm">Role / Title</label>
              <input
                type="text"
                placeholder="Role / Title"
                {...register("role")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.role ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.role?.message} />
            </div>

            <div>
              <label className="text-sm">Industry</label>
              <select
                {...register("industry")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.industry ? "border-red-400" : "border-gray-300"
                }`}
              >
                <option value="Select Industry" hidden>
                  Select Industry
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Android Development">Android Development</option>
                <option value="Data Science">Data Science</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>
              <ErrorMsg msg={errors.industry?.message} />
            </div>

            <div>
              <label className="text-sm">Years of Experience</label>
              <input
                type="number"
                placeholder="Enter number of years"
                {...register("experience")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.experience ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.experience?.message} />
            </div>

            <div>
              <label className="text-sm">Areas of Expertise</label>
              <input
                type="text"
                placeholder="Areas Of Expertise"
                {...register("expertise")}
                className={`w-full mt-1 px-4 py-2 rounded-md border outline-0 bg-white ${
                  errors.expertise ? "border-red-400" : "border-gray-300"
                }`}
              />
              <ErrorMsg msg={errors.expertise?.message} />
            </div>
          </div>

          {/* ── SUBMIT ── */}
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={submitting}
              className="bg-green-700 text-white px-8 py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default ForumForm;
