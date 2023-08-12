import React from "react";
import Header from "./Comp/Head/Header";
import Home from "./Comp/Hom/Home";
import Experience from "./Comp/Experience/Experience";
import Certficate from "./Comp/Certificat/Certificate";
import Contact from "./Comp/Contact/Contact";
import Footer from "./Comp/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Certficate />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
