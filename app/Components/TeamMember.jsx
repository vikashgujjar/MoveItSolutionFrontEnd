"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import { getTeamMembers } from "@/app/lib/teamMembers";

const TeamMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    let cancelled = false;
    getTeamMembers().then((data) => {
      if (!cancelled && Array.isArray(data)) {
        setTeamMembers(data.slice(0, 4));
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (teamMembers.length === 0) {
    return null;
  }

  return (
    <>
      <section className="team-area py-24 bg-gray-50 px-0 md:px-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#fa4612] uppercase text-lg">
            Our TEAM
            </span>
            <h2 className="text-3xl md:text-[40px] underline-animation left mt-3 font-bold text-[#24416b]">
            The Professionals Who Are Always At Your Support

            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="single-team group relative overflow-hidden bg-white shadow-lg text-center h-[380px]"
              >
                <Image
               width={700}
               height={700}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover absolute transition-transform transform hover:scale-110 filter grayscale hover:grayscale-0 duration-700 mb-4"
                />
                <div className="team-content absolute bottom-0 w-full bg-[#24416b] text-center p-2 transition-transform duration-500 transform perspective-300 rotate-x-90 origin-bottom group-hover:rotate-x-0">
                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <span className="text-sm text-white">{member.role}</span>
                </div>
                <ul className="absolute hidden group-hover:block top-0 justify-center">
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href={member.facebook_url || ""}
                      className="text-gray-400 hover:text-blue-600 transition"
                    >
                      <i className="bx bxl-facebook text-lg text-white"></i>
                    </Link>
                  </li>
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href={member.twitter_url || ""}
                      className="text-gray-400 hover:text-blue-400 transition"
                    >
                      <i className="bx bxl-twitter text-lg text-white"></i>
                    </Link>
                  </li>
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href={member.instagram_url || ""}
                      className="text-gray-400 hover:text-pink-600 transition"
                    >
                      <i className="bx bxl-instagram text-lg text-white"></i>
                    </Link>
                  </li>
                  <li className="w-10 h-10 bg-[#24416b] text-center text-white leading-[40px] border-b border-[#19345a] transition-transform duration-500 transform rotate-y-90 origin-left group-hover:rotate-x-0 delay-200">
                    <Link
                      href={member.linkedin_url || ""}
                      className="text-gray-400 hover:text-blue-700 transition"
                    >
                      <i className="bx bxl-linkedin text-lg text-white"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMember;
