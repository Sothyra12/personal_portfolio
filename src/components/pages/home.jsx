// src/components/pages/home.jsx

import myResume from "../../assets/sothyra_resume.pdf";

const Home = () => {
  return (
    // Removed min-h-screen and justify-center
    <main className="flex flex-col items-center px-4 sm:px-8 lg:px-0">
      {/* Reduced py-16 to py-8 for less vertical space */}
      <div className="py-8 max-w-2xl mx-auto space-y-10 mb-20">
        {/* Slightly increased these text sizes back if desired, 
            but you can keep them small if you prefer */}
        <p className="text-sm sm:text-base font-thin text-center sm:text-left mb-4">
          Hello, I am
        </p>
        <h2 className="text-3xl sm:text-5xl font-thin italic pb-5 text-[#6F4E37] text-center sm:text-left leading-tight">
          Sothyra Chan
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left mb-8 leading-relaxed">
          A junior Web Developer with a strong foundation in web technologies
          and a passion for creating intuitive and accessible user experiences.
          Experienced in working with diverse teams, leveraging technical skills
          in JavaScript, React, and front-end development to deliver innovative
          solutions. Dedicated to continuous learning and enhancing digital
          interactions to meet user needs effectively.
        </p>
        <div className="flex justify-center sm:justify-start">
          <a href={myResume} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#A0937D] hover:bg-[#6C4E31] text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 text-sm sm:text-base">
              Resume
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;