// src/components/pages/attribution.jsx

const Attribution = () => {
  const credits = [
    {
      name: "Freepik LinkedIn Icon",
      url: "https://www.freepik.com/icon/linkedin_1384088#fromView=search&page=1&position=23&uuid=37672b04-b8bb-4810-b964-49b92ffd70ab",
      description: "Provided the icons for the website using Freepik.",
    },
    {
      name: "Freepik Github Icon",
      url: "https://www.freepik.com/icon/github_2956194#fromView=image_search_similar&page=1&position=33&uuid=6400b2fc-05ae-4b51-9e41-1ab6441bb5f6",
      description: "Provided the icons for the website using Freepik.",
    },
    {
      name: "Splash Image",
      url: "https://www.pngegg.com/en/png-dnsro",
      description:
        "Utilized this image in the About section for splash backgrounds.",
    },
    {
      name: "Heroicons",
      url: "https://heroicons.com",
      description: "Used for icons in various sections of the website.",
    },
    {
      name: "React Icons",
      url: "https://react-icons.github.io/react-icons/",
      description:
        "Provided high-quality Feather icons for sidebar elements.",
    },
    {
      name: "Font Awesome",
      url: "https://heroicons.com",
      description: "Used for icons in the Footer section of the website.",
    },
    {
      name: "Ready Player Me",
      url: "https://readyplayer.me/",
      description:
        "Integrated the 3d charcater in the Home section.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 sm:px-8 lg:px-0 min-h-screen bg-[#FBF8EF] mb-20">
      <div className="py-8 max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-extralight pb-4 text-[#6F4E37] text-center mb-6">
          Attribution
        </h1>
        <p className="text-[#66785F] pb-8 sm:pb-4 font-Fuzzy text-center text-lg sm:text-base leading-normal">
          &quot; A heartfelt and sincere appreciation to the amazing creators and
          communities who provided the free resources for this project. For
          their generosity and dedication to the open-source community, I
          decided to devote this entire page to express my warm acknowledgment
          and cordial thanks. &quot; <br></br>-<span className="text-[#94A684]"> Sothyra Chan</span>
        </p>
        <div className="space-y-6">
          {credits.map((credit, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-4">
              <div>
                <h2 className="text-base sm:text-sm font-medium text-[#6A492B]">
                  {credit.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-xs font-light">
                  {credit.description}
                </p>
              </div>
              <a
                href={credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center mt-8 sm:mt-8 sm:text-xs text-sm text-[#8D7B68] hover:text-[#6C4E31] transition-colors duration-200">
                Visit {credit.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Attribution;
