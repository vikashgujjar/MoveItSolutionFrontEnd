import Link from "next/link";
import React from "react";

const OurServices = ({ pageType = "bangalore" }) => {
    const bangaloreServices = [
        { name: "Packers and Movers in Electronic City", href: "/packers-and-movers-in-electronic-city" },
        { name: "Packers and Movers in Jayanagar", href: "/packers-and-movers-in-jayanagar" },
        { name: "Packers and Movers in Koramangala", href: "/packers-and-movers-in-koramangala" },
        { name: "Packers and Movers in Indiranagar", href: "/packers-and-movers-in-indiranagar" },
        { name: "Packers and Movers in Sadashiva Nagar", href: "/packers-and-movers-in-sadashiva-nagar" },
        { name: "Packers and Movers in Sarjapur Main Road", href: "/packers-and-movers-in-sarjapur-main-road" },
        { name: "Packers and Movers in Bellandur", href: "/packers-and-movers-in-bellandur" },
        { name: "Packers and Movers in Dollars Colony", href: "/packers-and-movers-in-dollars-colony" },
        { name: "Packers and Movers in Kengeri", href: "/packers-and-movers-in-kengeri" },
    ];

    const mumbaiServices = [
        { name: "Packers and Movers in Palava", href: "/packers-and-movers-in-palava" },
        { name: "Packers and Movers in Andheri", href: "/packers-and-movers-in-andheri" },
        { name: "Packers and Movers in Powai", href: "/packers-and-movers-in-powai" },
        { name: "Packers and Movers in Vikhroli", href: "/packers-and-movers-in-vikhroli" },
        { name: "Packers and Movers in Ghatkopar", href: "/packers-and-movers-in-ghatkoper" },
        { name: "Packers and Movers in Kurla", href: "/packers-and-movers-in-kurla" },
        { name: "Packers and Movers in Vile Parle", href: "/packers-and-movers-in-vile-parle" },
        { name: "Packers and Movers in Mumbai Central", href: "/packers-and-movers-in-mumbai-central" },
        { name: "Packers and Movers in Colaba", href: "/packers-and-movers-in-colaba" },
        { name: "Packers and Movers in Seawoods", href: "/packers-and-movers-in-seawood" },
        { name: "Packers and Movers in Ulwe", href: "/packers-and-movers-in-ulwe" },
        { name: "Packers and Movers in Kharghar", href: "/packers-and-movers-in-kharghar" },
        { name: "Packers and Movers in Dadar", href: "/packers-and-movers-in-dadar" },
        { name: "Packers and Movers in Chembur", href: "/packers-and-movers-in-chembur" },
    ];

    const services = pageType === "mumbai" ? mumbaiServices : bangaloreServices;

    return (
        <>
            <div className="bg-gradient-to-br from-[#fa4612] to-[#ff6600] py-16 md:py-20 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48"></div>

                <div className="px-5 md:px-10 lg:px-28 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4 animate-fade-in">
                            {pageType === "mumbai" ? "Our Services In Mumbai" : "Our Services In Bangalore"}
                        </h2>
                        <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl px-5 py-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-white/20 backdrop-blur-sm"
                            >
                                {/* Icon Container */}
                                <div className="relative flex-shrink-0">
                                    <div className="absolute inset-0 bg-[#ff6600]/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                                    <div className="relative bg-gradient-to-br from-[#ff6600] to-[#fa4612] p-2.5 rounded-full group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Text Content */}
                                <span className="text-gray-800 text-base md:text-lg font-semibold group-hover:text-[#ff6600] transition-colors duration-300 leading-snug">
                                    {service.name}
                                </span>

                                {/* Arrow Icon */}
                                <svg
                                    className="w-5 h-5 text-[#ff6600] ml-auto opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 md:mt-16">
                        <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
                            Can't find your location?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-[#ff6600] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Contact Us
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurServices;