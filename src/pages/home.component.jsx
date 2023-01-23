import React from "react";

const Home = () => {
  return (
    <section id="home" className="pt-page pt-page-1" data-id="home">
      <div className="container slider-container">
        <div className="row align-items-lg-center">
          {/* Image Area */}
          <div className="col-lg-7 order-lg-2">
            <div className="slider-image">
              <img src="personal/img/girl.png" alt="girl" />
            </div>
          </div>
          {/* Text Area */}
          <div className="col-lg-5 wow fadeInRight">
            {/* Box Area */}
            <div className="heading-box">
              <h2>
                Walker<span className="main-color">son</span> Hardin
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum is at the
                available, but the majority have
                <span className="main-color">suffered</span> alteration some
                form, by injected humour randomised words at the available.
              </p>
              <a href="#;" data-text="Read More" className="btn btn-link">
                Read More
              </a>
            </div>
          </div>
        </div>
        {/* Shapes */}
        <span className="shape-square" />
        <span className="shape-triangle" />
        <span className="shape-plus" />
        <span className="shape-circle" />
      </div>
    </section>
  );
};

export default Home;
