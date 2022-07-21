import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Rendezvous from "./pages/Rendezvous";
import Contact from "./pages/Contact";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus*/}
        <Route path="*" element={<Home />} />{" "}
        <Route path="/services" element={<Services />} />
        <Route path="/rendezvous" element={<Rendezvous />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
