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
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="max-w-7xl mx-auto bg-[#FBF8EF] shadow-sm">
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
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;