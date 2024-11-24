// components/header.jsx

import LinkedInLogo from "../assets/linkedin_logo.png";
import GitHubLogo from "../assets/github_logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <h1 className="text-2xl font-Knewave">Sothyra.c</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.linkedin.com/in/sothyra-chan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70">
              <img src={LinkedInLogo} alt="LinkedIn" className="h-7 w-7 mt-1" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sothyra12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70">
              <img src={GitHubLogo} alt="LinkedIn" className="h-9 w-9" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
