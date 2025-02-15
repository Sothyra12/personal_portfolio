// src/components/pages/projects.jsx

import PropTypes from "prop-types";
import smartHomePic from "../../assets/smartHome.png";
import smartBotPic from "../../assets/smartbotPic.png";
import jobTrackerPic from "../../assets/jobtrackerPic.png";
import eLibraryPic from "../../assets/hhaPic.png";
import myPortfolioPic from "../../assets/portfolioPic.png";

const projects = [
  {
    name: "My Portfolio",
    description: "React | R3F | TailwindCSS",
    githubLink: "https://github.com/Sothyra12/personal_portfolio",
    websiteLink: "#",
    imageUrl: `${myPortfolioPic}`,
  },
  {
    name: "ChatBot", 
    description: "Python | Langchain | Streamlit ",
    githubLink: "https://github.com/Sothyra12/MemoryChatBot",
    websiteLink: "https://drive.google.com/file/d/1rYu5iR37EIzeWulL9g-xLdusfl6BTNoT/view?usp=drive_link",
    imageUrl: `${smartBotPic}`,
  },
  {
    name: "Smart Home System",
    description: "React-Native | Python | MySQL",
    githubLink: "https://github.com/Sothyra12/Smart_Home",
    demoLink: "https://drive.google.com/file/d/1vUEbxhyKwoU4o_S5yVi-Qg84msOeLWJY/view?usp=drive_link",
    imageUrl: `${smartHomePic}`,
  },
  {
    name: "Job Tracker - ongoing",
    description: "React | Tailwind | Python | MySQL",
    demoLink: "https://drive.google.com/file/d/1zPoGmueYOVIlTMQ9vNM9xK8yoqrfTUO5/view?usp=drive_link",
    imageUrl: `${jobTrackerPic}`,
  },
  {
    name: "ELibrary - ongoing", 
    description: "React | Bootstrap | Node | MySQL",
    demoLink: "https://drive.google.com/file/d/1rYu5iR37EIzeWulL9g-xLdusfl6BTNoT/view?usp=drive_link",
    imageUrl: `${eLibraryPic}`,
  },
];

const experienceData = [
  {
    title: "Peer Tutor",
    company: "Centennial College",
    date: "July 2024 – August 2024",
    description:
      "Mentored students in foundational Python, Linux, and JavaScript. Improved technical, communication, interpersonal, and problem-solving skills by identifying individual student needs and providing tailored support.",
  },
  {
    title: "Library Assistant",
    company: "Human & Hope Association",
    date: "September 2023 – November 2023",
    description:
      "Directed students on how to handle books, maintained a well-structured library, and fostered a clean, hygienic environment for both students and staff.",
  },
  {
    title: "English & Khmer Teaching Volunteer",
    company: "Human & Hope Association",
    date: "September 2023 – November 2023",
    description:
      "Taught entry-level English & Khmer to almost 100 local Cambodian children. Helped students maintain their mental health through morning activities like meditation.",
  },
];

const ProjectCard = ({ project }) => {
  const hasGithub = Boolean(project.githubLink);
  const hasWebsite = Boolean(project.websiteLink);
  const hasDemo = Boolean(project.demoLink);

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4">
      <div
        className="
        rounded-lg overflow-hidden shadow-md 
        bg-[#D0BAA8]/20 backdrop-blur-sm border border-[#F3EEEA]/50 
        transition transform hover:shadow-xl hover:scale-105
      ">
        <img
          className="w-full h-48 object-cover"
          src={project.imageUrl}
          alt={project.name}
        />
        <div className="p-4 text-[#603F26]">
          <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
          <p className="text-sm mb-4">{project.description}</p>
          <div
            className={`flex items-center ${
              hasGithub + hasWebsite + hasDemo > 1? "justify-between" : "justify-end"
            }`}
          >
            {hasGithub && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F4E37] hover:text-white hover:bg-[#5C3D2E]/50 px-2 py-1 rounded transition duration-200">
                Github
              </a>
            )}
            {hasWebsite && (
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F4E37] hover:text-white hover:bg-[#5C3D2E]/50 px-2 py-1 rounded transition duration-200">
                Website
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6F4E37] hover:text-white hover:bg-[#5C3D2E]/50 px-2 py-1 rounded transition duration-200">
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, position }) => {
  const alignmentClasses =
    position === "left"
      ? "sm:mr-auto sm:ml-0 text-left"
      : "sm:ml-auto sm:mr-0 text-left sm:text-right";

  return (
    <div
      className={`
      relative w-full sm:w-1/2 md:w-2/5 p-6 
      bg-[#E2DED3] backdrop-blur-sm border border-[#F3EEEA]/50 
      rounded-lg shadow-lg 
      transition transform hover:shadow-xl hover:-translate-y-1
      ${alignmentClasses}
    `}>
      <div className="text-[#603F26]">
        <h3 className="text-lg font-semibold mb-1">{experience.title}</h3>
        <h4 className="text-md font-light text-[#6F4E37] mb-1">
          {experience.company}
        </h4>
        <p className="text-sm text-[#6F4E37] mb-2">{experience.date}</p>
        <p className="text-sm text-[#776B5D]/90 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

const Project = () => (
  <div className="min-h-screen pt-16">
    <div className="container mx-auto px-4">
      {/* Projects Section with narrower width */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extralight pb-4 text-[#6F4E37] text-center mb-6">
          My Projects
        </h1>
        <div className="flex flex-wrap justify-left">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>

      {/* Experience & Internship Section */}
      <div className="py-16 mb-4">
        <h2 className="text-3xl font-extralight pb-10 text-[#6F4E37] text-center mb-6">
          Experience & Internship
        </h2>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="border-l-4 border-[#6F4E37] h-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>

          <div className="flex flex-col space-y-12">
            {experienceData.map((experience, index) => { 
              const position = index % 2 === 0 ? "left" : "right";
              return (
                <div key={index} className="relative flex flex-col sm:block">
                  {/* Circle for experience */}
                  <div className="w-4 h-4 bg-[#6F4E37] rounded-full absolute left-1/2 transform -translate-x-1/2 -top-4"></div>
                  <ExperienceCard experience={experience} position={position} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    websiteLink: PropTypes.string,
    demoLink: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  position: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default Project;