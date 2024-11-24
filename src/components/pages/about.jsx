// src/components/pages/About.jsx

const About = () => {
    return (
      <div className="bg-light-beige text-gray-800 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <section id="about-me">
            <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
            <p className="text-lg leading-relaxed text-center">
              Hi! I am <span className="font-bold">Sothyra</span>, a passionate and
              dedicated web developer with a love for creating beautiful,
              functional, and user-friendly websites. I enjoy learning new
              technologies and pushing the boundaries of what is possible with
              code. Welcome to my portfolio!
            </p>
          </section>
  
          {/* Skills Section */}
          <section id="skills" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "TailwindCSS",
                "Git & GitHub",
                "Python",
                "C#",
                "SQL",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
  
          {/* Experience Section */}
          <section id="experience">
            <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">
                  JavaScript Developer Intern
                </h3>
                <p className="text-sm text-gray-600">Semios, Canada • 2024</p>
                <p className="mt-2 text-gray-700">
                  Worked on enhancing agriculture sustainability by contributing
                  to IoT and big data applications.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">Volunteer Teacher</h3>
                <p className="text-sm text-gray-600">
                  Human & Hope Association • 2023
                </p>
                <p className="mt-2 text-gray-700">
                  Taught English and Khmer to underprivileged students and
                  assisted in library operations.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">Library Assistant</h3>
                <p className="text-sm text-gray-600">
                  Human & Hope Association • 2023
                </p>
                <p className="mt-2 text-gray-700">
                  Managed library resources and helped organize community events
                  promoting literacy.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default About;
  