"use client";
import React from "react";
import Image from "next/image";

const WhyExpress = ({ location = "Bangalore" }) => {

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl md:text-2xl mb-8 font-semimedium text-gray-800">Why Express Logistic Packers in {location}?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image src="/Images/lowest-price.webp" alt="Fast Service" width={40} height={40} className="w-10 h-auto" />
                    </div>
                    <div>
                        <h6 className="text-[15px] font-bold text-gray-900 leading-tight mb-1">Fast & Reliable Service</h6>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-normal">Quick deliveries with secure and efficient handling.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image src="/Images/quality-service.webp" alt="Professional Packing" width={40} height={40} className="w-10 h-auto" />
                    </div>
                    <div>
                        <h6 className="text-[15px] font-bold text-gray-900 leading-tight mb-1">Safe & Professional Packing</h6>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-normal">High-quality materials ensure damage-free transportation.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image src="/Images/reschedule-cancellation.webp" alt="Transparent Pricing" width={40} height={40} className="w-10 h-auto" />
                    </div>
                    <div>
                        <h6 className="text-[15px] font-bold text-gray-900 leading-tight mb-1">Affordable & Transparent Pricing</h6>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-normal">No hidden charges, budget-friendly solutions.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image src="/Images/move-manager.webp" alt="Real-Time Tracking" width={40} height={40} className="w-10 h-auto" />
                    </div>
                    <div>
                        <h6 className="text-[15px] font-bold text-gray-900 leading-tight mb-1">Real-Time Tracking & Support</h6>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-normal">Live tracking with 24/7 customer assistance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyExpress;