import React from "react";
import "./components_css/footer.css";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <footer className="container">
        <div className="footer-items">
          <a href="https://www.facebook.com">
            <i
              id="social-fb"
              className="fa fa-facebook-square fa-1x social"
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/lakhanjindam/">
            <i
              id="social-tw"
              className="fa fa-linkedin-square fa-1x social"
            ></i>
          </a>
          <a href="https://github.com/lakhanjindam">
            <i id="social-gp" className="fa fa-github-square fa-1x social"></i>
          </a>
          <a href="mailto: lakhanj569@gmail.com">
            <i
              id="social-em"
              className="fa fa-envelope-square fa-1x social"
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
