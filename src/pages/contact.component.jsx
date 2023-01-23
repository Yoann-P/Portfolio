import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pt-page pt-page-6" data-id="contact">
      <div className="container">
        <div className="row align-items-lg-center">
          {/*Form area*/}
          <div className="col-lg-6 pr-lg-5">
            <div className="heading-area">
              <h6 className="sub-title main-color">Have any Question ?</h6>
              <h2 className="title">Let's Get In Touch</h2>
            </div>
            {/*Contact Form*/}
            <form className="contact-form" id="contact-form-data">
              <div className="row">
                <div className="col-sm-12" id="result" />
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      required
                      id="your_name"
                      name="userName"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      required
                      id="your_email"
                      name="userEmail"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Subject"
                  required
                  id="your_subject"
                  name="userSubject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="message"
                  name="userMessage"
                  defaultValue={""}
                />
              </div>
              {/*Button*/}
              <a
                href="/#"
                id="submit_btn"
                className="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
              >
                <i
                  className="fa fa-spinner fa-spin mr-2 d-none"
                  aria-hidden="true"
                />
                Send Message
              </a>
            </form>
            {/* Address */}
            <ul className="address-item">
              {/*item*/}
              <li className="w-100 mb-4">
                <i className="lni-apartment main-color" />
                <div className="content">
                  <h6 className="main-color m-0">Address</h6>
                  <p>Come visit us: 123 New Street, Our City , Australia.</p>
                </div>
              </li>
              {/*item*/}
              <li className="pr-2">
                <i className="lni-comment-reply main-color" />
                <div className="content">
                  <h6 className="main-color m-0">Email:</h6>
                  <p>
                    <a href="mailto:email@website.co">email@website.com</a>
                  </p>
                </div>
              </li>
              {/*item*/}
              <li>
                <i className="lni-phone-handset main-color" />
                <div className="content">
                  <h6 className="main-color m-0">Address</h6>
                  <p>
                    <a href="tel:002343474383">002 343474383</a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/*map area*/}
          <div className="col-lg-6">
            <div className="map-half bg-map" id="map" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
