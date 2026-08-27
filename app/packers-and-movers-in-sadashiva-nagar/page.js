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
    title: "Packers and Movers in Sadashiva Nagar | Expert Movers",
    description: "Professional packers and movers in Sadashiva Nagar offering premium packing, safe handling, secure transport and smooth residential relocation services.",
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

            <div className="bg-gray-100 !hidden lg:!block banner h-full pt-28 pb-2">
                {/* <div className="px-10 lg:px-28 w-full h-full">
                    <div className="flex justify-center lg:justify-end  items-center h-full">
                        <div className="text-white flex text-sm gap-5 hover:text-blue-500">
                            <Link href="/" className="">
                                Home
                            </Link>
                            <li className="text-[#fa4612] text-nowrap">
                                Packers and Movers in Kengeri
                            </li>
                        </div>
                    </div>
                </div> */}
            </div>
            <div>
                <LocationBanner />
            </div>

            <div className="px-0 md:px-10 lg:px-28 my-5 md:my-14 ">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <div className="bg-white p-5">
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Sadashiva Nagar</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Packers and Movers in Sadashivanagar: The Elite Moving Guide (2026)
                            </h2>
                            <p className="text-justify ">
                                Moving into Sadashivanagar isn't just a change of address; it is entering into one of Bangalore's Most Exclusive Circles. The area is home to Politicians, Film Stars, and Business Tycoons, and is characterized by its wide avenues lined by trees and Palatial Bungalows. There is a total feeling of privacy in this area. Whether you are moving to the area surrounding Sankey Tank or the quieter lanes near Bashyam Circle, you will find the ambiance in Sadashivanagar to be one of Absolute Luxury or "Old Money."
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/bangalore.webp"
                                    alt="Packers and Movers in Sadashiva Nagar"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Unwritten Rules of Sadashivanagar
                            </h2>
                            <p className="text-justify ">
                                When moving in Sadashivanagar, there are a lot of unwritten rules that you need to be aware of.
                            </p>
                            <p className="text-justify text-base my-5">
                                The difference in Sadashivanagar, as opposed to other areas like Koramangala and Jayanagar, is that the challenge is not traffic; it is the protocol. The roads within Sadashivanagar are wide, and therefore the residents have strict security. Thus, the residents of Sadashivanagar hold Privacy to be one of their main priorities. A moving truck blocking a VIP's driveway or the noise from the crew working during an afternoon siesta is completely unacceptable.
                            </p>
                            <p className="text-justify text-base my-5">
                                When moving into Sadashivanagar, you don't only need Heavy Lifters, but you also need a team that operates as a Concierge silently, efficiently, and invisibly. <b>Move It Solution</b> specializes in these types of moves, where the quality of Service is just as important as the Logistics.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Secret Life of High-Rise Movers
                            </h2>
                            <p className="text-justify ">
                                Sadashivanagar is a fortified neighbourhood. Because there are so many government officials and VIPs living here, trucks that look out of place are regularly stopped by patrol cars.
                            </p>

                            <h3 className="text-base font-bold my-4">VIP Movement</h3>
                            <p className="text-justify ">
                                Many roads are closed to traffic for extended periods due to convoy travel. When a standard mover gets stopped waiting for 45 minutes for a convoy to pass, we keep track of the traffic in the local area and provide our clients with the quickest routes while avoiding these types of "security holds," ensuring that their move remains on schedule.
                            </p>

                            <h3 className="text-base font-bold my-4">Non-Traditional Delivery</h3>
                            <p className="text-justify ">
                                We offer "unmarked trucks" to our high-profile clients who wish to keep their move private and out of the public eye. Our moving crew wears clean uniforms and is professionally trained to avoid shouting commands at one another across the lawn.
                            </p>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl my-5  font-semimedium">
                                The "Silent Move" Requirement
                            </h2>
                            <p className="text-justify ">
                                In areas like RMV 2nd Stage and Upper Palace Orchards, where noise creates tension and anxiety, silence is golden.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Trolley System:</b> We use rubber-tired dollies that won't bounce around when travelling over cobblestones.</li>
                                <li><b>Engine Protocol:</b> When our mover arrives at the new residence, all engine compartments are turned off as soon as the mover is parked to eliminate noise. Our goal is to keep your move so quiet that your neighbours won't know it is taking place until it is over.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Safeguarding Valuable Interiors
                            </h2>
                            <p className="text-justify ">
                                High-end residences within Sadashivanagar are generally known for their exquisite finishes, such as imported Italian marble floors, intricate staircases made with natural teakwood, and large ornate crystal chandeliers. Therefore, using standard packing techniques may not provide the same level of protection to your property.
                            </p>

                            <h3 className="text-base font-bold my-4">Flooring and Wall Protection</h3>
                            <p className="text-justify ">
                                Before the arrival of any boxes at your residence, we will apply a thick protective material onto your flooring to provide cushioning from furniture moving impact. Additionally, we use corner guards on all door frames and stairwell banisters to ensure no scratches are left from the movement of large items such as grand pianos and safes.
                            </p>

                            <h3 className="text-base font-bold my-4">Handling Artwork and Antiques</h3>
                            <p className="text-justify ">
                                Many individuals living in Sadashivanagar collect artwork or possess elderly furniture and decorative accessories with a great deal of historical value.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Museum-Protective Packing Practices:</b> As a means of protecting against any type of chemistry, artwork (including all types of paintings) will be protected by using Acid-Free Tissue paper. In addition to protecting the artwork, we will create custom-built export-quality wooden crates for the protection of sculptures and antique items that we pick up from your location.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Chandelier Packing Service</h3>
                            <p className="text-justify ">
                                As a result of this level of packing, we do not simply pack the chandelier as is; we remove the glass and pack each piece of crystal into foam for extra safety, while the entire chandelier frame and center support are crated separately. In addition to providing exceptional packing services, we can also schedule an electrician to re-install your chandelier correctly in your new home.
                            </p>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl my-5  font-semimedium">
                                "Elite" Moving Timeline - 3 Step Process
                            </h2>

                            <h3 className="text-base font-bold my-4">Phase 1: Privacy Survey</h3>
                            <p className="text-justify ">
                                This phase consists of a one-week survey period prior to moving day. During this process, we provide you with a Senior Manager who will come to your home and assess the items to be moved. This process will include a discussion of any confidentiality agreements that may be needed and also any special logistics that may be required in order to transport items, including heavy items (i.e., safes and pianos).
                            </p>

                            <h3 className="text-base font-bold my-4">Phase 2: Security Clearance</h3>
                            <p className="text-justify ">
                                This is done 48 hours before Moving Day. At this time, we will notify both your building and your neighborhood security. We will provide the registration numbers for our trucks and the names of each driver in advance of our arrival. This allows your security to let our trucks through your gates on Moving Day without delay.
                            </p>

                            <h3 className="text-base font-bold my-4">Phase 3: Moving Day (D-Day)</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Arrival:</b> We will arrive at <b>9 AM</b> on Moving Day after the morning walk hours.</li>
                                <li><b>Packing:</b> We will pack items for transport using high-end White packaging materials. This means that you can expect all of your items to look nice when we arrive for the move.</li>
                                <li><b>Transport:</b> Our moving trucks will be driven slowly through the Sankey Tank area in order to prevent over-vibration. Our goal is to prevent fragile items from being damaged during transport.</li>
                                <li><b>Unloading:</b> We offer our "Butler Service" as a means to ensure that your new home is completely unpacked, colour-coded by wardrobe, and organised by the kitchen within the same day.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <WhyExpress />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Why Choose Move It Solution in Sadashivanagar
                            </h2>
                            <p className="text-justify text-base my-5">
                                You live in Sadashivanagar because you value quality. Your move should reflect this same standard. If you're moving from a large bungalow near Malleswaram or a prestigious apartment in the Palace Orchard area, <b>Move It Solution</b> will provide the same level of service as you would expect to receive through a full-service concierge. We lift your possessions with the same level of care and attention as if we were handling our own.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready for an elite moving experience? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> today!
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
                            <LocationSidebar slug="sadashiva-nagar" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

                            <div className="bg-white p-5 mt-5">
                                <h2 className="text-xl md:text-2xl   font-semimedium">
                                    Hire Affordable International Courier Services
                                </h2>
                                <p className="text-justify text-base mt-3">
                                    Office movers New York city – Budget friendly services, fast
                                    delivery. Moving and delivery services do not stop even in the
                                    middle of night. That is why our customer representatives are
                                    on guard twenty four hours for all our clients to check on the
                                    whereabouts of their goods during movements.
                                </p>
                                <p className="text-justify text-base my-5">
                                    Take advantage of Move It Solution, the cheapest and reliable
                                    international courier service. We emphasize on affordability
                                    because we understand people have different budgets and we
                                    guarantee the delivery at the very minimum time possible.
                                </p>

                                <ul className="">
                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Request Quotes Online
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Packing &amp; Transportation of "A" Quality
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Delivery is guaranteed to be safe.
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Team With Experience and Support
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        Packaging Services You Can Trust
                                    </li>

                                    <li className="flex gap-4 items-center font-semibold mb-2 group">
                                        <FaCheck className="text-[#ff6600] p-1 border border-[#ff6600] w-6 h-6 flex items-center justify-center transition-all duration-300 ease-linear group-hover:rounded-full group-hover:bg-[#ff6600] group-hover:text-white group-hover:border-transparent" />
                                        24/7 live assistance
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <FaqMain pageType="sadashivaNagar" />
            <OurServices />
        </>
    );
};

export default page;
