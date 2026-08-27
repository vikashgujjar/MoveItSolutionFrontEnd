"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getPageContact } from "@/app/lib/pageContact";
import LeftService from "./Left.Service";

const LocationDataContext = createContext(null);

const LocationContactData = ({ slug, fallbackPhone, fallbackAddress, children }) => {
  const [data, setData] = useState({
    phone: fallbackPhone,
    address: fallbackAddress,
    whatsapp: fallbackPhone,
    email: null,
  });

  useEffect(() => {
    let cancelled = false;
    getPageContact(slug).then((apiData) => {
      if (!cancelled && apiData) {
        setData({
          phone: apiData.phone || fallbackPhone,
          address: apiData.address || fallbackAddress,
          whatsapp: apiData.whatsapp || apiData.phone || fallbackPhone,
          email: apiData.email || null,
        });
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <LocationDataContext.Provider value={data}>
      {children}
    </LocationDataContext.Provider>
  );
};

export default LocationContactData;

export const LocationLeftService = () => {
  const data = useContext(LocationDataContext);
  return <LeftService active="1" phone={data.phone} address={data.address} email={data.email} />;
};

/**
 * Self-contained version for pages that only need the sidebar (no floating
 * buttons) — fetches its own resolved contact data by slug (page override ->
 * location -> global settings, all resolved server-side), no provider needed.
 * `apiFetch`'s built-in cache means this costs nothing extra even if several
 * of these mount on the same page.
 */
export const LocationSidebar = ({ slug, fallbackPhone, fallbackAddress }) => {
  const [data, setData] = useState({ phone: fallbackPhone, address: fallbackAddress, email: null });

  useEffect(() => {
    let cancelled = false;
    getPageContact(slug).then((apiData) => {
      if (!cancelled && apiData) {
        setData({
          phone: apiData.phone || fallbackPhone,
          address: apiData.address || fallbackAddress,
          email: apiData.email || null,
        });
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return <LeftService active="1" phone={data.phone} address={data.address} email={data.email} />;
};
