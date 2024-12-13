// src/components/pages/About.jsx

import "@fortawesome/fontawesome-free/css/all.min.css";
import myPic from "../../assets/myPic.png";
import splashBg from "../../assets/splash.png";

const About = () => {
  return (
    <div className="text-gray-800 p-16">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* About Me Section */}
        <section
          id="about-me"
          className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Profile Image */}
          <div className="w-48 h-48 md:w-[1400px] md:h-[320px] mb-6 md:mb-0 overflow-hidden rounded-full md:rounded-lg">
            <img
              src={myPic}
              alt="Profile"
              className="object-cover w-full h-90"
            />
          </div>

          {/* About Me Text */}
          <div className="ml-4 md:ml-10">
            <h2 className="text-4xl font-extralight pb-4 text-[#6F4E37] text-center md:text-center mb-6">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-center sm:text-left">
              Hi! I am Sothyra, a
              Software Engineering Technician recent graduate from Centennial
              College with a strong foundation and interest in web development
              and software testing. I am eager to apply my technical skills and
              ongoing learning through a full-time position or internship in
              the tech industry. I excel in teamwork, communication, and
              problem-solving, and am always enthusiastic to explore new
              technologies. I am ready to contribute my skillsets and grow further
              by learning from professionals in the field.
            </p>

            {/* Degree and GPA Info */}
            <div className="flex justify-center sm:justify-center space-x-35">
              <div
                className="text-center p-10 relative"
                style={{ width: "250px", height: "220px" }}>
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${splashBg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.2,
                  }}></div>
                <i className="fas fa-graduation-cap"></i>
                <p className="font-semibold text-lg z-10 mb-2">Degree</p>
                <p className="z-10">
                  Diploma in Software Engineering Technician
                </p>
              </div>

              <div
                className="text-center p-10 relative"
                style={{ width: "250px", height: "220px" }}>
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(${splashBg})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.2,
                  }}></div>
                <i className="fa fa-trophy"></i>
                <p className="font-semibold text-lg z-10 mb-2">Total GPA</p>
                <p className="z-10">3.88/4.5</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="h-full w-full bg-[#d7ccc8] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 p-8">
          <h2 className="text-4xl font-extralight pb-4 text-[#6F4E37] mb-6 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Frontend Development
              </h3>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">HTML</span>
                  <span className="text-sm text-gray-600">Experienced</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">CSS</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">JavaScript</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">React.js</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">R3F</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">TypeScript</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">Bootstrap</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">Tailwindcss</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            {/* Backend Development */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Backend Development
              </h3>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">MongoDB</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">MySQL</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">Node.js</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">Python</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
              </div>
            </div>

            {/* Other Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">
                Other Technologies
              </h3>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">
                    Manual Testing
                  </span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">
                    Test Case Writing
                  </span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">Git/Github</span>
                  <span className="text-sm text-gray-600">Intermediate</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">PL/SQL</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">Java, C#, C</span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">
                    Jira & Trello
                  </span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">
                     Blender
                  </span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-normal mr-2">
                     Functional & Api Testing
                  </span>
                  <span className="text-sm text-gray-600">Beginner</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;