import React from "react";

function Footer() {
  return (
    <div>
      <footer
        id="rs-footer"
        className="rs-footer style1 footer-home3-style"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          className="icon-six"
          style={{ backgroundImage: "url(images/icon-6.png)" }}
        ></div>

        <div
          className="icon-seven"
          style={{ backgroundImage: "url(images/icon-7.png)" }}
        ></div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-12 col-sm-12 md-mb-10">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="site-map">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/technology">Technology</a>
                  </li>
                  <li>
                    <a href="/feature">Features</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 md-mb-10 pl-55 md-pl-15">
                <h3 className="footer-title">General Links</h3>
                <ul className="site-map">
                  <li>
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                  <li>
                    <a href="/return">Return and Refund Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 md-mb-10">
                <h3 className="footer-title">Contact Info</h3>
                <ul className="address-widget">
                  <li>
                    <i className="fa fa-map marker"></i>
                    <div className="desc">
                      51, Electronic Complex, Pardesipura,
                      <br />
                      Indore, Madhya Pradesh 452007
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <div className="desc">
                      <a href="tel:0731 356 2005">0731 356 20055</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <div className="desc">
                      <a href="mailto:sales@therapidhire.com">
                        sales@therapidhire.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i>
                    <div className="desc">Office Hours: 10AM - 7PM</div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12">
                <h3 className="footer-title">Newsletter</h3>
                <p className="widget-desc white-color">
                  Stay up to update with our latest news and products.
                </p>
                <p>
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Your email address"
                    required=""
                  />
                  <input type="submit" value="Subscribe Now" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row y-middle">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p>© 2022 The Rapid Hire Pvt. Ltd . All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
