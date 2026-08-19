"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
const FormQuerry = dynamic(() => import("../Components/Form"), { ssr: false });

const LocationBanner = ({ notifyEmail }) => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const ImgsliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const sliderItems = [
        {
            title: "Express Protect",
            desc: "Household damage protection",
            img: "/Images/nb-protect.webp"
        },
        {
            title: "4.8 / 5 Rating",
            desc: "Timely Pickup & Delivery",
            img: "/Images/clock.webp"
        },
        {
            title: "15+ Experience",
            desc: "Reliable Packaging",
            img: "/Images/hassle-icon.webp"
        },
        {
            title: "Price Match Guarantee",
            desc: "100% price and guarantee",
            img: "/Images/reliable-driver.webp"
        }
    ];

    return (
        <div className="footer pt-[90px] md:pt-[120px] lg:pt-16 pb-20 md:pb-32 px-5 md:px-10 lg:px-28 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="relative z-10">
                    {/* Header Section */}
                    <div className="mb-5">
                        <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                            Reliable & Efficient Express Logistics Services
                        </h2>
                        <p className="text-white/80 text-xs mb-0 md:text-xs max-w-4xl font-normal leading-relaxed">
                            We specialize in express logistics solutions designed to meet the fast-paced demands of modern businesses.
                        </p>
                    </div>
                    {/* Slider Section */}
                    <div className="mb-5">
                        <Slider {...sliderSettings} className="location-banner-slider group">
                            {sliderItems.map((item, index) => (
                                <div key={index} className="px-2">
                                    <div className="bg-white rounded-xl p-2 flex items-center gap-4 shadow-lg border border-white/20 transition-all hover:shadow-xl">
                                        <div className="bg-blue-600/10 p-2.5 rounded-xl flex-shrink-0">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={22}
                                                height={22}
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-[#5d4990] font-bold text-[11px] italic leading-tight mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-[7px] font-medium uppercase tracking-tight">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    {/* Hero Image Section */}
                    <div className="w-full mx-auto">
                        <div className="rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/10">
                            <Slider {...ImgsliderSettings} className="location-banner-slider group">
                                <Image
                                    src="/Images/moverscargo.webp"
                                    alt="Express Logistics Operations"
                                    width={1200}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                                <Image
                                    src="/Images/packersbangalore.webp"
                                    alt="Express Logistics Operations"
                                    width={1200}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                                <Image
                                    src="/Images/check.jpg"
                                    alt="Express Logistics Operations"
                                    width={1200}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
                <div>
                    <FormQuerry showOnlyLocal={true} notifyEmail={notifyEmail} />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-white z-0 hidden lg:block translate-y-1/2 rounded-t-[50%] opacity-10"></div>
        </div>
    );
};


export default LocationBanner;