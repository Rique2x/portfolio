import React from "react";
import {
  Header,
  Skills,
} from "./container";
import "./App.scss";

const App = () => {
  document.title = "Rique's Portfolio";
  return (
    <div className="app">
      <Header />
      <Skills />
    </div>
  );
};

export default App;