import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold ">Gadget Heaven</h1>
        <p className="text-lg py-4">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr />

      <div>
        <footer className="footer flex justify-evenly p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover"> Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
