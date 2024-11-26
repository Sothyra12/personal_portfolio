// src/components/pages/projects.jsx

import PropTypes from 'prop-types';
import projectPic from "../../assets/projCover.png"; // Update this with the actual path to your project image

const projects = [
  {
    name: "Electronic Library",
    description: "Spring Boot | ReactJs | MySQL",
    githubLink: "#",
    websiteLink: "#",
    imageUrl: `${projectPic}`, // Add the image URL or path here
  },
  {
    name: "Job Tracker",
    description: "HTML | CSS | JS | PHP | MySQL",
    githubLink: "#",
    websiteLink: "#",
    imageUrl: `${projectPic}`, // Add the image URL or path here
  },
  {
    name: "Smart Home System",
    description: "ReactJs | React Native",
    githubLink: "#",
    websiteLink: "#", // Update this with your actual portfolio link
    imageUrl: `${projectPic}`, // Add the image URL or path here
  },
  {
    name: "My Portfolio (current)",
    description: "HTML | CSS | JS | Bootstrap",
    githubLink: "#",
    websiteLink: "#", // Update this with your actual resume link
    imageUrl: `${projectPic}`, // Add the image URL or path here
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

const ProjectCard = ({ project }) => (
  <div className="w-full sm:w-1/2 md:w-1/4 p-4">
    <div className="bg-[#F3EEEA] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={project.imageUrl}
        alt={project.name}
      />
      <div className="p-4 text-[#603F26]">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm">{project.description}</p>
        <div className="mt-4 flex justify-between">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6F4E37] hover:text-[#F3EEEA]"
          >
            Github
          </a>
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6F4E37] hover:text-[#F3EEEA]"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ experience }) => (
  <div className="relative w-full sm:w-1/2 md:w-1/3 p-6 bg-white rounded-lg shadow-lg">
    <div className="text-[#603F26]">
      <h3 className="text-lg font-semibold">{experience.title}</h3>
      <h4 className="text-md font-light text-[#6F4E37]">{experience.company}</h4>
      <p className="text-sm text-[#6F4E37]">{experience.date}</p>
      <p className="text-sm text-[#603F26] mt-2">{experience.description}</p>
    </div>
  </div>
);

const Project = () => (
  <div className="container mx-auto p-16">
    <h1 className="text-4xl font-extralight pb-4 text-[#6F4E37] text-center md:text-center mb-6">
      My Projects
    </h1>

    {/* Projects Section */}
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>

    <h2 className="text-3xl font-extralight pb-4 text-[#6F4E37] text-center md:text-center mt-12 mb-6">
      Experience & Internship
    </h2>

    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-4xl">
        {/* Vertical line */}
        <div className="border-l-4 border-[#6F4E37] h-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="flex flex-col space-y-4">
          {experienceData.map((experience, index) => (
            <div key={index} className="flex items-center">
              {/* Circle for experience */}
              <div className="w-4 h-4 bg-[#6F4E37] rounded-full absolute left-1/2 transform -translate-x-1/2 -top-2"></div>
              <ExperienceCard experience={experience} />
            </div>
          ))}
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
};

export default Project;