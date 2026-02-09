"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function TrackingNumberArea() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to simulate progress
  useEffect(() => {
    let timer;
    if (isPopupVisible && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 100));
      }, 40);
    } else if (progress === 100) {
      // Simulate an error after progress completes
      setTimeout(() => setIsError(true), 500); // Error appears after a delay
    }
    return () => clearInterval(timer);
  }, [isPopupVisible, progress]);

  const handleButtonClick = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Please enter a tracking number.");
      return;
    }
    setPopupVisible(true);
    setProgress(0); // Reset progress
    setIsError(false); // Reset error state
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setProgress(0); // Reset progress for next use
    setIsError(false); // Reset error state
  };

  return (
    <div className="tracking-number-area bg-[#f7f7f7] py-10 px-5 lg:px-28">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-5/12">
            <div className="tracking-content">
              <h2 className="text-2xl lg:text-3xl">
                Please use this form to get a free quote & track your order
                manually
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-7/12 mt-6 lg:mt-0">
            <div className="relative w-full">
              <form className="tracking-wrap">
                <input
                  type="text"
                  className="input-tracking px-5 h-[70px] py-2.5 border-0 rounded-[4px] w-full outline-none"
                  placeholder="Type your bilty number & track your order"
                  id="values"
                  name="Tracking"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  required
                />
                {errorMessage && (
                  <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
                )}
                <button
                  className="default-btn active tracking-body border outline-none border-[#fa4612] bg-[#fa4612] text-white py-3 px-6 rounded transition duration-300"
                  type="button"
                  onClick={handleButtonClick}
                >
                  Track Now
                </button>
              </form>
              <span id="add_value" className="text-red-500"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="popup fixed top-0 z-[999] left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative popup-content bg-white rounded-lg p-6 shadow-lg w-[90%] md:w-[400px]">
            {!isError ? (
              <>
                <h3 className="text-xl font-semibold mb-4">
                  Tracking Progress
                </h3>
                <div className="progress-bar w-full bg-gray-200 rounded h-4 overflow-hidden">
                  <div
                    className={`transition-all duration-300 h-full ${
                      progress === 100 ? "bg-red-500" : "bg-blue-600"
                    }`}
                    style={{
                      width: `${progress}%`,
                      filter: progress < 98 ? "" : "none",
                    }}
                  ></div>
                </div>
                <p className="mt-4 text-center">
                  {progress === 100 ? "Completed!" : `Progress: ${progress}%`}
                </p>
              </>
            ) : (
              <div className="progress_errordiv text-center">
                <div className="pop_logo mb-4">
                  <Image
                    width={700}
                    height={700}
                    src="/Images/Move-it-solution-packers-and-movers.webp"
                    alt="Move it solution packers and movers"
                    style={{ background: "#000", padding: "20px" }}
                  />
                </div>
                <div className="prograss_errr">
                  <h4 className="text-xl font-semibold mb-2">
                    Network Error: 7:3:0:0:1
                  </h4>
                  <p className="mb-2">
                    We couldn't track your order. Please call us or chat with us
                    for more info.
                  </p>
                  <p className="font-semibold">Call Us Now: +91-7056997000</p>
                </div>
              </div>
            )}
            <button
              className="absolute top-2 right-2"
              onClick={handleClosePopup}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
