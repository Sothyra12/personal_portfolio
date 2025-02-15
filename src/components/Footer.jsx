// src/components/Footer.jsx

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#705C53] text-white w-full md:max-w-7xl mx-auto">
     <div className="bg-[#705C53] text-white px-4 pt-20 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 pb-40"> 
       {/* Website Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-Euphoria font-thin text-center text-white/70 hover:text-white transition-colors duration-200">
          <Link
            to="/"
            className="hover:text-white transition-colors duration-200">
            Sothyra Chan
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Project", path: "/project" },
            { label: "Contact", path: "/contact" },
            { label: "Attribution", path: "/attribution" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-sm sm:text-base leading-6 text-white/70 hover:text-white transition-colors duration-200">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-4 sm:space-x-6">
          {[
            {
              href: "https://www.facebook.com/profile.php?id=100086865726173",
              icon: "fab fa-facebook-f",
              label: "Facebook",
            },
            {
              href: "https://www.instagram.com/techbabe_byju?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              icon: "fab fa-instagram",
              label: "Instagram",
            },
            {
              href: "https://www.linkedin.com/in/sothyra-chan/",
              icon: "fab fa-linkedin",
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Sothyra12",
              icon: "fab fa-github",
              label: "GitHub",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200 flex items-center justify-center">
              <span className="sr-only">{social.label}</span>
              <i className={`${social.icon} w-6 h-6 flex items-center justify-center`}></i>
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-xs sm:text-sm leading-6 text-center text-white">
          © {new Date().getFullYear()} Sothyra Chan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
