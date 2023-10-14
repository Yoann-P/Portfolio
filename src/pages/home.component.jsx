import React from "react";

const Home = () => {
  return (
    <section id="home" className="pt-page pt-page-1" data-id="home">
      <div className="container slider-container">
        <div className="row align-items-lg-center">
          {/* Image Area */}
          <div className="col-lg-7 order-lg-2">
            <div className="slider-image">
              <img src="personal/img/slide-moi.png" alt="Yoann.P" />
            </div>
          </div>
          {/* Text Area */}
          <div className="col-lg-5 wow fadeInRight">
            {/* Box Area */}
            <div className="heading-box">
              <h2>
                Designer<span className="main-color">UI/UX</span> <br />
                Dev Front
              </h2>
              <p>
                Je suis <span className="main-color">Yoann</span>, un web
                designer passionné et créatif. Je conçois des sites web modernes
                et élégants qui captivent les utilisateurs. Avec mon expertise
                en&nbsp;
                <span className="main-color">design UI/UX</span> et mon
                utilisation des dernières technologies, je crée des expériences
                utilisateur engageantes et intuitives.
              </p>
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
