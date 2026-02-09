import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaTwitter,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const Topbar = () => {
  return (
    <>
      <div className="topbar bg-[#2f0202] text-white text-[14px] py-1 border-b-2 border-b-[#d15604]">
        <div className="px-0 sm:px-6 md:px-10 lg:px-16 xl:px-24 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex space-x-4 items-center mb-2 md:mb-0">
              <ul className="flex items-end sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <li className="flex items-center border-r border-white pr-3 mr-3 lg:mr-0">
                  <Link href="tel:+91-7056997000" className="flex items-center">
                    <FiPhoneCall className="mr-2 text-[#fa4612]" />
                    <span className="hover:text-[#fa4612]">+91-7056997000</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <FaRegEnvelope className="mr-2 text-[#fa4612]" />
                  <Link
                    href="mailto:info@moveitsolution.com"
                    className="hover:text-[#fa4612]"
                  >
                    [info@moveitsolution.com]
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:mr-6">
                <li className="flex items-center border-b md:border-b-0 md:border-r border-white pr-4">
                  <Link
                    href="https://razorpay.me/@futureittouch"
                    target="_blank"
                    className="hover:text-[#fa4612]"
                  >
                    Online Payment
                  </Link>
                </li>
                <li className="flex items-center border-b md:border-b-0 md:border-r border-white pr-4">
                  <Link href="/careers" className="hover:text-[#fa4612]">
                    Careers
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/contact" className="hover:text-[#fa4612]">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="flex space-x-4 items-center">
                <li>
                  <Link
                    href="https://www.facebook.com/moveitsolution"
                    target="_blank"
                  >
                    <FaFacebookF className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com/moveitsolution"
                    target="_blank"
                  >
                    <FaTwitter className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/moveitsolution/"
                    target="_blank"
                  >
                    <FaInstagram className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/move-it-solution-257846226/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@moveitsolutionpackers5047"
                    target="_blank"
                  >
                    <FaYoutube className="hover:text-[#fa4612]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
