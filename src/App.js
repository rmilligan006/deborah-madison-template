import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Books from "./components/Books";
import Calendar from "./components/Calendar";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
