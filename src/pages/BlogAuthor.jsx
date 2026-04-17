import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserIcon from "../assets/blogs/user-icon.png";
import FacebookLogo from "../assets/blogs/a-button.png";
import TwitterLogo from "../assets/blogs/logo-twitter.png";
import InstagramLogo from "../assets/blogs/logo-instagram.png";
import YoutubeLogo from "../assets/blogs/logo-youtube.png";
import { Link } from "react-router-dom";
import { blogs } from "../components/blogsData";

function BlogAuthor() {
  return (
    <>
      <Header />

      <section
        className="py-16 px-4 text-center mx-10"
        style={{ backgroundColor: "#D0F5D0" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* <!-- IMAGE --> */}
          <img
            src={UserIcon}
            alt="Author"
            className="w-16 h-16 rounded-full mx-auto object-cover mb-3"
          />

          {/* <!-- NAME --> */}
          <h3 className="text-lg font-semibold text-gray-800">{}</h3>
          <p className="text-sm text-gray-600 mb-4">Collaborator & Editor</p>

          {/* <!-- DESCRIPTION --> */}
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>

          {/* <!-- SOCIAL ICONS --> */}
          <div className="flex justify-center gap-3">
            <a
              href="#"
              style={{ backgroundColor: "#695F5F" }}
              className="w-8 h-8 flex items-center justify-center   rounded-md hover:bg-gray-800 transition"
            >
              <img src={FacebookLogo} alt="F-Icon" className="" />
            </a>
            <a
              href="#"
              style={{ backgroundColor: "#695F5F" }}
              className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-md hover:bg-gray-800 transition"
            >
              <img src={InstagramLogo} alt="I-Icon" className="" />
            </a>
            <a
              href="#"
              style={{ backgroundColor: "#695F5F" }}
              className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-md hover:bg-gray-800 transition"
            >
              <img src={TwitterLogo} alt="T-Icon" className="" />
            </a>
            <a
              href="#"
              style={{ backgroundColor: "#695F5F" }}
              className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded-md hover:bg-gray-800 transition"
            >
              <img src={YoutubeLogo} alt="Y-Icon" className="" />
            </a>
          </div>
        </div>
      </section>

      <h2 className="my-10 font-bold px-16 text-4xl">Latest Post </h2>

      {/* <!-- BLOOGS --> */}
      <section className="px-16 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {blogs.map((blog, index) => (
          <Link to={`/singleBlog/${blog.id}`} key={index}>
            <div key={index} className=" items-center justify-center">
              <div className="bg-white rounded-b-xl shadow-sm overflow-hidden">
                <img
                  src={blog.image}
                  alt={`Blog-${blog.id}`}
                  loading="lazy"
                  className="w-full h-[240px]"
                />
                <div className="p-4">
                  <span className="bg-gray-100 font-bold text-green-500 text-xl px-3 py-1 rounded-e-full inline-block mb-3">
                    {blog.category}
                  </span>
                  <h3 className="text-xl md:text-3xl font-semibold mb-3">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-8 h-8 rounded-full">
                      <img
                        src={blog.author.avatar}
                        alt="user-Icon"
                        className="w-8 h-8 rounded-full"
                      />
                    </span>
                    <span>{blog.author.name}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </>
  );
}

export default BlogAuthor;
