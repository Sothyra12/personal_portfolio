// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Project from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Attribution from "./components/pages/attribution";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/*
        The following div uses responsive min-height values:
        - On small devices: full viewport height (min-h-screen).
        - On medium devices (e.g., iPad Mini portrait / Surface Pro 7): adjust height calculation.
        - On large devices: use your original calculation.
      */}
      <div className="w-full md:max-w-7xl mx-auto bg-[#FBF8EF] shadow-sm
                      min-h-screen 
                      sm:min-h-[calc(100vh-500px)] 
                      md:min-h-[calc(100vh-500px)] 
                      lg:min-h-[calc(100vh-500px)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col">
          {/* Header */}
          <Header />

          {/* Dynamic Content Area */}
          <div className="flex-grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/attribution" element={<Attribution />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;