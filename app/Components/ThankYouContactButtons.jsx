"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { getSettings } from "@/app/lib/settings";

const DEFAULT_PHONE = "+91-7056997000";

const ThankYouContactButtons = () => {
  const [phone, setPhone] = useState(DEFAULT_PHONE);
  const [whatsapp, setWhatsapp] = useState(DEFAULT_PHONE);

  useEffect(() => {
    let cancelled = false;
    getSettings().then((data) => {
      if (!cancelled && data) {
        setPhone(data.phone || DEFAULT_PHONE);
        setWhatsapp(data.whatsapp_number || data.phone || DEFAULT_PHONE);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const whatsappClean = whatsapp.replace(/[^\d]/g, "");

  return (
    <>
      <Link
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#24416b] border-2 border-[#24416b] text-sm hover:bg-[#24416b] hover:text-white transition-all hover:shadow-xl"
      >
        <FaPhoneAlt />
        Call Us Now
      </Link>
      <Link
        href={`https://wa.me/${whatsappClean}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
        style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
      >
        <FaWhatsapp className="text-lg" />
        WhatsApp Us
      </Link>
    </>
  );
};

export default ThankYouContactButtons;
