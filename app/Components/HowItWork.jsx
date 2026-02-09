"use client";
import React from "react";
import Image from "next/image";

const HowItWork = () => {
    const works = [
        {
            title: "Order Placement 📦",
            description: "Customers book a shipment via website, app, or phone.",
            image: "/Images/shifting-requirement.webp",
        },
        {
            title: "Pickup & Packaging 🎯",
            description: "Our courier partners collect the package from your location.",
            image: "/Images/instant-quote.webp",
        },
        {
            title: "Sorting & Dispatch 🚛",
            description: "Packages are sorted at our logistics hubs for efficient routing.",
            image: "/Images/quality-service-expert.webp",
        },
        {
            title: " Real-Time Tracking 🔍",
            description: "Customers get a tracking ID to monitor their shipment.",
            image: "/Images/heavy-lifting.webp",
        },
    ];

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl md:text-2xl mb-5 font-semimedium">How it Works?</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 flex flex-col gap-6 justify-center">
                    {works.map((work, index) => (
                        <div key={index} className="flex gap-[15px] items-start">
                            <div className="flex-shrink-0 bg-[#F7F7F8] w-[50px] h-[50px] rounded-full p-[5px] flex items-center justify-center">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={40}
                                    height={40}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="mt-[2px]">
                                <h6 className="text-[14px] font-semibold text-gray-800">{work.title}</h6>
                                <p className="text-[12px] opacity-80 text-gray-600 leading-relaxed">{work.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-1 flex gap-4 items-center">
                    <div className="w-1/2 h-full relative rounded-lg overflow-hidden">
                        <Image
                            src="/Images/hero.webp"
                            alt="Logistic Service"
                            width={300}
                            height={400}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                    <div className="w-1/2 h-full relative rounded-lg overflow-hidden mt-8">
                        <Image
                            src="/Images/n1.webp"
                            alt="Delivery"
                            width={300}
                            height={400}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;