import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coreFocusHero from "../assets/coreFocus/coreFocus-Hero-image.png";
import coreFocusImage2 from "../assets/coreFocus/coreFocusImage2.png";
import coreFocusImage3 from "../assets/coreFocus/coreFocusImage3.png";
import coreFocusImage4 from "../assets/coreFocus/coreFocusImage4.png";

function CoreFocus() {
  return (
    <>
      <Header />
      {/* --------------Hero Section------------------ */}
      <section className="">
        <div
          className="relative h-[300px] md:h-[450px] overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${coreFocusHero})`,
            backgroundColor: "#038A03",
          }}
        >
          <div className="absolute inset-0 bg-green-900/20"></div>
          <h1 className="relative text-4xl md:text-6xl text-white tracking-wider font-bold uppercase">
            Our Core
          </h1>
        </div>
      </section>

      <section className="py-12 px-6 md:px-16 bg-white">
        <p className="text-[#333333] leading-relaxed mb-8 text-[17px] text-justify">
          At the <span className="font-bold">Pakistan Leaders Forum (PLF)</span>
          , our core is ethical, inclusive, and impact-driven leadership. We
          believe leadership is not about position or power it is about
          responsibility, integrity, and service. Our work is grounded in the
          idea that Pakistan’s progress depends on leaders who think long-term,
          act collaboratively, and put national interest above personal gain.
        </p>

        <h2 className="text-2xl font-bold text-[#00923f] mb-6 inline-block pb-1">
          Our Core Rests on Four Pillars:
        </h2>

        <ul className="space-y-4 text-[16px] text-[#333333] list-disc pl-6">
          <li>
            <span className="font-bold text-[#00923f] decoration-1">
              Integrity
            </span>{" "}
            We promote principled leadership rooted in transparency,
            accountability, and trust.
          </li>
          <li>
            <span className="font-bold text-[#00923f]  decoration-[#00923f]">
              Inclusion
            </span>{" "}
            We believe Pakistan’s strength lies in its diversity. We bring
            together voices across sectors, generations, and regions.
          </li>
          <li>
            <span className="font-bold text-[#00923f]  decoration-[#00923f]">
              Collaboration
            </span>{" "}
            Complex national challenges require collective thinking. We foster
            dialogue, partnerships, and shared solutions.
          </li>
          <li>
            <span className="font-bold text-[#00923f]  decoration-[#00923f]">
              Impact
            </span>{" "}
            Ideas matter only when they lead to action. We focus on outcomes
            that create measurable positive change.
          </li>
        </ul>
      </section>

      <section className="">
        <div
          className="relative h-[300px] md:h-[450px]  overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${coreFocusImage2})`,
            backgroundColor: "#038A03",
          }}
        >
          <div className="absolute inset-0 bg-green-900/20"></div>
          <h1 className="relative text-4xl md:text-6xl text-white tracking-wider font-bold uppercase">
            National Security Policy
          </h1>
        </div>
      </section>

      <section className="py-10 px-6 md:px-16 font-bold">
        <h2 className="text-[#00923f] text-3xl font-bold mb-4">Overview</h2>
        <p className="font-semibold text-gray-900 leading-snug mb-8">
          Pakistan’s security environment is complex and evolving. From
          traditional defense challenges to emerging threats like cyber warfare,
          terrorism, and climate security, the nation’s resilience depends on
          forward-looking and adaptive strategies.
        </p>

        <div className="border-t border-green-500 mb-10"></div>

        <h3 className="text-[#00923f] text-3xl font-bold mb-6">Our Focus</h3>
        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-900 mb-10">
          <li>
            Building frameworks for strategic stability and defense
            modernization.
          </li>
          <li>
            Exploring cybersecurity, AI, and emerging technologies in national
            security.
          </li>
          <li>Strengthening regional security cooperation and diplomacy.</li>
          <li>
            Promoting resilience against hybrid threats such as disinformation
            and economic warfare.
          </li>
        </ul>

        <div className="border-t border-green-500 mb-10"></div>

        <h3 className="text-[#00923f] text-3xl font-bold mb-4">
          Our Contribution
        </h3>
        <p className="text-lg font-medium text-gray-900">
          We engage business leaders, policymakers, and innovators to shape
          policies that unlock Pakistan’s entrepreneurial potential and position
          the country as a competitive global business hub.
        </p>
      </section>

      <section className="">
        <div
          className="relative h-[300px] md:h-[450px]  overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${coreFocusImage3})`,
            backgroundColor: "#038A03",
          }}
        >
          <div className="absolute inset-0 bg-green-900/20"></div>
          <h1 className="relative text-4xl md:text-6xl text-white tracking-wider font-bold uppercase">
            Business Policy
          </h1>
        </div>
      </section>

      <section className="py-10 px-6 md:px-16 ">
        <h2 className=" text-[#00923f] text-3xl font-bold mb-6">Overview</h2>
        <p className=" font-semibold text-gray-900 leading-snug mb-8">
          A thriving business environment is essential for Pakistan’s long-term
          prosperity. From SMEs to multinationals, businesses need supportive
          policies, regulatory reforms, and innovation-driven ecosystems to grow
          and compete globally.
        </p>

        <div className="border-t border-green-500 mb-10"></div>

        <h3 className="text-[#00923f] text-3xl font-bold mb-6">Our Focus</h3>
        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-900 mb-10">
          <li>
            Advocating for regulatory reforms that enable entrepreneurship.
          </li>
          <li>
            Strengthening the digital economy, startups, and innovation hubs.
          </li>
          <li>
            Enhancing trade policies, taxation frameworks, and competitiveness.
          </li>
          <li>
            Promoting inclusive growth by supporting women and youth in
            business.
          </li>
        </ul>

        <div className="border-t border-green-500 mb-10"></div>

        <h3 className="text-[#00923f] text-3xl font-bold mb-4">
          Our Contribution
        </h3>
        <p className="text-lg font-medium text-gray-900">
          We engage business leaders, policymakers, and innovators to shape
          policies that unlock Pakistan’s entrepreneurial potential and position
          the country as a competitive global business hub.
        </p>
      </section>

      <section className="">
        <div
          className="relative h-[300px] md:h-[450px]  overflow-hidden flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${coreFocusImage4})`,
            backgroundColor: "#038A03",
          }}
        >
          <div className="absolute inset-0 bg-green-900/20"></div>
          <h1 className="relative text-4xl md:text-6xl text-white tracking-wider font-bold uppercase">
            Investment Policy
          </h1>
        </div>
      </section>

      <section className="py-10 px-6 md:px-16 ">
        <h2 className=" text-[#00923f] text-3xl font-bold mb-6">Overview</h2>
        <p className=" font-semibold text-gray-900 leading-snug mb-8">
          A thriving business environment is essential for Pakistan’s long-term
          prosperity. From SMEs to multinationals, businesses need supportive
          policies, regulatory reforms, and innovation-driven ecosystems to grow
          and compete globally.
        </p>

        <div className="border-t border-green-500 mb-10"></div>

        <h3 className="text-[#00923f] text-3xl font-bold mb-6">Our Focus</h3>
        <ul className="list-disc pl-6 space-y-3 text-lg font-medium text-gray-900 mb-10">
          <li>
            Advocating for regulatory reforms that enable entrepreneurship.
          </li>
          <li>
            Strengthening the digital economy, startups, and innovation hubs.
          </li>
          <li>
            Enhancing trade policies, taxation frameworks, and competitiveness.
          </li>
          <li>
            Promoting inclusive growth by supporting women and youth in
            business.
          </li>
        </ul>

        <div className="border-t border-green-500 mb-10"></div>

        <h3 className="text-[#00923f] text-3xl font-bold mb-4">
          Our Contribution
        </h3>
        <p className="text-lg font-medium text-gray-900">
          We engage business leaders, policymakers, and innovators to shape
          policies that unlock Pakistan’s entrepreneurial potential and position
          the country as a competitive global business hub.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default CoreFocus;
