import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-4  px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8">
          {/* Logo and Contact Info */}
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current"
              >
                <path d="M22.672 15.226l-2.432.811..."></path>
              </svg>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              <strong className="text-lg font-semibold">
                Yo Yo Restaurant
              </strong>
              <br />
              Dhaka, Bangladesh
              <br />
              +88 123 456 789
              <br />
              <span className="font-medium">Mon-Fri:</span> 08:00 - 22:00
              <br />
              <span className="font-medium">Sat-Sun:</span> 10:00 - 23:00
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h6 className="footer-title text-lg font-semibold mt-12 mb-2 ">
              Follow Us
            </h6>
            <p className="text-sm mb-4">Join us on social media</p>
            <div className="flex justify-center  gap-4">
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-200"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-200"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition duration-200"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} <strong>Yo Yo Restaurant</strong>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
