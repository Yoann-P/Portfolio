import React from "react";

const Portfolio = () => {
  return (
    <div>
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
                    href="personal/img/port-1.jpg"
                    className="cbp-caption cbp-lightbox"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="personal/img/port-1.jpg" alt="port-1" />
                    </div>
                    <div className="cbp-caption-activeWrap">
                      <i className="lni-arrow-right p-icon" />
                      <div className="port-content">
                        <p className="mb-1 main-color">Elegent | Images</p>
                        <h5>Latest Work</h5>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Item */}
                <div className="cbp-item">
                  <a
                    href="personal/img/port-2.jpg"
                    className="cbp-caption cbp-lightbox"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="personal/img/port-2.jpg" alt="port-1" />
                    </div>
                    <div className="cbp-caption-activeWrap">
                      <i className="lni-arrow-right p-icon" />
                      <div className="port-content">
                        <p className="mb-1 main-color">Elegent | Images</p>
                        <h5>Latest Work</h5>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Item */}
                <div className="cbp-item">
                  <a
                    href="personal/img/port-3.jpg"
                    className="cbp-caption cbp-lightbox"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="personal/img/port-3.jpg" alt="port-1" />
                    </div>
                    <div className="cbp-caption-activeWrap">
                      <i className="lni-arrow-right p-icon" />
                      <div className="port-content">
                        <p className="mb-1 main-color">Elegent | Images</p>
                        <h5>Latest Work</h5>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Item */}
                <div className="cbp-item">
                  <a
                    href="personal/img/port-4.jpg"
                    className="cbp-caption cbp-lightbox"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="personal/img/port-4.jpg" alt="port-1" />
                    </div>
                    <div className="cbp-caption-activeWrap">
                      <i className="lni-arrow-right p-icon" />
                      <div className="port-content">
                        <p className="mb-1 main-color">Elegent | Images</p>
                        <h5>Latest Work</h5>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Item */}
                <div className="cbp-item">
                  <a
                    href="personal/img/port-5.jpg"
                    className="cbp-caption cbp-lightbox"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="personal/img/port-5.jpg" alt="port-1" />
                    </div>
                    <div className="cbp-caption-activeWrap">
                      <i className="lni-arrow-right p-icon" />
                      <div className="port-content">
                        <p className="mb-1 main-color">Elegent | Images</p>
                        <h5>Latest Work</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
