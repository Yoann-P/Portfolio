import React from "react";
import Home from "./home.component";

import Contact from "./contact.component";
import Portfolio from "./portfolio.component";

const General = () => {
  return (
    <div className="main-left" id="main">
      <div className="pt-wrapper">
        <div className="subpages">
          <Home />
          <Contact />
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default General;
