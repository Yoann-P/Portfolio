import React, { useState } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("loading");

    const data = new FormData(e.target);

    const response = await fetch("https://yoannpedase.com/sendmail.php", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-page pt-page-6" data-id="contact">
      <div className="container">
        <div className="row align-items-lg-center">
          {/*Form area*/}
          <div className="col-lg-6 pr-lg-5">
            <div className="heading-area">
              <h6 className="sub-title main-color">Une Question ?</h6>
              <h2 className="title">Contactez-moi</h2>
            </div>
            {/*Contact Form*/}
            <form
              className="contact-form"
              id="contact-form-data"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-sm-12" id="result" />
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Nom"
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
                  placeholder="Objet"
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
              <button
                type="submit"
                id="submit_btn"
                className="btn btn-large btn-rounded btn-green d-block mt-4 contact_btn"
                disabled={formStatus === "loading"}
              >
                {formStatus === "loading" && (
                  <i
                    className="fa fa-spinner fa-spin mr-2"
                    aria-hidden="true"
                  />
                )}
                Envoie
              </button>
            </form>
            {/* Address */}
            <ul className="address-item">
              {/*item*/}
              <li className="w-100 mb-4">
                <i className="lni-apartment main-color" />
                <div className="content">
                  <h6 className="main-color m-0">Addresse</h6>
                  <p>170 rue Lavoisier 59510 HEM</p>
                </div>
              </li>
              {/*item*/}
              <li className="pr-2">
                <i className="lni-comment-reply main-color" />
                <div className="content">
                  <h6 className="main-color m-0">Email:</h6>
                  <p>
                    <a href="mailto:pedaseyoann@gmail.com">
                      pedaseyoann@gmail.com
                    </a>
                  </p>
                </div>
              </li>
              {/*item*/}
              {/* <li>
                <i className="lni-phone-handset main-color" />
                <div className="content">
                  <h6 className="main-color m-0">Address</h6>
                  <p>
                    <a href="tel:002343474383">002 343474383</a>
                  </p>
                </div>
              </li> */}
            </ul>
          </div>
          {/*map area*/}
          <div className="col-lg-6">
            {/* <div className="map-half bg-map" id="map" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.796576964918!2d3.2017260157392884!3d50.66803737950592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c327d70d3fe0df%3A0x6bb3b6410eb9775d!2s170%20Rue%20Lavoisier%2C%2059510%20Hem!5e0!3m2!1sfr!2sfr!4v1683636697752!5m2!1sfr!2sfr"
              width="100%"
              className="map-half bg-map"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing location of company office in Hem, France"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
