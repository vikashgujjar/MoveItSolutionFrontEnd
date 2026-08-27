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
    title: "Packers and Movers in Vikhroli | Safe Shifting Solutions",
    description: "Looking for packers and movers in Vikhroli? We offer safe, reliable, and affordable home and office relocation services in Vikhroli, Mumbai.",
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
                    "description": "Move It Solution is a trusted and reliable international packers and movers company offering residential and commercial relocation, international shifting, packing, transport, courier, warehouse, heavy goods transport, and supply chain services in Vikhroli, Mumbai.",
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
                      "name": "Vikhroli, Mumbai"
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Vikhroli</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Seamless Shifting in Vikhroli East & West, Mumbai (2026)
                            </h2>
                            <p className="text-justify ">
                                Vikhroli is a rapidly developing residential and commercial hub in Mumbai. Whether you are moving to a new apartment in Godrej The Trees or relocating an office to a tech park in Vikhroli West, the process requires professional handling. With its central location on the Central Line and proximity to the Eastern Express Highway, Vikhroli offers great connectivity, but also faces significant traffic challenges.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/Mumbai.webp"
                                    alt="Packers and Movers in Vikhroli"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                One of the primary hurdles in Vikhroli is the <b>LBS Marg and Eastern Express Highway</b> congestion.
                            </p>

                            <p className="text-justify text-base my-5">
                                To ensure a smooth transition, you need "<b>Packers and Movers in Vikhroli</b>" who are experts at navigating the city's main arteries and local lanes. At <b>Move It Solutions</b>, we combine high-quality packing with strategic timing to ensure your belongings reach their destination safely and without delay.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Expert Movers for Vikhroli Residences
                            </h2>
                            <p className="text-justify ">
                                We specialize in handling moves for high-rise apartments and townships in Vikhroli.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Strategic Routing:</b> We pick routes that avoid the busiest parts of LBS Marg during peak hours.</li>
                                <li><b>Society Compliance:</b> We ensure all society entry permits and scheduling are handled professionally.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <WhyExpress location="Vikhroli" />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Why Choose Move It Solution in Vikhroli?
                            </h2>
                            <p className="text-justify text-base my-5">
                                We provide transparent pricing and reliable service. Our professional crew is trained to handle delicate items with extreme care, ensuring a worry-free move.
                            </p>
                            <p className="text-justify text-base my-5">
                                Moving to Vikhroli? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a free survey!
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
                            <LocationSidebar slug="vikhroli" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

                            <div className="bg-white p-5 mt-5">
                                <h2 className="text-xl md:text-2xl   font-semimedium">
                                    Trusted Shifting in Vikhroli
                                </h2>
                                <p className="text-justify text-base mt-3">
                                    Our team ensures your move is handled with professionalism and care. We offer end-to-end relocation services.
                                </p>
                                <ul className="">
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Fast Home Shifting
                                    </li>
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Secure Office Moves
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
