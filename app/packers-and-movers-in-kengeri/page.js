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
    title: "Packers and Movers in Kengeri | Professional Movers",
    description: "Trusted packers and movers in Kengeri providing expert packing, safe loading, secure transportation and smooth home and office shifting services.",
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
                            <h1 className="text-xl md:text-[40px] my-5 leading-[1.1] font-semimedium">Packers and Movers in Kengeri</h1>
                            <h2 className="text-xl md:text-xl my-5 leading-[1.1] font-semimedium">
                                Movers and Packers in Kengeri: Relocation in the Green Satellite Town (2026)
                            </h2>
                            <p className="text-justify ">
                                Relocation to Kengeri provides the ideal mixture: the serenity of a well-organized suburb and the convenience of a main highway. No matter which side of Kengeri Satellite Town you are moving to, the developing Upanagara, or even the Tech Park of Global Village, Kengeri is not just the "periphery" of the city anymore; it is a vibrant area for residential purposes.
                            </p>

                            <div className="my-8">
                                <Image
                                    src="/Images/img/bangalore.webp"
                                    alt="Packers and Movers in Kengeri"
                                    width={800}
                                    height={600}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>

                            <p className="text-justify text-base my-5">
                                But still, moving to this area poses one huge obstacle: <b>Mysore Road</b>.
                            </p>

                            <p className="text-justify text-base my-5">
                                The busy road that links Bangalore to Mysore is always packed. The presence of heavy inter-city buses, the traffic of people going on weekend getaways, and the road work going on can all contribute to turning what was supposed to be a simple and quick move into a nightmare of models trapped in gridlock. To be stuck in a moving truck at the Kengeri Metro Station or the Rajarajeshwari Nagar Arch during the hours of the most traffic can make you lose your schedule for hours.
                            </p>

                            <p className="text-justify text-base my-5">
                                If you type "<b>Packers and Movers in Kengeri</b>" in a search engine, you will get to find a team who are skilled and knowledgeable enough to find their way around the highway chaos. You need pros who are aware of the times when the NICE Road entry is jammed and which internal roads in Kommaghatta are spacious enough for a heavy container truck. <b>Move It Solutions</b> is the company where we combine highway logistics with local neighborhood intelligence.
                            </p>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <ServiceOffer />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Utilization of the NICE Road Corridor
                            </h2>
                            <p className="text-justify ">
                                The proximity to the NICE Ring Road is one of the major benefits of Kengeri. We can completely avoid the traffic in the heart of the city by moving to Kengeri instead of central Bangalore.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Strategy:</b> When you are moving from Electronic City or Bannerghatta Road to Kengeri, we always use the NICE Road. This not only enables the use of large 20ft container trucks (which are capable of safely carrying larger volumes) rather than smaller tempos, but also saves you money on the multiple trips.</li>
                                <li><b>Global Village Tech Park:</b> The techies residing close to Pattanagere or Mylasandra have to deal with the challenge of shift change traffic. We schedule our trucks to reach after the <b>6:00 PM</b> logout rush from Global Village is over, thus providing a smooth access to your apartment complex.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <HowItWork />
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Old Town vs. New Layouts
                            </h2>
                            <p className="text-justify ">
                                Kengeri offers the old Satellite Town (narrow, tree-lined lanes) and new layouts like Visvesvaraya Layout (wide, dusty roads) in one location.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Satellite Town Challenge:</b> The streets in the old blocks are so narrow that large trucks cannot turn easily due to low-hanging wires and cars parked on the road. A "Shuttle Service" is what we often resort to in this area, where the big truck is positioned on the main road, and the goods are transported with smaller vehicles.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The Weekend Getaway Traffic Factor
                            </h2>
                            <p className="text-justify ">
                                Kengeri is the final spot for travelers heading to Mysore or Coorg, which makes the traffic flow here different from others.
                            </p>
                            <p className="text-justify text-base my-5">
                                Mysore Road is thronged with tourists leaving the city on Friday nights and Saturday mornings. A move planned for Saturday morning can easily be caught in this flood.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Scheduling:</b> Scheduling your move on weekdays (<b>Tuesday or Wednesday</b>) is our firm's recommendation. If an over-the-weekend move is unavoidable, we will schedule a Sunday afternoon move when outgoing traffic has calmed down, thereby granting our trucks the whole road to themselves.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Dust Protection
                            </h2>
                            <p className="text-justify ">
                                Kengeri is yet a place where there is still a lot of construction going on, especially towards Challaghatta. The air is often very dusty because of the expansion of highways and the presence of open lands.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Standard for Packing:</b> Items will not just be placed in boxes. Every piece of furniture, mattress, and appliance will be wrapped in <b>Plastic Stretch Wrap</b>. This packing method creates dust-proof sealing; thus, the red soil around the city will not penetrate your sofa fabric during the move.</li>
                            </ul>
                        </div>

                        <div className="bg-white px-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                The 3-Stage Kengeri Moving Timeline
                            </h2>

                            <h3 className="text-base font-bold my-4">Step 1: The "Route Check" (1 Week Before)</h3>
                            <p className="text-justify ">
                                Google Maps does not always represent the present situation of Mysore Road diversions.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Survey:</b> Our supervisor does a physical check on the roads leading to your new house. Is the Dubasipalya crossing clear? Is there a temple festival in Kengeri Upanagara that is making the street impassable? This first-hand information prevents the last-minute change of route.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Step 2: The "Metro" Coordination (24 Hours Before)</h3>
                            <p className="text-justify ">
                                The Purple Line's extension to Challaghatta has made the traffic near metro stations very bad.
                            </p>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>The Protocol:</b> If your house is very close to a Metro station, parking becomes hard to find. We suggest you block the spot right in front of your gate with your car or our safety cones the night before. By doing so, we won't have to double-park on the busy service road.</li>
                            </ul>

                            <h3 className="text-base font-bold my-4">Step 3: Moving Day (D-Day)</h3>
                            <ul className="list-disc my-4 ps-5">
                                <li><b>Morning:</b> We wake up early (<b>7:30 AM</b>) to get past the Kengeri Arch before the buses for commuting between cities start arriving.</li>
                                <li><b>Packing:</b> We are particularly careful with items for the garden (pots/swings), which are frequently found in the independent houses of Kengeri.</li>
                                <li><b>Transport:</b> For transportation, we use the NICE road as much as possible to ensure a more comfortable ride.</li>
                                <li><b>Unloading:</b> We put together your furniture and get rid of all packing waste, thus making your home free of dust.</li>
                            </ul>
                        </div>
                        <div className="bg-white px-5 pb-5">
                            <WhyExpress />
                        </div>

                        <div className="bg-white px-5 pb-5">
                            <h2 className="text-xl md:text-4xl mb-5  font-semimedium">
                                Why Kengeri Residents Choose Move It Solution
                            </h2>
                            <p className="text-justify text-base my-5">
                                You moved to Kengeri for the greenery and the space. Your move shouldn't be ruined by highway traffic or dust. Whether you are moving to a duplex in Shirke Apartments or a villa near Kumbalgodu, <b>Move It Solution</b> brings the specialized equipment and local knowledge to handle the distance and the terrain.
                                We handle the highway logistics so you can enjoy the fresh air of the outskirts.
                            </p>
                            <p className="text-justify text-base my-5">
                                Ready to relocate to Kengeri? <Link href="/contact" className="text-[#ff6600] underline">Contact Move It Solutions</Link> for expert highway logistics!
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
                            <LocationSidebar slug="kengeri" fallbackPhone="+91-7056997000" fallbackAddress="Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26, New Delhi (110077)" />

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

            <FaqMain pageType="kengeri" />
            <OurServices />
        </>
    );
};

export default page;
