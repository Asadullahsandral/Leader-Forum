import React from "react";
import { href, Link } from "react-router-dom";
import PlfLogo from "../assets/footer/PLS-LOGO.png";
import FacebookIcon from "../assets/footer/Vector.png";
import InstagramIcon from "../assets/footer/Vector-1.png";
import TwitterIcon from "../assets/footer/Vector-2.png";
import LinkedInIcon from "../assets/footer/social.png";
import YouTubeIcon from "../assets/footer/social-1.png";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white px-6 md:px-16 pt-16 pb-6">
      {/* MAIN ROW */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT (VERTICALLY CENTERED) */}
        <div className="flex flex-col justify-center">
          <Link to="/">
            <img src={PlfLogo} alt="PLF Logo" className="w-24 mb-4" />
          </Link>

          <p className="text-sm leading-relaxed max-w-xs text-gray-300">
            Shaping Pakistan’s Future Through
            <br />
            <strong className="text-white">Policy, Leadership</strong> and{" "}
            <strong className="text-white">Forum</strong>
          </p>
        </div>

        {/* RIGHT SIDE (COMPANY + SOCIAL CLOSE TOGETHER) */}
        <div className="flex gap-24">
          {/* COMPANY LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/coreFocus">Core Focus</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL ICONS (TOP ALIGNED) */}
          <div className="flex items-start gap-4 mt-1">
            {[
              {
                src: FacebookIcon,
                alt: "Facebook",
                href: "",
              },
              { src: InstagramIcon, alt: "Instagram", href: "" },
              { src: TwitterIcon, alt: "Twitter", href: "" },
              { src: LinkedInIcon, alt: "LinkedIn", href: "" },
              { src: YouTubeIcon, alt: "YouTube", href: "" },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.href || "#"}
                className="opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-400 mt-16">
        © 2021 | All Rights Reserved
      </div>
    </footer>
  );
}
