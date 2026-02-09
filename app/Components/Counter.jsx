"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

const Counter = () => {
  const [happyUsers, setHappyUsers] = useState(0);
  const [casesResolved, setCasesResolved] = useState(0);
  const [expertLawyers, setExpertLawyers] = useState(0);
  const [specialities, setSpecialities] = useState(0);

  useEffect(() => {
    const duration = 2000;

    const incrementCounter = (setCounter, targetValue, startValue = 0) => {
      const incrementTime = Math.floor(duration / (targetValue - startValue));
      const counterInterval = setInterval(() => {
        startValue += 1;
        setCounter(startValue);
        if (startValue >= targetValue) {
          clearInterval(counterInterval);
        }
      }, incrementTime);
    };

    incrementCounter(setHappyUsers, 8845, 8740);
    incrementCounter(setCasesResolved, 1507, 1450);
    incrementCounter(setExpertLawyers, 1000, 850);
    incrementCounter(setSpecialities, 4586, 4480);
  }, []);

  return (
    <>
      <div className="">
        <div className="bg-[#062b47] opacity-[0.8]">
          <div className="py-12  px-14 md:px-28  md:py-8 mx-auto relative">
            <div className="flex-wrap flex justify-between items-center  ">
              <div className="mb-5 lg:mb-0 text-white block lg:flex  justify-center gap-4 items-center">
                <Image
                  width={700}
                  height={700}
                  src="/Images/img/box1.webp"
                  className="w-14 h-14 mx-auto"
                  alt="Delivered Packages"
                />
                <div className="text-center mt-2 lg:mt-0">
                  <h2 className="text-2xl lg:text-4xl font-bold text-white">
                    {happyUsers.toLocaleString()} K
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-white mt-2">
                    Delivered Packages
                  </p>
                </div>
              </div>

              <div className="mb-5 lg:mb-0 text-white block lg:flex justify-center gap-4 items-center">
                <Image
                  width={700}
                  height={700}
                  src="/Images/img/earth.webp"
                  className="w-14 h-14 mx-auto"
                  alt="Countries Covered"
                />
                <div className="text-center mt-2 lg:mt-0">
                  <h2 className="text-2xl lg:text-4xl font-bold text-white">
                    {casesResolved.toLocaleString()} M
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-white mt-2">
                    Countries Covered
                  </p>
                </div>
              </div>

              <div className="mb-5 lg:mb-0 text-white block lg:flex justify-center gap-4 items-center">
                <Image
                  width={700}
                  height={700}
                  src="/Images/img/support.webp"
                  className="w-14 h-14 mx-auto"
                  alt="Satisfied Clients"
                />
                <div className="text-center mt-2 lg:mt-0">
                  <h2 className="text-2xl lg:text-4xl font-bold text-white">
                    {expertLawyers} K
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-white mt-2">
                    Satisfied Clients
                  </p>
                </div>
              </div>

              <div className="mb-5 lg:mb-0 text-white block lg:flex justify-center gap-4 items-center">
                <Image
                  width={700}
                  height={700}
                  src="/Images/img/boxes.webp"
                  className="w-14 h-14 mx-auto"
                  alt="Tons of Goods"
                />
                <div className="text-center mt-2 lg:mt-0">
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-white">
                    {specialities} M
                  </h2>
                  <p className="text-xs sm:text-sm lg:text-base text-white mt-2">
                    Tons of Goods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
