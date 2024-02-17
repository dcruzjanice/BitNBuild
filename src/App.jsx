import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Chat from "./components/Chat";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import ReportCorruption from "./components/ReportCorruption";
import './index.css';
import Dashboard from "./components/Dashboard";

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="#" element={<Chat />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/reportcorruption" element={<ReportCorruption />} />
          {/* <Redirect to ="/" /> */}
        </Routes>
      </Router>
      <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
