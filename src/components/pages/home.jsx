// src/components/pages/home.jsx

import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from '@react-three/drei';
import { useGLTF, useAnimations } from "@react-three/drei";
import myResume from "../../assets/sothyra_resume.pdf";

function AnimatedAvatar() {
  // Load the GLB model and animations
  const { scene, animations } = useGLTF("/models/Waving.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log("Available animations:", animations);
    console.log("Actions:", actions);

    if (actions && actions["Armature.001|mixamo.com|Layer0"]) {
      actions["Armature.001|mixamo.com|Layer0"].reset().play();
    }
  }, [actions, animations]);

  return (
    <group position={[0, -7, -5]} scale={[8, 8, 2]}>
      <primitive object={scene} />
    </group>
  );
}

const Home = () => {
  return (
    <main className="flex flex-col items-center px-0 sm:px-4 lg:px-0 md:px-12">
      <div className="pt-14 pb-8 max-w-4xl mx-auto space-y-10 mb-20">
        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8 md:space-x-10">
          {/* Text Section */}
          <div className="w-full sm:w-1/2 mb-8 sm:mb-0 px-4 md:px-6">
            <p className="text-lg sm:text-lg md:text-xl font-thin text-center sm:text-left mb-2">
              Hello, I am
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-thin italic pb-5 text-[#6F4E37] text-center sm:text-left leading-tight">
              Sothyra Chan
            </h2>
            <p className="font-normal text-sm sm:text-sm md:text-base text-gray-600 text-center sm:text-left mb-6 leading-relaxed">
              <br></br>A thriving individual with a strong foundation
              in web technologies and a passion for building intuitive,
              accessible, and user-friendly experiences. Proficient in
              JavaScript, React, and front-end development, with experience
              collaborating in diverse teams to create innovative solutions.
              Committed to continuous learning and refining digital interactions
              to effectively meet user needs.
            </p>
            <div className="flex justify-center sm:justify-start">
              <a href={myResume} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#A0937D] hover:bg-[#6C4E31] text-white font-medium py-3 px-6 md:px-8 rounded-full transition-colors duration-200 text-sm sm:text-sm md:text-base">
                  Resume
                </button>
              </a>
            </div>
          </div>

          {/* Model Section */}
          <div className="w-full sm:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-86 sm:h-86 md:w-96 md:h-96">
              <Canvas>
                <Suspense fallback={<Html center>Loading...</Html>}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[1, 0, 2]} intensity={2} />
                  <AnimatedAvatar />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// Preload the GLTF model
useGLTF.preload("/models/Waving.glb");

export default Home;
