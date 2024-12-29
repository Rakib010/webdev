import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700 mt-20">
      <footer className="footer footer-center p-10">
        <p className="mt-2 text-xl font-bold">
          Empowering students to collaborate, share knowledge, and grow
          together.
        </p>
        <nav className="grid grid-flow-col gap-6 text-lg font-semibold">
          <a href="#features" className="link link-hover hover:text-teal-500">
            Features
          </a>
          <a href="#help" className="link link-hover hover:text-teal-500">
            Help
          </a>
          <a href="#privacy" className="link link-hover hover:text-teal-500">
            Privacy Policy
          </a>
          <a href="#terms" className="link link-hover hover:text-teal-500">
            Terms of Service
          </a>
        </nav>
        <nav>
          <div className="flex justify-center gap-8 mt-2 text-2xl">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-red-500 transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition-colors"
            >
              <FaFacebookF />
            </a>
          </div>
        </nav>

        <aside className="mt-2 text-sm">
          <p>
            © {new Date().getFullYear()} Online Group Study. All Rights
            Reserved.{" "}
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
