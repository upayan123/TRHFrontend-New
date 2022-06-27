import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="social">
          <ul>
            <li className="twit">
              <a href="#">
                Twitter <i className="fa fa-twitter "></i>
              </a>
            </li>
            <li className="insta">
              <a href="#">
                Instagram <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li className="linke">
              <a href="#">
                Linkedin <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="facebook">
              <a href="#">
                Facebook <i className="fa fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
