import React from "react";
import {
  Header,
  Skills,
  About,
  Experience,
  Particles,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  document.title = "Rique's Portfolio";
  return (
    <div className="app">
      <Navbar />
      <Particles />
      <Header />
      <Skills />
      <About />
      <Experience />
    </div>
  );
};

export default App;