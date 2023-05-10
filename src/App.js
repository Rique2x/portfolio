import React from "react";
import {
  Header,
  Skills,
  About,
  Experience
} from "./container";
import "./App.scss";

const App = () => {
  document.title = "Rique's Portfolio";
  return (
    <div className="app">
      <Header />
      <Skills />
      <About />
      <Experience />
    </div>
  );
};

export default App;