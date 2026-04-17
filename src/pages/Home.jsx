import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutImage from "../assets/home/About.png";
import BannerImg from "../assets/home/Hero-section-image.png";
import GalleryPic1 from "../assets/home/galleryPic-1.png";
import GalleryPic2 from "../assets/home/galleryPic-2.png";
import GalleryPic3 from "../assets/home/galleryPic-3.png";
import GalleryPic4 from "../assets/home/galleryPic-4.png";
import GalleryPic5 from "../assets/home/galleryPic-5.png";
import NationalSecurityPolicy from "../assets/home/Group-1.png";
import BusinessPolicy from "../assets/home/Group-2.png";
import InvestmentPolicy from "../assets/home/Group-3.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="m-4">
        <div className="relative rounded-3xl overflow-hidden bg-green-700">
          {/* IMAGE */}
          <img
            src={BannerImg}
            alt="Pakistan Map"
            className="w-full h-[260px] md:h-[400px] object-contain object-right"
          />

          {/* OVERLAY CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="text-white px-6 md:px-12 max-w-2xl">
              <h1 className="text-2xl md:text-4xl mb-4 leading-tight font-semibold">
                Shaping Pakistan’s Future Through <br />
                <strong>Policy, Leadership</strong> and <strong>Forum</strong>
              </h1>

              <p className="mb-6 text-sm md:text-base">
                Uniting Leaders to advance security, Business and Investment
                Policies for a stronger more prosperous Pakistan
              </p>

              <Link
                to="/forumForm"
                className="bg-yellow-400 text-black px-5 py-2 rounded-md font-medium cursor-pointer"
              >
                Join the Forum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ABOUT --> */}
      <section className="flex flex-col md:flex-col sm:flex-col lg:flex-row items-center gap-10 px-6 md:px-10 py-12 md:mx-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            The Pakistan Leaders Forum
          </h2>
          <p className="leading-relaxed text-sm md:text-xl md:leading-8 text-justify">
            is a national think-and-do platform dedicated to advancing
            Pakistan’s future through strategic policy engagement, leadership
            development, and cross-sector collaboration. The Forum brings
            together leaders from government, business, academia, and civil
            society to exchange ideas, foster informed dialogue, and address the
            country’s most critical economic, social, and governance challenges.
            By creating a trusted space for diverse perspectives, PLF aims to
            strengthen national discourse and support evidence-based
            decision-making.
          </p>
        </div>
        <img
          src={AboutImage}
          className="rounded-xl w-full md:w-[450px] md:w-[h-350]"
        />
      </section>

      {/* <!-- CARDS --> */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16 py-10 md:mx-20">
        {/* Card 1: National Security */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-green-200">
          <div className="bg-[#dcfce7] py-6 px-4 text-center">
            <h3 className="font-bold text-gray-800 text-xs md:text-lg">
              National Security Policy
            </h3>
          </div>
          <div
            className="relative flex-grow p-8 text-white bg-cover bg-center md:h-72"
            style={{
              backgroundImage: ` url(${NationalSecurityPolicy}) ,linear-gradient(to bottom, rgba(0, 50, 0, 0.85), rgba(0, 20, 0, 0.95))`,
            }}
          >
            <ul className="list-disc pl-5 space-y-4 text-sm md:text-xl md:font-bold md:leading-8">
              <li>Strategic research, security frameworks, and resilience.</li>
              <li>Defense, technology, and regional dynamics.</li>
              <li>Roundtables with policymakers and experts.</li>
            </ul>
          </div>
        </div>

        {/* Card 2: Business Policy */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-green-200">
          <div className="bg-[#dcfce7] py-6 px-4 text-center">
            <h3 className="font-bold text-gray-800 text-lg">Business Policy</h3>
          </div>
          <div
            className="relative flex-grow p-8 text-white bg-cover bg-center md:h-72"
            style={{
              backgroundImage: ` url(${BusinessPolicy}) ,linear-gradient(to bottom, rgba(0, 50, 0, 0.85), rgba(0, 20, 0, 0.95))`,
            }}
          >
            <ul className="list-disc pl-5 space-y-4 text-sm md:text-xl md:font-bold md:leading-8">
              <li>Entrepreneurship and SME growth.</li>
              <li>Trade, taxation, and regulatory reforms.</li>
              <li>Innovation and digital economy strategies.</li>
            </ul>
          </div>
        </div>

        {/* Card 3: Investment Policy */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-green-200">
          <div className="bg-[#dcfce7] py-6 px-4 text-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Investment Policy
            </h3>
          </div>
          <div
            className="relative flex-grow p-8 text-white bg-cover bg-center md:h-72"
            style={{
              backgroundImage: ` url(${InvestmentPolicy}) ,linear-gradient(to bottom, rgba(0, 50, 0, 0.85), rgba(0, 20, 0, 0.95))`,
            }}
          >
            <ul className="list-disc pl-5 space-y-4 text-sm md:text-xl md:font-bold md:leading-8">
              <li>Foreign Direct Investment (FDI) facilitation.</li>
              <li>Public-private partnerships.</li>
              <li>Infrastructure and sustainable development finance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- GALLERY --> */}

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2 px-6 md:px-10 pb-12 mt-20 mb-16 h-[600px]">
        {/* First Image: Spans 2 rows to take the full left side */}
        <img
          src={GalleryPic1}
          className="row-span-2 h-full w-full object-cover rounded-lg"
          alt="Gallery 1"
        />

        {/* Other images will naturally flow into the remaining slots */}
        <img
          src={GalleryPic2}
          className="h-full w-full object-cover rounded-lg"
          alt="Gallery 2"
        />
        <img
          src={GalleryPic3}
          className="h-full w-full object-cover rounded-lg"
          alt="Gallery 3"
        />
        <img
          src={GalleryPic4}
          className="h-full w-full object-cover rounded-lg"
          alt="Gallery 4"
        />
        <img
          src={GalleryPic5}
          className="h-full w-full object-cover rounded-lg"
          alt="Gallery 5"
        />
      </section>

      <Footer />
    </>
  );
}

export default Home;
