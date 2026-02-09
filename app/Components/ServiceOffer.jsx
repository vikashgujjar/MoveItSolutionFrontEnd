"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const ServiceOffer = () => {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            name: "Within City",
            image: "/Images/map_11622902 (1).webp",
            discount: "Upto 25% off"
        },
        {
            name: "Out of City",
            image: "/Images/location.webp",
            discount: "Upto 25% off"
        },
        {
            name: "City Tempo",
            image: "/Images/driving.webp",
            discount: "Upto 25% off"
        },
        {
            name: "Vehicle Shifting",
            image: "/Images/truck.webp",
            discount: "Upto 25% off"
        }
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl md:text-2xl mb-5 font-semimedium">Services We Offer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-evenly rounded-xl overflow-hidden py-4 gap-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex flex-col items-center cursor-pointer p-2 rounded-lg transition-colors hover:bg-[#f5f5f5] duration-200`}
                    >
                        <h6 className="bg-[#ffe8c3] text-[9px] border border-white px-3 py-[1px] rounded-sm mb-1">
                            {service.discount}
                        </h6>
                        <div className="bg-[#F7F7F7] rounded-full p-[3px] ml-0">
                            <Image
                                src={service.image}
                                alt={service.name}
                                width={55}
                                height={55}
                                className="w-[55px] h-[55px] object-contain"
                            />
                        </div>
                        <p className="text-[#4d4b4b] text-[12px] font-semibold pt-[6px] text-center">
                            {service.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceOffer;