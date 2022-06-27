import React from "react";

function Apply() {
  return (
    <div>
      <div className="offwrap"></div>

      <div className="main-content">
        <div className="rs-breadcrumbs img1">
          <div className="container">
            <div className="breadcrumbs-inner">
              <h1 className="page-title">
                Explore Opportunities-career
                <span className="watermark">Apply Now</span>
              </h1>
              <span className="sub-text">
                We Provide Training Each And Everyone Employee's Seriously, This
                Means Giving Each Employee Complete Courses And Develop Their
                Skills.
              </span>
            </div>
          </div>
        </div>

        <div className="rs-appointment style1 apply-career bg17 pt-95 pb-95">
          <div className="container">
            <div className="appoint-schedule">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sec-title3 text-center ">
                    <h2 className="title ">Apply For Java Developer</h2>
                    <div className="heading-border-line"></div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="row ">
                <div className="col-lg-6 ">
                  <div className="cont22">
                    <p>
                      Experience in core Java advanced programming. Experience
                      in Spring & Hibernate is mandatory. Experience in building
                      mechanisms like Maven. Good knowledge on design patterns
                      and anti-patterns. Good in algorithms and data structures.
                      Good understanding of Database concepts and Experience in
                      SQL, PLSQL and NoSQL. Excellent Analytical and program
                      solving skills Excellent written and oral communication
                      skills self-starter and highly motivated Work in a dynamic
                      environment and ability to adapt quickly to changes.
                      Experience with Test and defect management tools. An
                      innovator, always suggesting newer ways of improving
                      Productivity. Mentor and train team members. Identify and
                      escalate Risks on time and suggest mitigation measures.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 ">
                  <div className="contact-wrap">
                    <div id="form-messages"></div>
                    <form id="contact-form" method="post" action="mailer.php">
                      <fieldset>
                        <div className="row">
                          <div className="col-md-6 col-sm-12 col-xs-12 mb-30">
                            <div className="form-group">
                              <label>Name</label>
                              <input
                                id="text"
                                name="your name"
                                className="form-control-mod"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12 col-xs-12 mb-30">
                            <div className="form-group">
                              <label>E-Mail</label>
                              <input
                                id="email"
                                name="email"
                                className="form-control-mod"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12 col-xs-12 mb-30">
                            <div className="form-group">
                              <label>Phone</label>
                              <input
                                id="phone"
                                name="phone"
                                className="form-control-mod"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12 col-xs-12 mb-30">
                            <div className="form-group">
                              <label>Apply position</label>
                              <input
                                id="position"
                                name="position"
                                className="form-control-mod"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-6 mb-30">
                            <div className="form-group">
                              <label>Your Resume</label>
                              <span className="wpcf7-form-control-wrap resume">
                                <input
                                  type="file"
                                  name="resume"
                                  size="40"
                                  className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required"
                                  required
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-35">
                            <textarea
                              className="from-control"
                              id="message"
                              name="message"
                              placeholder="Your message Here"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="btn-part">
                          <div className="form-group mb-0">
                            <input
                              className="readon submit"
                              type="submit"
                              value="Submit Now"
                            />
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div id="scrollUp" className="blue-color">
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  );
}

export default Apply;
