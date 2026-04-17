import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CiLocationOn } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { FaGlobeAmericas } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import Banner from "../assets/contact/Hero-image.png";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const schema = z.object({
  fullname: z
    .string()
    .min(3, "FullName Must be at least 3 characters")
    .max(50, "fullname too long"),

  email: z.string().email("Please Enter Valid Email Address"),

  subject: z.string().min(5, "Subject Must be at least 5 characters"),

  feedback: z.string().min(10, "Message Must be at least 10 charactera"),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (formData) => {
    try {
      setSubmitting(true);
      // const response = await fetch(`${import.meta.env.VITE_GOOGLE_SHEET_URL}`, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     ...formData,
      //     formType: "contact",
      //   }),
      // });
      // const result = await response.json();

      // if (result.status === "error") {
      //   toast.error(result.message);
      //   return;
      // }

      // if (result.status === "success") {
      //   toast.success("Form submitted successfully!");
      // }

      await addDoc(collection(db, "contactForm"), {
        ...formData,
      });
      toast.success("Your FeedBack Submitted");

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const ErrorMsg = ({ msg }) =>
    msg ? <p className="text-xs text-red-500 mt-1">{msg}</p> : null;

  return (
    <>
      <Header />
      <section className="mt-6">
        <div
          className="relative h-[450px] w-full bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${Banner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[rgba(0,104,55,0.75)] to-green-600 opacity-80"></div>
          <div className="relative md:px-36 md:py-24 px-4 py-6">
            <p className="text-emerald-300 uppercase text-2xl ">
              INSTITUTIONAL ACCESS
            </p>
            <h1 className="text-white text-5xl font-bold my-12">
              Get in Touch
            </h1>
            <p className="md:text-3xl text-xl text-white/80 max-w-3xl   ">
              Advancing the national discourse through strategic collaboration
              and principled leadership. We welcome inquiries from scholars,
              policy makers, and future fellows.
            </p>
          </div>
        </div>
      </section>

      <section className="md:px-16 px-6 py-10 bg-gray-200">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="w-full p-8 md:p-12 shadow-sm bg-gray-50">
            <h2 className="mb-8 font-[Manrope] font-bold text-3xl text-emerald-900">
              Send A Message
            </h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6 my-3">
                <div className="">
                  <label htmlFor="fullName" className="text-gray-700 font-bold">
                    FullName
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("fullname")}
                    className={`w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 ${errors.fullname ? "border-red-400" : "border-gray-300"}`}
                  />
                  <ErrorMsg msg={errors.fullname?.message} />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                    className={`w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 ${errors.fullname ? "border-red-400" : "border-gray-300"}`}
                  />
                  <ErrorMsg msg={errors.email?.message} />
                </div>
              </div>
              <div className="my-8">
                <label htmlFor="subject" className="text-gray-700 font-bold">
                  Subject
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Inquiry regarding"
                  {...register("subject")}
                  className={`w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 ${errors.fullname ? "border-red-400" : "border-gray-300"}`}
                />
                <ErrorMsg msg={errors.subject?.message} />
              </div>
              <div className="my-8">
                <label htmlFor="subject" className="text-gray-700 font-bold">
                  Message
                </label>
                <br />
                <textarea
                  rows={5}
                  type="text"
                  placeholder="Your Message to the forum directorate"
                  {...register("feedback")}
                  className={`w-full bg-transparent border-b border-gray-400 focus:outline-none py-2 ${errors.fullname ? "border-red-400" : "border-gray-300"}`}
                />
                <ErrorMsg msg={errors.feedback?.message} />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-8 bg-green-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-green-800 transition cursor-pointer"
              >
                {submitting ? "submitting" : "Dispatch Message"}
                <span>➤</span>
              </button>
            </form>
          </div>
          <div>
            <h2 className="md:text-3xl text-2xl font-[Manrope] font-semibold text-emerald-900 mb-4">
              Contact Details
            </h2>

            <p className="text-neutral-700 md:text-xl text-xs font-[Inter] mb-6 max-w-md">
              For immediate institutional inquiries, our secretariat is
              available during standard business hours (9:00 AM - 5:00 PM PST).
            </p>

            {/* <!-- ADDRESS --> */}
            <div className="flex items-start gap-4 mb-6 font-[Inter]">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-green-800 text-3xl rounded-md">
                <CiLocationOn />
              </div>
              <div>
                <h4 className="font-semibold md:text-xl text-gray-800 ">
                  Secretariat Office
                </h4>
                <p className="text-sm md:text-xl text-neutral-700">
                  Suite 402, Constitution Avenue,
                  <br />
                  Sector G-5/1, Islamabad, Pakistan
                </p>
              </div>
            </div>

            {/* <!-- PHONE --> */}
            <div className="flex items-center gap-4 mb-6 font-[Inter]">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-green-800 text-xl rounded-md">
                <BsFillTelephoneFill />
              </div>
              <div>
                <h4 className="font-semibold md:text-xl text-gray-800">
                  Phone
                </h4>
                <p className="text-sm md:text-xl text-neutral-700">
                  +92 (51) 555-0192
                </p>
              </div>
            </div>

            {/* <!-- EMAIL --> */}
            <div className="flex items-center gap-4 mb-6 font-[Inter]">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-300 text-green-800 text-2xl rounded-md">
                <AiOutlineMail />
              </div>
              <div>
                <h4 className="font-semibold md:text-xl text-gray-800">
                  Email
                </h4>
                <p className="text-sm md:text-xl text-neutral-700">
                  contact@leadershipforum.pk
                </p>
              </div>
            </div>

            {/* <!-- DIVIDER --> */}
            <hr className="my-6 border-gray-300" />

            {/* <!-- DIGITAL PRESENCE --> */}
            <h5 className="text-xl tracking-widest font-semibold uppercase text-emerald-900 mb-4">
              DIGITAL PRESENCE
            </h5>

            <div className="flex gap-6">
              <div className="w-12 h-12 flex items-center justify-center text-green-800 text-3xl bg-gray-300 cursor-pointer rounded-md">
                <CiShare2 />
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-green-800 text-3xl bg-gray-300 cursor-pointer rounded-md">
                <FaGlobeAmericas />
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-green-800 text-3xl bg-gray-300 cursor-pointer rounded-md">
                <GoCommentDiscussion />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
