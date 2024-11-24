// src/components/pages/home.jsx

import myResume from "../../assets/sothyra_resume.pdf";

const Home = () => {
  return (
    <main className="flex flex-col items-center text-center min-h-screen">
      <div className="py-16">
        <p className="text-xl font-thin">Hello, I am</p>
        <h2 className="text-7xl font-thin italic pb-5 text-[#6F4E37]">Sothyra Chan</h2>
        <p className="max-w-xl text-gray-600 text-left">
          A junior Web Developer with a strong foundation in web technologies and
          a passion for creating intuitive and accessible user experiences.
          Experienced in working with diverse teams, leveraging technical skills
          in JavaScript, React, and front-end development to deliver innovative
          solutions. Dedicated to continuous learning and enhancing digital
          interactions to meet user needs effectively.
        </p>
        <a href={myResume} target="_blank" rel="noopener noreferrer">
          <button className="bg-[#A0937D] hover:bg-[#6C4E31] text-white font-medium py-2 px-4 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </main>
  );
};

export default Home;
