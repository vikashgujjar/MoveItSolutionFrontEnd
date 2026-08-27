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
    title: "Packers and Movers in Dollars Colony | Reliable Shifting",
    description: "Experienced packers and movers in Dollars Colony delivering safe packing, damage-free transport and stress-free home and office relocation services.",
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Dollars Colony</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                The Challenge of Moving to Dollars Colony, Bangalore 2026
                            </h2>
                            <p className="text-justify ">
                                Moving to Dollars Colony (RMV 2nd Stage) is unlike any other relocation within the city. Unlike the commercial buzz of Indiranagar or congested streets in Koramangala, this suburb features wide tree-lined streets with large detached homes and a remarkable level of quietness, extremely rare in a big city. Whether you are moving to the RMV Club or one of the many quieter side streets off of New BEL Road, the community represents privacy and exclusivity.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/bangalore.webp"
                                    alt="Packers and Movers in Dollars Colony"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                To this end, relocating to such a peaceful area necessitates a very different set of skills and expertise.
                            </p>

                            <p className="text-justify text-base my-5">
                                The biggest challenge is not navigating heavy traffic; it is maintaining decorum while moving. Loud shouting from the crew, idling truck engines, and packing debris piled on the sidewalk are not acceptable. Neighbors are noted for their powerful stature within the community and adhere to the community's code of conduct.
                            </p>

                            <p className="text-justify text-base my-5">
                                As you search for "<b>Packers and Movers in Dollars Colony</b>," you are looking for a mover that functions more as a personal concierge than as a general freight line. At <b>Move It Solution</b>, we specialize in "Silent Moves": Ensuring that your move into one of the most prestigious communities is just as dignified and stress-free as the address indicates.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Bungalow Belt
                            </h2>
                            <p className="text-justify ">
                                In contrast to Bellandur and Whitefield, the predominant structure of the Dollars Colony is not high-rise condominiums, but many multi-storeyed independent homes.
                            </p>

                            <h3 className="text-base font-bold my-4">Staircases are a significant challenge</h3>
                            <p className="text-justify ">
                                Most bungalows will have either elaborate winding staircases or external spiral stairs. Moving large items such as Jacuzzis, treadmills, or large teak beds to the second floor will require skill and not just muscle.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>What We Do:</b> When an item cannot be taken through internal staircases due to size, we utilize hoisting techniques with pulleys and rope. In addition, we utilize rubber-wheeled dollies to avoid noise or scratching of your driveway.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Green Canopy
                            </h2>
                            <p className="text-justify ">
                                The avenues of Dollars Colony are tree-lined but consist of trees with low-hanging branches.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Problem:</b> An open truck will almost always hit a branch, resulting in damage to your belongings or the trees of the neighbourhood (which carry steep fines).</li>
                                <li><b>The Solution:</b> We use only <b>closed ISO containers (hard body trucks)</b> to transport goods. These trucks slide between the trees without any disruption. Our drivers watch for low electric and cable lines that are frequently found in residential streets.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Luxury Home White Glove Services
                            </h2>
                            <p className="text-justify ">
                                Luxury Homes in the Dollars Colony are commonly finished with imported Italian luxury marble, granite floors, and beautiful wood finishing.
                            </p>

                            <h3 className="text-base font-bold my-4">Floor Protection</h3>
                            <p className="text-justify ">
                                The first thing we do when working on your luxury home is install a layer of <b>High-Density Foam Sheets or Corrugated Rolls</b> all the way from the main driveway to the master bedroom. This protects your luxurious floors from dirt, scratches, or cracks created from moving heavy pieces of furniture.
                            </p>

                            <h3 className="text-base font-bold my-4">Chandeliers/Artwork</h3>
                            <p className="text-justify ">
                                Most homeowners within the Dollars Colony tend to have valuable artwork and crystal chandeliers in their homes.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Chandeliers:</b> We will remove all crystals from the chandelier, place each crystal in its own foam slot, and crate the chandelier itself.</li>
                                <li><b>Artwork:</b> We will wrap all oil paintings in Acid-Free Tissue and Bubble Wrap, and then put them in customized crates to protect against moisture damage and tearing.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Buffer of the New BEL Road
                            </h2>
                            <p className="text-justify ">
                                Although the colony is relatively quiet, its commercial hub, New BEL Road, is only one street away.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Traffic Management:</b> We will time the entry and exit of the truck to bypass the evening shopping rush along New BEL Road, ensuring the truck is not backed up within metres of your destination.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Timeline for Dollars Colony Moving Consists of 3 Phases
                            </h2>

                            <h3 className="text-base font-bold my-4">Phase 1: The "Privacy" Survey (1 Week Before Move-In)</h3>
                            <p className="text-justify ">
                                The Protection of Your Privacy and Security During Your Move Is Our Top Priority!
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Privacy Protection Process:</b> Begins by Having a Senior Supervisor Visit Your Home (vs. a sales agent) to Survey Your Goods. Upon Receiving Your Request, We Are Happy to Sign an NDA Regarding the Destination of Your Move and the Types of Items You Are Moving That Are Considered High Value (ie. Safes, Antiques, etc.).</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Phase 2: The "Neighbor Protocol" (24 Hours Before Move-In)</h3>
                            <p className="text-justify ">
                                Parking Is Extremely Important to Dollars Colony Residents. Neighbors Must Practice Proper Parking Etiquette to Keep the Streets Clear and Accessible.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Following the Parking Etiquette Protocol:</b> Even Though the Roads Are Wide, the 19 Ft Truck Can Block a Neighbor's Gate. It Is Often a Good Idea to Notify Your Neighbors of Your Move 24 Hours Before Your Move. We Also Place Traffic Cones Around Your Truck to Ensure Other Vehicles Can Safely Pass Through.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Phase 3: Day of Move-In (D-Day!)</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Morning of Your Move-In:</b> We Arrive at <b>9:00 AM</b> to Respect the Morning Walk Hours of Your Community Residents.</li>
                                <li><b>While on the Move:</b> We Use Premium Quality White Packing Materials to Give Your Move a Clean Look.</li>
                                <li><b>Transporting:</b> When Transporting Your Goods, We Drive Slowly and Carefully to Prevent Vibration Damage.</li>
                                <li><b>Unloading:</b> We offer a "Valet Unpacking" Service to Professionally Organise Your Wardrobe, Kitchen, and bookshelf. We also remove all empty boxes from your home immediately after unpacking, ensuring your home is ready for you to Live In by Sunset.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <WhyExpress />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Conclusion
                            </h2>
                            <h3 className="text-base font-bold my-4">Reasons for Choosing Move It Solution by Dollars Colony Residents</h3>
                            <p className="text-justify text-base my-5">
                                You picked Dollars Colony because of its peacefulness and high society. Your relocation should not be an obstacle to that. The marble flooring should not be scratched or the movers' noise should not disturb the neighbors.
                                <b>Move It Solution</b> offers the discretion, care, and white-glove service needed, whether you are shifting a 3-story bungalow near M.S. Ramaiah Hospital or a luxury villa near Radhakrishna Temple.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready for a discreet, premium move? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> today!
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
                            <LocationSidebar slug="dollars-colony" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

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

            <FaqMain pageType="dollarsColony" />
            <OurServices />
        </>
    );
};

export default page;
