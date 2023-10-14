import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-page pt-page-4" data-id="portfolio">
      <div className="container">
        <div className="row align-items-lg-center">
          {/* Portfolio Box*/}
          <div className="col-lg-12">
            {/*Portfolio Items*/}
            <div
              id="js-grid-mosaic-flat"
              className="cbp cbp-l-grid-mosaic-flat"
            >
              {/* Item */}
              <div className="cbp-item">
                <a
                  href="https://my.spline.design/untitled-33a5b4375788575ee7f166cad0718f7d/"
                  className="cbp-caption"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="cbp-caption-defaultWrap">
                    <img
                      src="personal/img/follow-cursor.png"
                      alt="follow-cursor"
                    />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <i className="lni-arrow-right p-icon" />
                    <div className="port-content">
                      <p className="mb-1 main-color">
                        Follow Cursor | Three.js
                      </p>
                      <h5>Dernière Réalisation</h5>
                    </div>
                  </div>
                </a>
              </div>
              {/* Item */}
              <div className="cbp-item">
                <a
                  href="https://my.spline.design/unicornspray-d5218627b2afd9ff55fe02d7fb4f3f2f/"
                  target="_blank"
                  className="cbp-caption "
                  rel="noreferrer"
                >
                  <div className="cbp-caption-defaultWrap">
                    <img src="personal/img/parfum.png" alt="parfum" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <i className="lni-arrow-right p-icon" />
                    <div className="port-content">
                      <p className="mb-1 main-color">
                        Parfum-effect | Three.js
                      </p>
                      <h5>Dernière Réalisation</h5>
                    </div>
                  </div>
                </a>
              </div>
              {/* Item */}
              <div className="cbp-item">
                <a
                  href="https://my.spline.design/untitled-0d1148be69cd9a24686c294281624eb0/"
                  target="_blank"
                  className="cbp-caption "
                  rel="noreferrer"
                >
                  <div className="cbp-caption-defaultWrap">
                    <img src="personal/img/dream.png" alt="dream" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <i className="lni-arrow-right p-icon" />
                    <div className="port-content">
                      <p className="mb-1 main-color">Dream | Three.js</p>
                      <h5>Dernière Réalisation</h5>
                    </div>
                  </div>
                </a>
              </div>
              {/* Item */}
              <div className="cbp-item">
                <a
                  href="https://my.spline.design/burger-83806e1d652c380cf0906f09672e9b0d/"
                  target="_blank"
                  className="cbp-caption "
                  rel="noreferrer"
                >
                  <div className="cbp-caption-defaultWrap">
                    <img src="personal/img/burger.png" alt="burger" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <i className="lni-arrow-right p-icon" />
                    <div className="port-content">
                      <p className="mb-1 main-color">Burger| Three.js</p>
                      <h5>Dernière Réalisation</h5>
                    </div>
                  </div>
                </a>
              </div>
              {/* Item */}
              <div className="cbp-item">
                <a
                  href="https://my.spline.design/untitled-6e87e8126edb1a8a8779b9a938d56a13/"
                  target="_blank"
                  className="cbp-caption "
                  rel="noreferrer"
                >
                  <div className="cbp-caption-defaultWrap">
                    <img src="personal/img/mockup.png" alt="mockup" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <i className="lni-arrow-right p-icon" />
                    <div className="port-content">
                      <p className="mb-1 main-color">Mockup | Three.js</p>
                      <h5>Dernière Réalisation</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
