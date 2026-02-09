"use client";
import { useState } from "react";
import Image from "next/image";
import Counter from "../Components/Counter";
import LogoSlider from "../Components/LogoSlider";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";
import Chooseus from "../Components/chooseus";
import TeamMember from "../Components/TeamMember";
import PrioritiesSection from "../Components/PrioritiesSection";

const AboutSection = () => {
  return (
    <>
      <section className="about-area py-10 md:py-20 px-0 md:px-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative">
                <Image
                  src="/Images/about/transportation-and-logistics.webp"
                  alt="transition and logistics"
                  width={400}
                  height={400}
                  className="h-full w-full"
                />
                <div className="about-quatre">
                  <i className="bx bxs-quote-alt-left bx-tada  text-2xl lg:text-5xl text-white bg-[#fa4612] rounded-full p-3 absolute right-2 lg:-right-8 top-[80%] lg:top-[42%]"></i>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 lg:pl-16">
              <div className="about-content space-y-6">
                <span className="text-[#fa4612]">About Us</span>
                <h1 className="text-2xl md:text-[40px] font-bold text-[#24416b]">
                  Get To Know Move It Solutions

                </h1>
                <p className="text-justify leading-relaxed">
                  Future IT Touch Pvt. Ltd. proudly presents to you Move It Solutions. One of the leading and best international relocation companies. Based in Delhi, Move It Solutions has been in the logistics and transportation business for 13 years now. So, we welcome you to Move It Solutions, an answer to all your moving and relocation needs.

                  <span className="font-semibold">
                    This company operates under the management of Future IT
                    Touch Private Limited.
                  </span>
                </p>
                <p className="text-justify leading-relaxed">
                Whether it be in-house shifting or international house shifting, we’ve got it all covered. We have an extensive network of logistics partners and suppliers who not only help us with our client’s relocation but also help with the unpacking and settlement of goods at the destination.  Not only this, we know how stressful the legal documentation and paperwork can be, so we have a team that looks after all the customs, legal paperwork, and all the procedures that have to be done in terms of relocating. So, rest assured that your goods and shipments are in safe hands.
                </p>
                <p className="text-justify leading-relaxed">


                Given the fact that our customers reach out to us when they are looking for companies offering international house shifting services, Move It Solutions makes sure to work towards customer satisfaction. We have a team of seasoned and trained professionals who are very well aware of its and bits of international house shifting, transporting, and other requirements that may arise. So, if you decide to go forward with your relocation through Move It Solutions, you will be handing over your goods and other items to a renowned and best-moving company. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chooseus />
      <PrioritiesSection />

      <Counter />
      <LogoSlider />

      <TeamMember />
    </>
  );
};

export default AboutSection;
