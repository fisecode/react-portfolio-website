import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = function () {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{ height: 2000 }}></div>
    </div>
  );
};

export default App;
