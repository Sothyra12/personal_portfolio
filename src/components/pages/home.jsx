import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import myResume from "../../assets/sothyra_resume.pdf";

function AnimatedAvatar() {
  // Load the GLB model and animations
  const { scene, animations } = useGLTF('/models/Waving.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log('Available animations:', animations);
    console.log('Actions:', actions);

    // Play the animation (replace 'mixamo.com' with your actual animation name)
    if (actions && actions['mixamo.com']) {
      actions['mixamo.com'].reset().play(); // Reset and play the animation
    }
  }, [actions, animations]);

  return (
    <group position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Fix orientation with rotation */}
      <primitive object={scene} />
    </group>
  );
}

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4 sm:px-8 lg:px-0">
      <div className="py-8 max-w-2xl mx-auto space-y-10 mb-20">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8">
          {/* Text Section */}
          <div className="sm:w-1/2 mb-8 sm:mb-0">
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

          {/* Model Section */}
          <div className="sm:w-1/2 flex justify-center sm:justify-end">
            <div style={{ width: '250px', height: '250px' }}>
              <Canvas>
                <Suspense fallback={<div>Loading...</div>}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[0, 5, 5]} intensity={1} />
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
useGLTF.preload('/models/Waving.glb');

export default Home;