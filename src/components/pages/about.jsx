// src/components/pages/About.jsx

import "@fortawesome/fontawesome-free/css/all.min.css";
import myPic from "../../assets/myPic.png";
import splashBg from "../../assets/splash.png";

const About = () => {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Beginner" },
    { name: "R3F", level: "Beginner" },
    { name: "TypeScript", level: "Beginner" },
    { name: "Bootstrap", level: "Beginner" },
    { name: "Tailwindcss", level: "Beginner" },
  ];

  const backendSkills = [
    { name: "MongoDB", level: "Beginner" },
    { name: "MySQL", level: "Beginner" },
    { name: "Node.js", level: "Beginner" },
    { name: "Python", level: "Beginner" },
  ];

  const otherSkills = [
    { name: "Manual Testing", level: "Beginner" },
    { name: "Test Case Writing", level: "Beginner" },
    { name: "Git/Github", level: "Intermediate" },
    { name: "PL/SQL", level: "Beginner" },
    { name: "Java, C#, C", level: "Beginner" },
    { name: "Jira & Trello", level: "Beginner" },
    { name: "Blender", level: "Beginner" },
    { name: "Functional & Api Testing", level: "Beginner" },
  ];

  return (
    <div className="text-gray-800 p-16">
      <div className="max-w-5xl mx-auto space-y-0 sm:space-y-12">
        {/* About Me Section (No Changes) */}
        <section
          id="about-me"
          className="flex flex-col md:flex-row items-center md:space-x-12"
        >
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-[1400px] md:h-[320px] mb-6 md:mb-0 overflow-hidden rounded-full md:rounded-lg">
            <img
              src={myPic}
              alt="Profile"
              className="object-cover w-full h-90"
            />
          </div>

          {/* About Me Text */}
          <div className="ml-0 md:ml-10">
            <h2 className="text-4xl font-extralight pb-4 text-[#6F4E37] text-center md:text-center mb-6">
              About Me
            </h2>
            <p className="indent-0 sm:indent-8 text-sm sm:text-lg md:text-lg leading-normal text-center md:text-left sm:px-6 max-w-[100%] sm:max-w-[80%] lg:max-w-full mx-auto">
              Hey there! I am Sothyra, a Software Engineering Technician recent
              graduate from Centennial College with a strong foundation and
              interest in web development and software testing. I am eager to
              apply my technical skills and ongoing learning through a full-time
              position or internship in the tech industry. I excel in teamwork,
              communication, and problem-solving, and am always enthusiastic to
              explore new technologies. I am ready to contribute my skillsets
              and grow further by learning from professionals in the field.
            </p>

            {/* Degree and GPA Info */}
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-0 space-y-0 sm:space-y-0">
              <div
                className="text-center p-11 sm:p-10 relative w-[80%] sm:w-[250px] mx-auto sm:mx-0"
                style={{ height: "220px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat top-13 sm:top-0"
                  style={{
                    backgroundImage: `url(${splashBg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.2,
                  }}
                ></div>
                <i className="fas fa-graduation-cap text-2xl sm:text-3xl"></i>
                <p className="font-semibold text-sm sm:text-lg z-10 mb-2">
                  Degree
                </p>
                <p className="z-10 text-xs sm:text-base">
                  Software Engineering Technician
                </p>
              </div>

              <div
                className="text-center p-5 sm:p-10 relative w-[80%] sm:w-[250px] mx-auto sm:mx-0"
                style={{ height: "220px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat bottom-20 sm:bottom-0"
                  style={{
                    backgroundImage: `url(${splashBg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.2,
                  }}
                ></div>
                <i className="fa fa-trophy text-2xl sm:text-3xl"></i>
                <p className="font-semibold text-sm sm:text-lg z-10 mb-2">
                  Total GPA
                </p>
                <p className="z-10 text-xs sm:text-base">3.88/4.5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section (Updated Font Responsiveness) */}
        <section
          id="skills"
          className="h-full w-full bg-[#E2DED3] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 p-0 py-8 sm:p-8"
        >
          <h2 className="text-4xl font-extralight pb-6 sm:pb-8 text-[#6F4E37] text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-xl font-medium text-center text-[#603F26]">Frontend Development</h3>
              <div className="flex flex-col items-center space-y-2">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    {/* Skill name: small on phones, larger on bigger screens */}
                    <span className="text-sm sm:text-lg font-normal mr-2 text-[#8B7E74]">
                      {skill.name}
                    </span>
                    {/* Skill level: even smaller on phones, scales up on larger screens */}
                    <span className="text-xs sm:text-base text-gray-600 text-[#A4907C]/70">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-xl font-medium text-center text-[#603F26]">Backend Development</h3>
              <div className="flex flex-col items-center space-y-2">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm sm:text-lg font-normal mr-2 text-[#8B7E74]">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-base text-gray-600 text-[#A4907C]/70">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Technologies */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-xl font-medium text-center text-[#603F26]">Other Technologies</h3>
              <div className="flex flex-col items-center space-y-2">
                {otherSkills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm sm:text-lg font-normal mr-2 text-[#8B7E74]">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-base text-gray-600 text-[#A4907C]/70">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;