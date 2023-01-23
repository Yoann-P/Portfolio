import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header-left">
        {/*Logo*/}
        <a className="logo" href="index.html">
          <h1 className="logo-text">
            <img src="personal/img/logo.png" alt="logo" />
          </h1>
        </a>
        {/*Hamburger*/}
        <a href="#home" className="sidemenu_btn" id="sidemenu_toggle">
          <span />
          <span />
          <span />
        </a>
        {/* Navigation & Social buttons */}
        <div className="site-nav">
          {/* Main menu */}
          <ul className="site-main-menu alt-font" id="nav">
            <li>
              {/* href value = data-id without # of .pt-page. Data-goto is the number of section */}
              <a
                className="pt-trigger"
                data-animation={58}
                data-goto={1}
                href="#home"
              >
                <i className="lni-home" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                className="pt-trigger"
                data-animation={61}
                data-goto={6}
                href="#contact"
              >
                <i className="lni-licencse" />
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a
                className="pt-trigger"
                data-animation={59}
                data-goto={2}
                href="#about"
              >
                <i className="lni-user" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                className="pt-trigger"
                data-animation={61}
                data-goto={3}
                href="#services"
              >
                <i className="lni-first-aid" />
                <span>Services</span>
              </a>
            </li>
            <li>
              <a
                className="pt-trigger"
                data-animation={59}
                data-goto={4}
                href="#portfolio"
              >
                <i className="lni-gallery" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a
                className="pt-trigger"
                data-animation={58}
                data-goto={5}
                href="#clients"
              >
                <i className="lni-emoji-smile" />
                <span>Client</span>
              </a>
            </li>
            {/* <li>
              <a
                className="pt-trigger"
                data-animation={61}
                data-goto={6}
                href="#contact"
              >
                <i className="lni-licencse" />
                <span>Contact</span>
              </a>
            </li> */}
          </ul>
          {/* /Main menu */}
        </div>
      </header>
    </div>
  );
};

export default Header;
