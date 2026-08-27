"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSettings } from "@/app/lib/settings";

const DEFAULT_ADDRESS = "Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)";
const DEFAULT_EMAIL = "info@moveitsolution.com";
const DEFAULT_PHONE = "+91-7056997000";
const DEFAULT_SOCIAL = {
  facebook: "https://www.facebook.com/moveitsolution",
  twitter: "https://twitter.com/moveitsolution",
  instagram: "https://www.instagram.com/moveitsolution/",
  linkedin: "https://www.linkedin.com/in/move-it-solution-257846226/",
  youtube: "https://www.youtube.com/channel/UCeU4KG_f6DU9aivOhDQrLBg",
};

export default function SidebarModal({ isOpen, onClose }) {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getSettings().then((data) => {
      if (!cancelled && data) setSettings(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const address = settings?.address || DEFAULT_ADDRESS;
  const email = settings?.email || DEFAULT_EMAIL;
  const phone = settings?.phone || DEFAULT_PHONE;
  const social = { ...DEFAULT_SOCIAL, ...(settings?.social_links || {}) };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex justify-end bg-black bg-opacity-50 transition-opacity duration-300 
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`transform transition-transform relative duration-300 p] overflow-y-auto ease-in-out bg-white text-black w-full sm:w-1/2 md:w-1/3 lg:w-[30%] h-full 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="modal-header flex justify-between items-center p-4 bg-white custom-shadow">
          <Link href="/">
            <Image
               width={700}
               height={700}
              src="/Images/logo/logo-mob.webp"
              alt="Move it solution"
              className="w-40 sm:w-56 md:w-48 lg:w-96 h-full"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="h-[30px] text-[#fa4612] bg-[#f0f0f0] m-0 p-0 cursor-pointer transition-all duration-300 ease-in-out border-none opacity-100 absolute top-0 right-0"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
        </div>

        <div className="modal-body p-4 space-y-6 mx-5">
          <div className="sidebar-modal-widget">
            <h3 className="relative z-10 mb-8 pb-1 text-lg font-semibold text-gray-900 border-b border-gray-200 title">
              About Us
            </h3>
            <p className="text-justify text-[#001469] text-[15px] leading-[1.8]">
              Move It Solution is a leading provider of innovative moving
              solutions. With expertise in residential and commercial
              relocations, we ensure a seamless and stress-free moving
              experience. Our team of skilled professionals delivers exceptional
              service, utilizing state-of-the-art equipment and techniques.
              Whether it's local or long-distance moves, packing and unpacking,
              or storage solutions, Move It Solution is your trusted partner for
              all your moving needs. Satisfaction guaranteed.
            </p>
          </div>

          {/* Additional Links */}
          <div className="sidebar-modal-widget">
            <h3 className="relative z-10 mb-8 pb-1 text-lg font-semibold text-gray-900 border-b border-gray-200 title">
              Additional Links
            </h3>
            <ul className="space-y-2 text-[#001469] text-[15px] leading-[1.8]">
              <li>
                <Link href="#">Log In</Link>
              </li>
              <li>
                <Link href="#">Sign Up</Link>
              </li>
              <li>
                <Link href="/faq">Frequently Asked Questions (FAQ)</Link>
              </li>
              <li>
                <Link href="#">Logout</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sidebar-modal-widget">
            <h3 className="relative z-10 mb-8 pb-1 text-lg font-semibold text-gray-900 border-b border-gray-200 title">
              Contact Info
            </h3>
            <ul className="text-[15px] leading-[1.8] text-[#000415]">
              <li className="flex items-start relative pl-12">
                <i className="bx bx-location-plus absolute left-0 top-0 w-9 h-9 text-center p-2.5 text-white text-[15px] bg-[#001469]  rounded transition-all duration-500"></i>
                <p className="text-sm">
                  {" "}
                  ADDRESS
                  <span className="mt-2 block leading-[1.8] font-semibold">
                    {address}
                  </span>
                </p>
              </li>
              <li className="flex items-start relative pl-12 my-2.5">
                <i className="bx bx-envelope absolute left-0 top-0 w-9 h-9 text-center p-2.5 text-white text-[15px] bg-[#001469]  rounded transition-all duration-500"></i>
                <div className="text-sm">
                  {" "}
                  EMAIL
                  <span className="mt-2 block font-semibold">
                    <Link href="mailto:moveitsolutionpackers@gmail.com">
                      [moveitsolutionpackers@gmail.com]
                    </Link>{" "}
                    <br />
                    <Link
                      href={`mailto:${email}`}
                      className="mt-1.5 block"
                    >
                      [{email}]
                    </Link>
                  </span>
                </div>
              </li>
              <li className="flex items-start relative pl-12">
                <i className="bx bxs-phone-call absolute left-0 top-0 w-9 h-9 text-center p-2.5 text-white text-[15px] bg-[#001469]  rounded transition-all duration-500"></i>
                <div className="text-sm">
                  {" "}
                  PHONE
                  <span className="mt-2 block font-semibold">
                    <Link href="tel:+917056497000">+91-7056497000</Link> <br />
                    <Link href={`tel:${phone}`}>{phone}</Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="sidebar-modal-widget">
            <h3 className="relative z-10 mb-8 pb-1 text-lg font-semibold text-gray-900 border-b border-gray-200 title">
              Connect With Us
            </h3>
            <ul className="flex space-x-4 text-[#001469]">
              <li>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
