import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col mt-10 ">
      <div className="flex-grow"></div>
      {/* Footer */}
      <footer className="footer-center bg-base-200 text-base-content rounded p-10 space-y-8 ">
        <nav className="grid grid-flow-col gap-4 text-xl font-semibold">
          <Link to="/donationForm">Donation</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </nav>
        <nav>
          <div className="grid text-3xl grid-flow-col gap-4">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaYoutube />
            </p>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Winter Clothing Donation
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
