"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../Components/contactForm"), { ssr: false });

const FormModal = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <>
            {/* Enhanced Backdrop with blur */}
            <div
                className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm animate-backdrop-fade"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="relative w-full max-w-xl animate-modal-slide pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Redesigned Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute -top-12 right-0 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50 group"
                        aria-label="Close modal"
                    >
                        <svg
                            className="w-6 h-6 transition-transform group-hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Modal Card with enhanced design */}
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        {title && (
                            <div className="relative bg-gradient-to-br from-[#020c5b] to-[#ff6600] px-8 py-10 text-center overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -mr-20 -mt-20" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl -ml-16 -mb-16" />
                                <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-75" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="inline-block mb-3">
                                        <div className="w-16 h-1 bg-white/30 rounded-full mx-auto" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                        {title}
                                    </h2>
                                    <p className="text-blue-100/90 text-sm md:text-base font-light">
                                        We'd love to hear from you
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Form Container */}
                        <div className="px-0 pb-8 pt-6">
                            <ContactForm pageType="contact" />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes backdrop-fade {
                    from { 
                        opacity: 0;
                    }
                    to { 
                        opacity: 1;
                    }
                }

                @keyframes modal-slide {
                    from { 
                        opacity: 0;
                        transform: translateY(20px) scale(0.96);
                    }
                    to { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-backdrop-fade {
                    animation: backdrop-fade 0.3s ease-out;
                }

                .animate-modal-slide {
                    animation: modal-slide 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .delay-75 {
                    animation-delay: 0.15s;
                }

                /* Smooth scroll prevention when modal is open */
                body:has(.z-\[1000\]) {
                    overflow: hidden;
                }
            `}</style>
        </>
    );
};

export default FormModal;