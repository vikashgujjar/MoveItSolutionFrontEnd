"use client";

import { useEffect } from "react";
import { consumeConversionData } from "@/app/lib/enhancedConversions";

/* Renders nothing. On /thank-you, exposes the just-submitted lead's email and
   phone to GTM (GTM-5P4GS9BC, initialised in app/layout.js) for Google Ads
   Enhanced Conversions. Data is consumed once, so refreshes push nothing. */
const EnhancedConversionDataLayer = () => {
  useEffect(() => {
    const data = consumeConversionData();
    if (!data) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submission_success",
      user_email: data.email,
      user_phone: data.phone,
    });
  }, []);

  return null;
};

export default EnhancedConversionDataLayer;
