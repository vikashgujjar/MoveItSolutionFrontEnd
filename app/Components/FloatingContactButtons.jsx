"use client";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactButtons = ({ phone, whatsappNumber }) => {
  const wa = whatsappNumber || phone;
  const waClean = wa.replace(/\s+/g, "");

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">
      <Link
        href={`https://wa.me/${waClean}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="group flex items-center bg-[#25D366] text-white rounded-full shadow-lg hover:brightness-110 transition-all duration-300 overflow-hidden"
      >
        <span className="flex items-center justify-center w-14 h-14 shrink-0">
          <FaWhatsapp className="text-2xl" />
        </span>
        <span className="max-w-0 group-hover:max-w-[10rem] group-hover:pr-5 overflow-hidden whitespace-nowrap font-bold text-sm transition-all duration-300">
          WHATSAPP
        </span>
      </Link>
      <Link
        href={`tel:${wa}`}
        aria-label="Call us"
        className="group flex items-center bg-[#fa4612] text-white rounded-full shadow-lg hover:brightness-110 transition-all duration-300 overflow-hidden"
      >
        <span className="flex items-center justify-center w-14 h-14 shrink-0">
          <FaPhoneAlt className="text-lg" />
        </span>
        <span className="max-w-0 group-hover:max-w-[10rem] group-hover:pr-5 overflow-hidden whitespace-nowrap font-bold text-sm transition-all duration-300">
          CALL NOW
        </span>
      </Link>
    </div>
  );
};

export default FloatingContactButtons;
