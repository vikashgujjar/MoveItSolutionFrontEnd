import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaCheck } from "react-icons/fa";
import FaqMain from "@/app/Components/FaqMain";
import { LocationSidebar } from "@/app/Components/LocationContactData";
import OurServices from "@/app/Components/OurServices";
import ServiceOffer from "@/app/Components/ServiceOffer";
import HowItWork from "../Components/HowItWork";
import WhyExpress from "../Components/WhyExpress";
import LocationBanner from "../Components/LocationBanner";

export const metadata = {
    title: "Packers and Movers in Powai | Expert Moving Solutions",
    description: "Reliable packers and movers in Powai, Mumbai. We specialize in high-quality home and office shifting with safe transit and professional packing.",
};

const page = () => {
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
                    "description": "Move It Solution is a trusted and reliable international packers and movers company offering residential and commercial relocation, international shifting, packing, transport, courier, warehouse, heavy goods transport, and supply chain services in Powai, Mumbai.",
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
                      "name": "Powai, Mumbai"
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

            <div className="bg-gray-100 !hidden lg:!block banner h-full pt-28 pb-2">
            </div>
            <div>
                <LocationBanner />
            </div>
            <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <div className="bg-white p-5">
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Powai</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Upscale Relocation Services in Powai, Mumbai (2026)
                            </h2>
                            <p className="text-justify ">
                                Powai is Mumbai's premier residential and commercial hub, known for its scenic lake and the prestigious Hiranandani Gardens. Relocating to or from Powai requires a high level of care, especially when dealing with upscale apartments, luxury furniture, and high-tech office equipment. Whether you are moving into a villa or a modern workspace in Raheja Vihar, you need movers who match the standards of the locality.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/Mumbai.webp"
                                    alt="Packers and Movers in Powai"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                Moving in Powai involves navigating through <b>JVLR</b> (Jogeshwari-Vikhroli Link Road) traffic and adhering to the strict entry guidelines of premium gated communities.
                            </p>

                            <p className="text-justify text-base my-5">
                                Our "<b>Packers and Movers in Powai</b>" team specialize in handle the unique needs of this area. From specialized packing for glass-fronted furniture to secure handling of home theaters and servers, we ensure every item is treated with precision. <b>Move It Solutions</b> is dedicated to providing a premium, stress-free moving experience for the Powai community.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Premium Shifting for Premium Residents
                            </h2>
                            <p className="text-justify ">
                                We provide white-glove service for our clients in Powai.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Hiranandani Specialist:</b> We are well-acquainted with the specific logistics of moving in and out of the landmark Hiranandani towers.</li>
                                <li><b>Corporate Precision:</b> Moving an office near the L&T complex or Supreme Business Park? We minimize downtime with our efficient weekend moving schedules.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Climate-Aware Packing
                            </h2>
                            <p className="text-justify text-base my-5">
                                Given the proximity to the lake, we use moisture-resistant packing materials to ensure your electronics and wooden furniture remain protected during the move.
                            </p>
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <WhyExpress location="Powai" />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Why Choose Move It Solution in Powai?
                            </h2>
                            <p className="text-justify text-base my-5">
                                We combine local expertise with international packing standards. Our professional crew ensures that your move is as serene as the Powai Lake itself.
                            </p>
                            <p className="text-justify text-base my-5">
                                Looking for expert movers in Powai? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a premium quote!
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8 px-5 pb-10">
                            <Link
                                href="/"
                                className="bg-[#ff6600] text-white px-8 py-3 rounded-md font-bold hover:bg-[#e65c00] transition-colors shadow-lg"
                            >
                                Go to Home
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-white text-[#ff6600] border-2 border-[#ff6600] px-8 py-3 rounded-md font-bold hover:bg-[#ff6600] hover:text-white transition-all shadow-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <aside className="sidebar-area sticky top-20">
                            <LocationSidebar slug="powai" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

                            <div className="bg-white p-5 mt-5">
                                <h2 className="text-xl md:text-2xl   font-semimedium">
                                    Premium Movers in Powai
                                </h2>
                                <p className="text-justify text-base mt-3">
                                    Our white-glove moving services are designed for the discerning residents of Powai. We handle every item with extreme care.
                                </p>
                                <p className="text-justify text-base my-5">
                                    Experience a seamless transition with Move It Solution, the experts in Powai relocation.
                                </p>

                                <ul className="">
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Luxury Apartment Shifting
                                    </li>
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        IT & Server Moving
                                    </li>
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Zero-Damage Packing
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <FaqMain pageType="mumbai" />
            <OurServices pageType="mumbai" />
        </>
    );
};

export default page;
