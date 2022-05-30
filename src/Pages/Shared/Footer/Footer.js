import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../images/footer.png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className=" p-10"
    >
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover text-primary">
            Branding
          </Link>
          <Link to="" className="link link-hover text-primary">
            Design
          </Link>
          <Link to="" className="link link-hover text-primary">
            Marketing
          </Link>
          <Link to="" className="link link-hover text-primary">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="link link-hover text-primary">
            About us
          </Link>
          <Link to="" className="link link-hover text-primary">
            Contact
          </Link>
          <Link to="" className="link link-hover text-primary">
            Jobs
          </Link>
          <Link to="" className="link link-hover text-primary">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover text-primary">
            Terms of use
          </Link>
          <Link to="" className="link link-hover text-primary">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover text-primary">
            Cookie policy
          </Link>
        </div>
      </div>
      <div className="mt-16 text-center text-secondary">
        <p>Copyright © {year} WeFix Manufacturer LTD.</p>
      </div>
    </footer>
  );
};

export default Footer;
