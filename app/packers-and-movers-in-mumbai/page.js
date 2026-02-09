import FaqMain from "@/app/Components/FaqMain";
import LeftService from "@/app/Components/Left.Service";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import { FaCheck } from "react-icons/fa";
import OurServices from "@/app/Components/OurServices";
import ServiceOffer from "@/app/Components/ServiceOffer";
import HowItWork from "../Components/HowItWork";
import WhyExpress from "../Components/WhyExpress";
import LocationBanner from "../Components/LocationBanner";

export const metadata = {
    title: "Best Packers and Movers in Mumbai | Safe & Affordable Shifting",
    description: "Looking for the best packers and movers in Mumbai? We offer safe, affordable, and expert home & office relocation services across Mumbai. Get a free quote today!",
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
            "description": "Move It Solution is a trusted and reliable international packers and movers company offering residential and commercial relocation, international shifting, packing, transport, courier, warehouse, heavy goods transport, and supply chain services in Mumbai and worldwide.",
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
              "name": "Mumbai"
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Best Packers and Movers in Mumbai</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Reliable and Professional Relocation Services with the Best Packers and Movers in Mumbai
                            </h2>
                            <p className="text-justify ">
                                Relocating within the bustling metropolis of Mumbai can be an overwhelming experience. Known as the 'City of Dreams', Mumbai's fast-paced life, dense population, and intricate traffic patterns make moving a complex task. Whether you're moving from a 1BHK in Dadar to a spacious apartment in Powai, or relocating your office from South Mumbai to Bandra-Kurla Complex (BKC), finding the <b>Best Packers and Movers in Mumbai</b> is essential for a smooth transition.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/Mumbai.webp"
                                    alt="Packers and Movers in Mumbai"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                In 2026, the logistics landscape in Mumbai has evolved significantly. It's no longer just about loading items onto a truck; it's about navigating Mumbai's unique challenges, such as monsoon flooding, narrow chawl lanes, and the specific entry timings for heavy vehicles in residential colonies. The right moving partner understands these variables and plans your move with precision.
                            </p>
                            <p className="text-justify text-base my-5">
                                At <b>Move It Solution</b>, we bring years of expertise to the Mumbai market. We offer a 'concierge-style' experience, handling everything from high-quality packing to secure transit and organized unpacking at your new location. Our team is trained to handle Mumbai’s high-rise logistics, ensuring your belongings reach their destination safely and on time.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>
                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Local vs. Inter-City Shifting in Mumbai
                            </h2>
                            <p className="text-justify ">
                                Moving within Mumbai (Local) is vastly different from moving to another city. Here's how we differentiate the two:
                            </p>

                            <h3 className="text-base font-bold mt-4">1. Local Moving within Mumbai</h3>
                            <p className="text-justify text-base my-5">
                                Moving from Colaba to Andheri or Mumbai Central to Vikhroli requires deep local knowledge:
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Traffic Coordination:</b> We time our moves to avoid the peak hours on the Western and Eastern Express Highways.</li>
                                <li><b>Narrow Lane Access:</b> For areas with narrow access, we provide shuttle services using smaller vehicles to transport goods from your doorstep to our larger transit containers.</li>
                            </ul>

                            <h3 className="text-base font-bold mt-4">2. Inter-City Shifting from Mumbai</h3>
                            <p className="text-justify text-base my-5">
                                If you're moving from Mumbai to Pune, Bangalore, or Delhi, the logistics shift to long-haul safety:
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Multi-Layer Packing:</b> We use 3-4 layers of protective wrapping for long-distance transit.</li>
                                <li><b>Transit Insurance:</b> Highly recommended for inter-city moves to provide complete peace of mind.</li>
                                <li><b>Sealed Containers:</b> Your goods travel in weather-proof, sealed containers to protect against dust and rain.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Why Choose Move It Solution for Your Mumbai Move?
                            </h2>
                            <p className="text-justify ">
                                We aren't just transporters; we are your relocation partners. Here's why Mumbai residents trust us:
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Real-Time Tracking:</b> Stay updated on your truck's location throughout the move.</li>
                                <li><b>Professional Crew:</b> Our staff is trained in handling delicate electronics and heavy furniture specifically for high-rise apartments.</li>
                                <li><b>Premium Packing:</b> We use industry-standard materials to ensure zero damage.</li>
                                <li><b>Climate-Controlled Warehousing:</b> Secure storage options available if your new home isn't move-in ready.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>
                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Comprehensive Moving Services in Mumbai
                            </h2>
                            <p className="text-justify ">
                                Move It Solution provides a full suite of services tailored for the Mumbai lifestyle.
                            </p>

                            <h3 className="text-base font-bold mt-4">1. Residential Shifting</h3>
                            <p className="text-justify text-base my-5">
                                From 1BHKs in Kurla to luxury penthouses in South Mumbai, we handle all household moves with care.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Furniture Protection:</b> Use of heavy-duty blankets and bubble wrap.</li>
                                <li><b>Fragile Handling:</b> Special crates for glassware and artwork.</li>
                            </ul>

                            <h3 className="text-base font-bold mt-4">2. Corporate Office Relocation</h3>
                            <p className="text-justify text-base my-5">
                                Specialized moving for IT parks, corporate offices, and retail spaces in BKC, Lower Parel, and beyond.
                            </p>

                            <h3 className="text-base font-bold mt-4">3. Car & Bike Transportation</h3>
                            <p className="text-justify text-base my-5">
                                Secure vehicle carriers to transport your cars and bikes safely to any part of India.
                            </p>

                            <h3 className="text-base font-bold mt-4">4. International Shifting</h3>
                            <p className="text-justify text-base my-5">
                                Moving abroad? We handle international packing, customs documentation, and global freight.
                            </p>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Service Areas in Mumbai
                            </h2>
                            <p className="text-justify ">
                                We serve all major and local areas across Mumbai:
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Suburbs:</b> Andheri, Powai, Vile Parle, Chembur, Ghatkopar.</li>
                                <li><b>South Mumbai:</b> Colaba, Mumbai Central, Dadar.</li>
                                <li><b>Navi Mumbai:</b> Seawood, Ulwe, Kharghar.</li>
                                <li><b>Upcoming Areas:</b> Palava, Vikhroli, Kurla.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <WhyExpress location="Mumbai" />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Contact the Best Packers and Movers in Mumbai
                            </h2>
                            <p className="text-justify text-base my-5">
                                Don't let the stress of moving pull you down. Choose a partner who understands Mumbai's rhythm. Whether it's a small local move or a major corporate relocation, Move It Solution is here to help.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready to move? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for a free survey and quote. Let's make your move hassle-free.
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
                                    Affordable Shifting Services in Mumbai
                                </h2>
                                <p className="text-justify text-base mt-3">
                                    Moving in Mumbai requires more than just trucks; it requires a strategy. Our team handles every aspect of your move, from sourcing high-quality packing materials to navigating the city's complex routes.
                                </p>
                                <p className="text-justify text-base my-5">
                                    With Move It Solution, you get reliability and affordability. We understand the value of your time and your belongings, ensuring a seamless relocation experience in the heart of Mumbai.
                                </p>

                                <ul className="">
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Transparent Quotes
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Quality Packing Materials
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Safe & On-Time Delivery
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Experienced Moving Team
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        24/7 Customer Support
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
