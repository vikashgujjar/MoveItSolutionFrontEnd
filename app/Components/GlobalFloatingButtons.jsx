"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getPageContact } from "@/app/lib/pageContact";
import { pathnameToSlug } from "@/app/lib/pageSlug";
import FloatingContactButtons from "./FloatingContactButtons";

const DEFAULT_PHONE = "+91-7056997000";

const GlobalFloatingButtons = () => {
  const pathname = usePathname().replace(/\/$/, "");
  const slug = pathnameToSlug(pathname);
  const [pageContact, setPageContact] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getPageContact(slug).then((data) => {
      if (!cancelled && data) setPageContact(data);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const phone = pageContact?.phone || DEFAULT_PHONE;
  const whatsapp = pageContact?.whatsapp || phone;

  return <FloatingContactButtons phone={phone} whatsappNumber={whatsapp} />;
};

export default GlobalFloatingButtons;
