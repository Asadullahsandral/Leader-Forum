import { useState } from "react";
import { Link } from "react-router-dom";
import PlfLogo from "../assets/header/PLF-LOGO.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white px-6 md:px-16 py-5">
      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <Link to="/">
          <img src={PlfLogo} alt="PLF Logo" className="w-[83px] border-none" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/coreFocus">Core Focus</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          to="/forumForm"
          className="hidden md:block bg-yellow-400 px-4 py-2 rounded-md text-sm font-bold cursor-pointer"
        >
          Join the Forum
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>

          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>

          <span
            className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-5 flex flex-col gap-4 text-sm font-medium">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/coreFocus" onClick={() => setIsOpen(false)}>
            Core Focus
          </Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)}>
            Blogs
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            to="/forumForm"
            onClick={() => {
              setIsOpen(false);
            }}
            className="bg-yellow-400 px-4 py-2 rounded-md text-sm font-bold w-fit"
          >
            Join the Forum
          </Link>
        </div>
      )}
    </header>
  );
}
