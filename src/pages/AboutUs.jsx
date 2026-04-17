import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// imports about images
import aboutHero from "../assets/about/aboutHero.png";
import aboutPolicy1 from "../assets/about/policy-image-1.png";
import aboutPolicy2 from "../assets/about/policy-image-2.png";
import aboutPolicy3 from "../assets/about/policy-image-3.png";
import aboutValue1 from "../assets/about/about-value-1.png";
import aboutValue2 from "../assets/about/about-value-2.png";
import aboutValue3 from "../assets/about/about-value-3.png";
import aboutValue4 from "../assets/about/about-value-4.png";

function AboutUs() {
  return (
    <>
      <Header />

      {/* --------------Hero Section------------------ */}
      <section className="px-6 md:px-2 py-4">
        <div
          className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${aboutHero})`,
            backgroundColor: "#038A03",
          }}
        >
          <div className="absolute inset-0 bg-green-900/20"></div>
          <h1 className="relative text-4xl md:text-6xl text-white uppercase tracking-wider font-bold">
            WHO WE ARE?
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-16 py-12 mx-auto">
        <div className="text-[#555555] text-[15px] md:text-[17px] leading-[1.8] font-normal">
          {/* First Paragraph with Inline Title */}
          <p className="mb-6">
            <span className="text-[#00923f] font-bold text-xl md:text-2xl">
              Pakistan Leaders Forum (PLF)
            </span>{" "}
            is a non-partisan platform dedicated to nurturing principled
            leadership and driving positive change across Pakistan.
          </p>

          {/* Second Paragraph */}
          <p className="mb-6">
            We bring together leaders, professionals, entrepreneurs, academics,
            and change-makers from diverse backgrounds to collaborate, share
            ideas, and shape solutions for the country’s most pressing
            challenges. Our focus is on ethical leadership, innovation,
            governance, and sustainable national development.
          </p>

          {/* Third Paragraph */}
          <p className="mb-6">
            PLF serves as a space for thought leadership, dialogue, and action
            where experience meets fresh perspectives, and ideas translate into
            real-world impact. Through research, forums, policy discussions, and
            leadership initiatives, we aim to empower individuals and
            institutions to contribute meaningfully to Pakistan’s progress.
          </p>

          {/* Fourth Paragraph */}
          <p>
            We believe that Pakistan’s future depends on inclusive leadership,
            collaboration, and integrity, and we are committed to building a
            leadership ecosystem that reflects these values.
          </p>
        </div>
      </section>

      {/* --------------Policy Cards Section------------------ */}

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16 py-10 ">
        {/* Card 1: National Security */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-green-200">
          <div className="bg-[#dcfce7] py-6 px-4 text-center">
            <h3 className="font-bold text-gray-800 text-lg">
              National Security Policy
            </h3>
          </div>
          <div
            className="h-48 relative flex-grow p-8 text-white bg-cover bg-center"
            style={{
              backgroundImage: ` url(${aboutPolicy1}) ,linear-gradient(to bottom, rgba(0, 50, 0, 0.85), rgba(0, 20, 0, 0.95))`,
            }}
          ></div>
        </div>

        {/* Business Policy */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-green-200">
          <div className="bg-[#dcfce7] py-6 px-4 text-center">
            <h3 className="font-bold text-gray-800 text-lg">Business Policy</h3>
          </div>
          <div
            className="h-48 relative flex-grow p-8 text-white bg-cover bg-center"
            style={{
              backgroundImage: ` url(${aboutPolicy2}) ,linear-gradient(to bottom, rgba(0, 50, 0, 0.85), rgba(0, 20, 0, 0.95))`,
            }}
          ></div>
        </div>

        {/* Investment Policy */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-lg border border-green-200">
          <div className="bg-[#dcfce7] py-6 px-4 text-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Investment Policy
            </h3>
          </div>
          <div
            className="h-48 relative flex-grow p-8 text-white bg-cover bg-center"
            style={{
              backgroundImage: ` url(${aboutPolicy3}) ,linear-gradient(to bottom, rgba(0, 50, 0, 0.85), rgba(0, 20, 0, 0.95))`,
            }}
          ></div>
        </div>
      </section>

      {/*  OUR VISION SEPARATOR */}
      <section className="items-center px-6 md:px-16 py-4 ">
        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-green-600"></div>
          <span className="flex-shrink mx-4 text-2xl font-bold text-green-700">
            Our Vision
          </span>

          <div className="flex-grow border-t border-green-600"></div>
        </div>
        <p className="italic font-bold text-black text-center md:text-3xl my-8">
          "To become Pakistan’s foremost leadership forum that shapes
          transformative policies in national security, business, and
          investment, fostering resilience, prosperity, and global recognition."
        </p>
      </section>
      {/*  MISSION SECTION */}
      <section className="relative bg-[#00923f] h-64 md:h-80 flex items-center justify-center overflow-visible mt-16">
        {/* Decorative Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute md:top-[-110px] top-[-40px] md:left-[-8px] md:w-60 md:h-60 border-[20px] md:border-[45px] w-20 h-20 border-[#D0F5D0] rounded-full "></div>
          <div className="absolute md:bottom-[-110px] bottom-[-40px] md:right-[-8px] right-[-8px] md:w-60 md:h-60 border-[20px] md:border-[45px] w-20 h-20 border-[#D0F5D0] rounded-full"></div>
        </div>

        <div className="absolute top-[-35px] bg-white px-12 py-3 rounded-md shadow-md z-10">
          <h2 className="text-green-700 text-2xl font-bold">Mission</h2>
        </div>
        <p className="relative text-white text-center md:max-w-4xl text-sm md:text-lg leading-relaxed px-4">
          "Pakistan Leaders Forum unites policymakers, business leaders,
          academics, and innovators to collaborate on actionable strategies.
          Through research, dialogue, and advocacy, we drive forward national
          security, business, and investment policies that secure Pakistan’s
          future and unlock its full economic potential."
        </p>
      </section>

      {/* OUR VALUES SECTION */}
      <div className="relative flex items-center px-6 md:px-16 pt-16 pb-8">
        <div className="flex-grow border-t border-green-600"></div>
        <span className="flex-shrink mx-4 text-2xl font-bold text-green-700">
          Our Values
        </span>
        <div className="flex-grow border-t border-green-600"></div>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16 pb-16">
        {[
          {
            name: "Collaboration",
            desc: "We believe in collective intelligence and shared responsibility.",
          },
          {
            name: "Integrity",
            desc: "We work with transparency, trust, and accountability.",
          },
          {
            name: "Innovation",
            desc: "We encourage forward-thinking ideas and future-ready solutions.",
          },
          {
            name: "Impact",
            desc: "We focus on real-world outcomes that strengthen Pakistan's position globally.",
          },
        ].map((value, i) => (
          <div key={i} className="text-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-green-200 overflow-hidden mb-4">
              <img
                src={[
                  i === 0
                    ? aboutValue1
                    : i === 1
                      ? aboutValue2
                      : i === 2
                        ? aboutValue3
                        : aboutValue4,
                ]}
                alt={value.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-green-700 text-lg mb-2">
              {value.name}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 leading-tight">
              {value.desc}
            </p>
          </div>
        ))}
      </section>

      {/*  OUR OBJECTIVES SECTION */}
      <div className="relative flex items-center px-6 md:px-16 py-8">
        <div className="flex-grow border-t border-green-600"></div>
        <span className="flex-shrink mx-4 text-2xl font-bold text-green-700">
          Our Objectives
        </span>
        <div className="flex-grow border-t border-green-600"></div>
      </div>

      <section className="px-6 md:px-16 pb-20">
        <div className="bg-[#f0f9f1] p-8 md:p-12 rounded-3xl">
          <ul className="space-y-4 list-disc pl-6 text-gray-700 text-sm md:text-base">
            <li>
              Provide a platform for dialogue among leaders, policymakers, and
              stakeholders.
            </li>
            <li>
              Publish insightful research, reports, and policy recommendations.
            </li>
            <li>
              Host roundtables, forums, and summits on pressing national
              challenges.
            </li>
            <li>
              Build a network of leaders and experts committed to Pakistan's
              progress.
            </li>
            <li>
              Influence policy reforms that enhance security, business climate,
              and investment opportunities.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;
