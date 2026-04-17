import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { blogs } from "./blogsData";

// import BlogImage1 from "../assets/blogs/singleBlog-image1.jpg";
// import BlogImage2 from "../assets/blogs/singleBlog-image2.jpg";
import UserIcon from "../assets/blogs/user-icon.png";

function BlogDetail() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <>
        <Header />
        <div className="text-center py-20 text-gray-500 text-xl">
          Blog not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="bg-gray-100 px-6 md:px-16 py-10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blogs"
            className="inline-block bg-green-700 text-white text-xl px-6 py-2 rounded-md mb-4"
          >
            Back
          </Link>

          {/* <!-- TITLE --> */}
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight mb-4">
            {blog.title}
          </h1>

          {/* <!-- AUTHOR + DATE --> */}
          <div className="flex items-center gap-4 text-sm text-gray-700 mb-6">
            <div className="w-8 h-8 bg-gray-300 rounded-full">
              <img src={blog.author.avatar} alt="Author" />
            </div>
            <span>
              <Link to="/blogAuthor">{blog.author.name}</Link>
            </span>
            <span>{blog.date}</span>
          </div>

          {/* <!-- IMAGE --> */}
          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src={blog.image}
              alt="Blog"
              className="w-full h-[250px] md:h-[450px] object-cover"
            />
          </div>

          {/* <!-- CONTENT --> */}
          <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-5">
            {blog.content.map((block, index) => {
              if (block.type === "paragraph")
                return <p key={index}>{block.text}</p>;

              if (block.type === "heading")
                return (
                  <h3
                    key={index}
                    className="text-xl font-semibold text-gray-800"
                  >
                    {block.text}
                  </h3>
                );

              if (block.type === "subheading")
                return (
                  <h4
                    key={index}
                    className="text-lg font-semibold text-gray-700 mt-4"
                  >
                    {block.text}
                  </h4>
                );

              if (block.type === "quote")
                return (
                  <div key={index} className="bg-gray-200 p-4 my-8">
                    <p className="text-xl max-w-3xl text-center italic font-bold">
                      "{block.text}"
                    </p>
                  </div>
                );

              if (block.type === "ul")
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-1 pl-4 text-gray-700"
                  >
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              if (block.type === "link")
                return (
                  <a
                    key={index}
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline text-sm inline-block"
                  >
                    {block.text}
                  </a>
                );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogDetail;
