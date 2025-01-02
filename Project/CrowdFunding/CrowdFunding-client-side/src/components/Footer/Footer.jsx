import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-20">
      <div className="w-11/12 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are committed to making a difference through our campaigns.
              Join us in creating a better tomorrow for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/campaigns"
                  className="hover:text-green-400 transition"
                >
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-sm">Email: crowdfunding@gmail.com</p>
            <p className="text-sm my-3">Phone: +880 1 2 3 4 5 7 8 </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-gray-300 hover:text-green-400 transition text-xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-green-400 transition text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-green-400 transition text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-green-400 transition text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Your Organization. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
