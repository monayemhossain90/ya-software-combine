import React from "react";
import "../../styles/footer.css";
import logo from "../../images/logo.png";
function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div>
          <div>
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="footer-wapper">
            <div className="about-company">
              <p>
                We develop any software with care and accuracy as possible, we
                match the requirements and deliver timely. We believe in under
                promise and over delivery.
              </p>
              <div className="social-icon">
                <a href="https">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="https">
                  <i class="ri-twitter-fill"></i>
                </a>
                <a href="https">
                  <i class="ri-linkedin-fill"></i>
                </a>
                <a href="https">
                  <i class="ri-youtube-fill"></i>
                </a>
              </div>
            </div>
            <div className="quick-link">
              <h4>Links</h4>
              <ul>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
            <div className=" location">
              <h4>Location</h4>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <ul>
                <li>
                  <a href="tel:1 571-899-0026">
                  <i class="ri-map-pin-fill"></i><span>1 571-899-0026</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@yasoftware.net"
                  >
                    <i class="ri-mail-fill"></i><span>info@yasoftware.net</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="">
            <small>© 2023. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;