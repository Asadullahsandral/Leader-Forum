import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../assets/blogs/banner.jpg";
import UserIcon from "../assets/blogs/user-icon.png";
import { Link } from "react-router-dom";
import { blogs } from "../components/blogsData";

function Blogs() {
  return (
    <>
      <Header />

      {/* <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold">Page Title</h1>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp; | &nbsp; Link One
        </p>
      </div> */}

      <section className="px-16 py-4">
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <img
            src={Banner}
            className="w-full h-[300px] md:h-[450px] object-cover"
          />

          {/* <!-- OVERLAY --> */}
          <div className="absolute inset-0 bg-green-900/50 flex items-end p-6 md:p-10">
            <div className="text-white max-w-2xl">
              <span className="bg-green-600 text-xl px-3 py-1 rounded-sm inline-block mb-3">
                Technology
              </span>

              <h2 className="text-xl md:text-3xl font-semibold mb-3">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h2>

              <div className="flex items-center gap-3 text-sm text-white-700">
                <span className="w-8 h-8 rounded-full">
                  <img src={UserIcon} alt="user-Icon" className="w-8 h-8" />
                </span>
                <span title="Go To Author Page">
                  <Link to="/blogAuthor">Tracey Wilson</Link>
                </span>
                <span>August 20, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- BLOOGS --> */}
      <section className="px-16 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="text-center my-10">
        <button className="border border-gray-300 px-6 py-2 hover:bg-gray-200 cursor-pointer rounded-md">
          Load More
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Blogs;
