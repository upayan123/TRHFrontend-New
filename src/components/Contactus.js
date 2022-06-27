import React from "react";

function Contactus() {
  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Have questions - contact us
                <span className="watermark">Contact</span>
              </h1>
              <span className="sub-text">
                Get in touch with us and discuss the needs and requirements of
                your Development project.
              </span>
            </div>
          </div>
        </div>

        <div className="rs-contact contact-style2 bg9 pt-95 pb-95 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pr-40 md-pr-15 md-mb-50">
                <div className="contact-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3368426490233!2d75.86513545041912!3d22.75287738501716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e32b2894590f%3A0x4e73ebc1261cc50!2sTheRapidHire%20Private%20Limited!5e0!3m2!1sen!2sin!4v1654772103650!5m2!1sen!2sin"></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title mb-45 md-mb-25">
                  <h2 className="title pb-20">
                    Let us help your business to move <span>forward.</span>
                  </h2>
                  <p className="margin-0">
                    We donec pulvinar magna id leoersi pellentesque impered
                    dignissim rhoncus euismod euismod eros vitae..
                  </p>
                </div>
                <div className="contact-wrap">
                  <div id="form-messages"></div>
                  <form id="contact-form" method="post" action="mailer.php">
                    <fieldset>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="E-Mail"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                          <input
                            className="from-control"
                            type="text"
                            id="Website"
                            name="subject"
                            placeholder="Your Website"
                            required=""
                          />
                        </div>

                        <div className="col-lg-12 mb-35">
                          <textarea
                            className="from-control"
                            id="message"
                            name="message"
                            placeholder="Your message Here"
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="btn-part">
                        <div className="form-group mb-0">
                          <input
                            className="readon submit"
                            type="submit"
                            value="Contact Us"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="rs-contact main-home">
            <div className="container">
              <div className="contact-icons-style box-address pt-95 ">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <i className="fa fa-map marker"></i>
                        </div>
                        <h2 className="title">
                          <a href="#">USA office</a>
                        </h2>
                        <p className="services-txt">
                          1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801
                          USA
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <i className="fa fa-map-pin"></i>
                        </div>
                        <h2 className="title">
                          <a href="#">BD office</a>
                        </h2>
                        <p className="services-txt">
                          51, Electronic Complex, Pardesi Pura Main Road,
                          INDORE(M.P){" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <h2 className="title">
                          <a href="#">Email us</a>
                        </h2>
                        <a href="mailto:sales@therapidhire.com">
                          sales@therapidhire.com
                        </a>
                        <br />
                        <a href="mailto:info@therapidhire.com">
                          info@therapidhire.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="contact-item">
                      <div className="content-text">
                        <div className="contact-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <h2 className="title">
                          <a href="#">Call us</a>
                        </h2>
                        <a href="tel:+1 (917) 628 2406">+1 (917) 628 2406</a>
                        <br />
                        <a href="tel:073135620055">+0731 356 20055</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


     
    </div>
  );
}

export default Contactus;
