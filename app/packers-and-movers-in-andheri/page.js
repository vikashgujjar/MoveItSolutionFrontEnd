import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import { FaCheck } from "react-icons/fa";
import FaqMain from "@/app/Components/FaqMain";
import LeftService from "@/app/Components/Left.Service";
import OurServices from "@/app/Components/OurServices";
import ServiceOffer from "@/app/Components/ServiceOffer";
import HowItWork from "../Components/HowItWork";
import WhyExpress from "../Components/WhyExpress";
import LocationBanner from "../Components/LocationBanner";

export const metadata = {
    title: "Packers and Movers in Andheri | Professional Shifting Mumbai",
    description: "Expert packers and movers in Andheri, Mumbai. Affordable and safe home and office relocation services. Get your free moving quote today!",
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
                    "description": "Move It Solution is a trusted and reliable international packers and movers company offering residential and commercial relocation, international shifting, packing, transport, courier, warehouse, heavy goods transport, and supply chain services in Andheri, Mumbai.",
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
                      "name": "Andheri, Mumbai"
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Andheri</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Efficient and Stress-Free Relocation in Andheri East & West (2026)
                            </h2>
                            <p className="text-justify ">
                                Andheri is one of Mumbai's most vibrant and densely populated suburbs. Whether you're moving to a high-rise in Andheri West or relocating your startup to a commercial hub in Andheri East, the logistical challenges are significant. From navigating the Western Express Highway to managing moves in busy residential pockets like Lokhandwala or Seven Bungalows, you need a partner who knows the heartbeat of Andheri.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/Mumbai.webp"
                                    alt="Packers and Movers in Andheri"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                The biggest challenge in Andheri is undoubtedly <b>Traffic and Access</b>.
                            </p>

                            <p className="text-justify text-base my-5">
                                With constant activity around the Metro stations and busy arterial roads, a simple household move can become complex. Our "<b>Packers and Movers in Andheri</b>" team is equipped with the local knowledge to plan routes that avoid bottlenecks and time the move to coincide with non-peak hours. <b>Move It Solutions</b> offers professional, reliable, and swift moving services for both homes and offices in Andheri.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Navigating Andheri's Busy Streets
                            </h2>
                            <p className="text-justify ">
                                We use a combination of strategic planning and agile logistics to manage moves in Andheri.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Western Express Highway Savvy:</b> We monitor real-time traffic to pick the best transit windows.</li>
                                <li><b>High-Rise Expertise:</b> Many buildings in Andheri have strict policies. We coordinate with society managers for elevator bookings and parking permits.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Secure Packing for High-Value Items
                            </h2>
                            <p className="text-justify text-base my-5">
                                Whether it's high-end electronics or delicate antique furniture, we use multi-layered packing techniques to ensure complete safety during transit through Mumbai's uneven roads.
                            </p>
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <WhyExpress location="Andheri" />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Why Andheri Prefers Move It Solution
                            </h2>
                            <p className="text-justify text-base my-5">
                                Reliability, punctuality, and professionalism are our hallmarks. We take the stress out of your move so you can enjoy your new space in Andheri.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready for a smooth move in Andheri? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> today for a free consultation!
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
                            <LeftService active="1" />

                            <div className="bg-white p-5 mt-5">
                                <h2 className="text-xl md:text-2xl   font-semimedium">
                                    Trusted Movers in Andheri
                                </h2>
                                <p className="text-justify text-base mt-3">
                                    We provide comprehensive relocation solutions tailored to the unique needs of Andheri residents and businesses.
                                </p>
                                <p className="text-justify text-base my-5">
                                    From luxury apartments to corporate offices, Move It Solution ensures a safe and efficient move every time.
                                </p>

                                <ul className="">
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Fast Local Shifting
                                    </li>
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Premium Office Moving
                                    </li>
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        24/7 Support
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
