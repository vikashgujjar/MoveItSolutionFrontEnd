import dynamic from "next/dynamic";
import Script from "next/script";
import Hero from "./Components/Hero";
import About from "./Components/About";

const AreyouLooking = dynamic(() => import("./Components/AreyouLooking"));
const Blog = dynamic(() => import("./Components/Blog"));
const CoreServices = dynamic(() => import("./Components/CoreServices"));
const Counter = dynamic(() => import("./Components/Counter"));
const Faq = dynamic(() => import("./Components/Faq"));
const Form = dynamic(() => import("./Components/Form"));
const InternationalMovingCompany = dynamic(() => import("./Components/InternationalMovingCompany"));
const LogoSlider = dynamic(() => import("./Components/LogoSlider"));
const Services = dynamic(() => import("./Components/Services"));
const TrackingNumberArea = dynamic(() => import("./Components/Tracking"));
const WeOffer = dynamic(() => import("./Components/WeOffer"));
const WhyUs = dynamic(() => import("./Components/WhyUs"));

export const metadata = {
  title: "Move It Solution - Trusted and Reliable Moving Company",
  description: "Move It Solution is a reliable moving company offering safe, affordable, and hassle-free relocation solutions locally and internationally. Contact us today!",
  keywords: "international packers and movers, best international packers, moving abroad, international packers, moving overseas, international packers and movers near me, international moving companies",
};

export default function Home() {
  return (
    <>
      <Script id="schema-moving-company" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            "@id": "https://www.moveitsolution.com/#movingcompany",
            "name": "Move It Solution",
            "alternateName": "Move It Solution Packers and Movers",
            "url": "https://www.moveitsolution.com/",
            "logo": "https://www.moveitsolution.com/path-to-logo.png",
            "image": "https://www.moveitsolution.com/path-to-banner-image.jpg",
            "description": "Move It Solution is a trusted and reliable international packers and movers company offering residential and commercial relocation, international shifting, packing, transport, courier, warehouse, heavy goods transport, and supply chain services worldwide.",
            "telephone": "+91-7056997000",
            "email": "info@moveitsolution.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sco No : 487, 1st Floor, Near SBI Bank",
              "addressLocality": "Dwarka Sector 26",
              "addressRegion": "New Delhi",
              "postalCode": "110077",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5436847",
              "longitude": "77.049916"
            },
            "hasMap": "https://www.google.com/maps/place/Move+It+Solution/data=!4m2!3m1!1s0x0:0x1d95a0726d37d08",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "20:00"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "sameAs": [
              "https://x.com/moveitsolution",
              "https://www.facebook.com/moveitsolution",
              "https://www.instagram.com/moveitsolution/",
              "https://www.linkedin.com/in/move-it-solution-257846226/",
              "https://www.youtube.com/channel/UCeU4KG_f6DU9aivOhDQrLBg",
              "https://www.google.com/maps/place/Move+It+Solution/data=!4m2!3m1!1s0x0:0x1d95a0726d37d08"
            ],
            "serviceOffered": [
              { "@type": "Service", "name": "International Packers and Movers" },
              { "@type": "Service", "name": "International Shifting Services" },
              { "@type": "Service", "name": "International Courier Services" },
              { "@type": "Service", "name": "International Transport Services" },
              { "@type": "Service", "name": "International Packing Services" },
              { "@type": "Service", "name": "Warehouse Services" },
              { "@type": "Service", "name": "Heavy Goods Transport" },
              { "@type": "Service", "name": "Supply Chain Services" }
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "XX",
              "bestRating": "5",
              "worstRating": "1"
            }
          }
        `}
      </Script>

      <Hero />
      <About />
      <TrackingNumberArea />
      <Form />
      <Services />
      <InternationalMovingCompany />
      <WhyUs />
      <AreyouLooking />
      <WeOffer />
      <Counter />
      <CoreServices />
      <Faq />
      <Blog />
      <LogoSlider />
    </>
  );
}
