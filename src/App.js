import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import DevWeb from "./pages/DevWeb";
import DevMobile from "./pages/DevMobile"
import Home from "./pages/Home"; // Home page component
import MyWork from "./pages/MyWork"; // My Work page component
import Blog from "./compo/Blog"
import ContactMe from "././pages/ContactMe"
import NavigateHeader from "./compo/NavigateHeader";

function App() {
  return (
    <div className="App">
  

      {/* <main className="main-container"> */}
        {/* <h1 className="bounce">
          <span>Hi, I am Amit Kumar Araya....</span>
        </h1> */}

        {/* Navigation Buttons */}

        {/* <div className="main-button">
          <Link to="/web-dev"><button>Web Dev</button></Link>
          <Link to="/mobile-dev"><button>Mobile Dev</button></Link>
        </div> */}

        {/* Routes */}
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-dev" element={<DevWeb />} />
          <Route path="/mobile-dev" element={<DevMobile />} />
          <Route path="/my-work" element={<MyWork />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      {/* </main> */}
    </div>
  );
}

export default App;
