// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import { FiHome, FiUser, FiCode, FiMail } from "react-icons/fi";

const menuItems = [
  {
    id: "home",
    icon: <FiHome className="h-5 w-5" />,
    label: "Home",
    path: "/",
  },
  {
    id: "about",
    icon: <FiUser className="h-5 w-5" />,
    label: "About",
    path: "/about",
  },
  {
    id: "projects",
    icon: <FiCode className="h-5 w-5" />,
    label: "Project",
    path: "/project",
  },
  {
    id: "contact",
    icon: <FiMail className="h-5 w-5" />,
    label: "Email",
    path: "/contact",
  },
];

const Sidebar = () => {
  return (
    <>
      {/* Mobile Layout (Bottom, Pill-Shaped, Glass Morph) */}
      <div
        className="
          md:hidden 
          fixed bottom-10 left-1/2 transform -translate-x-1/2 
          w-[90%] max-w-md p-2 flex items-center justify-evenly 
          rounded-full shadow-lg 
          bg-[#776B5D]/50 bg-clip-padding backdrop-filter backdrop-blur-md border border-white/30
          z-50
        ">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-colors duration-200 
               ${
                 isActive
                   ? "text-white"
                   : "hover:bg-[#DFDDC7]/40  hover:text-white"
               }`
            }>
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* iPad Layout (Horizontal Sidebar at Top) */}
      <div
        className="
          hidden md:flex lg:hidden 
          fixed top-0 left-0 w-full h-16 
          flex items-center justify-evenly 
          bg-[#776B5D]/60 bg-clip-padding backdrop-filter backdrop-blur-md border-b border-white/30
          z-50
        ">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-4 h-full transition-colors duration-200
               ${
                 isActive
                   ? "text-white border-b-2 border-white"
                   : "hover:bg-[#DFDDC7]/40 hover:text-white"
               }`
            }>
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>

      {/* Desktop Layout (Vertical Sidebar, Glass Morph) */}
      <div
        className="
          hidden lg:flex 
          fixed top-1/2 left-4 transform -translate-y-1/2 
          w-20 flex-col items-center py-4 
          rounded-full shadow-lg 
          bg-[#776B5D]/60 bg-clip-padding backdrop-filter backdrop-blur-md
          z-50
        ">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `mb-3 flex flex-col items-center justify-center gap-1 w-12 h-12 rounded-full transition-colors duration-200
               ${
                 isActive
                   ? "text-white"
                   : "hover:bg-[#DFDDC7]/40 hover:text-white"
               }`
            }>
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;