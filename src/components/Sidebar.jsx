// components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import { HomeIcon, UserIcon, CodeIcon, BookOpenIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  const menuItems = [
    { id: "home", icon: <HomeIcon className="h-6 w-6" />, label: "Home", path: "/" },
    { id: "about", icon: <UserIcon className="h-6 w-6" />, label: "About", path: "/about" },
    { id: "projects", icon: <CodeIcon className="h-6 w-6" />, label: "Projects", path: "/projects" },
    { id: "contact", icon: <BookOpenIcon className="h-6 w-6" />, label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-20 left-5 w-20 bg-gray-900 text-gray-400 shadow-lg rounded-lg flex flex-col items-center py-4">
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            `mb-4 flex flex-col items-center justify-center p-2 rounded-lg ${
              isActive ? "bg-blue-500 text-white" : "hover:text-white hover:bg-gray-700"
            }`
          }
        >
          {item.icon}
          <span className="text-xs mt-1">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
