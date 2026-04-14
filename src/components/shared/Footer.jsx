
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#2f5d50] text-gray-200 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <h1 className="text-5xl font-bold mb-3">KeenKeeper</h1>

          {/* Tagline */}
          <p className="text-sm text-gray-300 mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          {/* Social Title */}
          <h3 className="text-base mb-4">Social Links</h3>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="btn btn-circle bg-white text-[#2f5d50] border-none hover:bg-gray-200">
              <FaInstagram />
            </button>

            <button className="btn btn-circle bg-white text-[#2f5d50] border-none hover:bg-gray-200">
              <FaFacebookF />
            </button>

            <button className="btn btn-circle bg-white text-[#2f5d50] border-none hover:bg-gray-200">
              <FaXTwitter />
            </button>
          </div>

          {/* Divider */}
          <div className="divider before:bg-[#4b6b5f] after:bg-[#4b6b5f]"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© 2026 KeenKeeper. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
