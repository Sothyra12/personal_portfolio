// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Footer from "./components/footer";

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
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
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