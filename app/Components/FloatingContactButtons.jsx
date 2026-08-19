"use client";
import Link from "next/link";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactButtons = ({ phone, whatsappNumber }) => {
  const wa = whatsappNumber || phone;
  const waClean = wa.replace(/\s+/g, "");

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
      <Link
        href={`https://wa.me/${waClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#fa7911] text-white font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:brightness-110 transition-all"
      >
        <FaWhatsapp className="text-xl" />
        WHATSAPP
      </Link>
      <Link
        href={`tel:${wa}`}
        className="flex items-center gap-2 bg-[#1a3c2e] text-white font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:brightness-110 transition-all"
      >
        <FaPhoneAlt className="text-base" />
        CALL NOW
      </Link>
    </div>
  );
};

export default FloatingContactButtons;
