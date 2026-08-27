"use client";
import { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";
import { getSettings } from "@/app/lib/settings";
import { getPageContact } from "@/app/lib/pageContact";
import { pathnameToSlug } from "@/app/lib/pageSlug";

const DEFAULT_PHONE = "+91-7056997000";
const DEFAULT_EMAIL = "info@moveitsolution.com";
const DEFAULT_SOCIAL = {
  facebook: "https://www.facebook.com/moveitsolution",
  twitter: "https://twitter.com/moveitsolution",
  instagram: "https://www.instagram.com/moveitsolution/",
  linkedin: "https://www.linkedin.com/in/move-it-solution-257846226/",
  youtube: "https://www.youtube.com/@moveitsolutionpackers5047",
};

const Topbar = () => {
  const pathname = usePathname().replace(/\/$/, "");
  const slug = pathnameToSlug(pathname);
  const [settings, setSettings] = useState(null);
  const [pageContact, setPageContact] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getSettings().then((data) => {
      if (!cancelled && data) setSettings(data);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    getPageContact(slug).then((data) => {
      if (!cancelled && data) setPageContact(data);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // getPageContact already resolves page -> location -> global settings
  // server-side, so its phone/email are used directly; the hardcoded
  // literals are the final fallback if the fetch itself fails.
  const phoneValue = pageContact?.phone || DEFAULT_PHONE;
  const phone = { display: phoneValue, tel: phoneValue };
  const email = pageContact?.email || DEFAULT_EMAIL;
  const social = { ...DEFAULT_SOCIAL, ...(settings?.social_links || {}) };

  return (
    <>
      <div className="topbar bg-[#2f0202] text-white text-[14px] py-1 border-b-2 border-b-[#d15604]">
        <div className="px-0 sm:px-6 md:px-10 lg:px-16 xl:px-24 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex space-x-4 items-center mb-0 md:mb-0">
              <ul className="flex flex-wrap m-0 items-start sm:flex-row sm:items-end space-y-0 sm:space-y-0 sm:space-x-4">
                <li className="flex items-center border-r md:border-r-0 lg:border-r border-white pr-3 mr-3 lg:mr-0">
                  <Link href={`tel:${phone.tel}`} className="flex items-center">
                    <FiPhoneCall className="mr-2 text-[#fa4612]" />
                    <span className="hover:text-[#fa4612]">{phone.display}</span>
                  </Link>
                </li>
                <li className="flex md:hidden lg:flex items-center m-0">
                  <FaRegEnvelope className="mr-2 text-[#fa4612]" />
                  <Link
                    href={`mailto:${email}`}
                    className="hover:text-[#fa4612]"
                  >
                    [{email}]
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <ul className="flex sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:mr-6">
                <li className="flex items-center border-b md:border-b-0 md:border-r border-white pr-4">
                  <Link
                    href="https://razorpay.me/@futureittouch"
                    target="_blank"
                    className="hover:text-[#fa4612] text-nowrap"
                  >
                    Online Payment
                  </Link>
                </li>
                <li className="flex items-center border-b md:border-b-0 md:border-r border-white pr-4">
                  <Link href="/careers" className="hover:text-[#fa4612] text-nowrap">
                    Careers
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link href="/contact" className="hover:text-[#fa4612] text-nowrap">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="flex space-x-4 items-center">
                <li>
                  <Link href={social.facebook} target="_blank">
                    <FaFacebookF className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link href={social.twitter} target="_blank">
                    <FaTwitter className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link href={social.instagram} target="_blank">
                    <FaInstagram className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link href={social.linkedin} target="_blank">
                    <FaLinkedinIn className="hover:text-[#fa4612]" />
                  </Link>
                </li>
                <li>
                  <Link href={social.youtube} target="_blank">
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
