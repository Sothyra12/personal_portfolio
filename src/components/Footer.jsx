// src/components/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#705C53] text-white">
      <div className="max-w-screen-xl px-4 pt-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 pb-40 sm:pb-12">
        <h1 className="text-5xl font-Euphoria font-thin text-center text-white/70 hover:text-white transition-colors duration-200">
          <Link
            to="/"
            className="text-5xl font-Euphoria font-thin text-center text-white/70 hover:text-white transition-colors duration-200">
            Sothyra Chan
          </Link>
        </h1>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to="/"
              className="text-base leading-6 text-white/70 hover:text-white transition-colors duration-200">
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/about"
              className="text-base leading-6 text-white/70 hover:text-white transition-colors duration-200">
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/project"
              className="text-base leading-6 text-white/70 hover:text-white transition-colors duration-200">
              Project
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/contact"
              className="text-base leading-6 text-white/70 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/attribution"
              className="text-base leading-6 text-white/70 hover:text-white transition-colors duration-200">
              Attribution
            </Link>
          </div>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100086865726173"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f w-6 h-6 flex items-center justify-center"></i>
          </a>
          <a
            href="https://www.instagram.com/techbabe_byju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram w-6 h-6 flex items-center justify-center"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sothyra-chan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin w-6 h-6 flex items-center justify-center"></i>
          </a>
          <a
            href="https://github.com/Sothyra12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center">
            <span className="sr-only">GitHub</span>
            <i className="fab fa-github w-6 h-6 flex items-center justify-center"></i>
          </a>
        </div>

        {/* Original Text */}
        <p className="mt-8 text-xs leading-6 text-center text-white">
          © {new Date().getFullYear()} Sothyra Chan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;