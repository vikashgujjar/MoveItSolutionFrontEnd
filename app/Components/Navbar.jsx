"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import SidebarModal from "./Sidebar";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  // const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null); // For parent dropdown
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // For child dropdown

  const toggleNavbar = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // const toggleNavbar = (key) => {
  //   setIsOpen((prevState) => (prevState === key ? null : key));

  //   console.log(isOpen)
  // };
  const toggleDropdown = (dropdownType) => {
    setIsSecond(isSecond === dropdownType ? null : dropdownType);
  };

  const [isSticky, setIsSticky] = useState(false);

  const [isSecond, setIsSecond] = useState(false);

  const toggleSubNavbar = (subDropdown) => {
    setOpenSubDropdown(openSubDropdown === subDropdown ? null : subDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isSticky
        ? "main-nav fixed -top-10 left-0 right-0 mx-auto z-[999]  shadow-[0_8px_6px_-6px_rgba(0,0,0,0.4)] animate-fadeInDown transition-all duration-500 w-full "
        : ""
        }`}
    >
      <nav
        className={`absolute  w-full z-10 text-white  ${isSticky ? "bg-white shadow-md lg:bg-[#000231] top-10" : "top-14"
          }`}
      >
        <div className="px-5 bg-white lg:bg-transparent md:px-20">
          <div className="flex justify-between items-center h-16 md:h-24">
            <div className="flex-shrink-0">

              <Link
                href="/"
                className="text-2xl font-bold flex items-center"
                onClick={() => setIsSecond(null)}
              >
                <Image
                  width={700}
                  height={700}
                  src="/Images/logo/Move-it-solution-packers-and-movers.webp"
                  alt="Move It Solution Logo"
                  className="w-40 md:w-[250px] hidden lg:block"
                />
                <Image
                  width={700}
                  height={700}
                  src="/Images/logo/logo-mob.webp"
                  alt="Move It Solution Logo"
                  className="w-44 md:w-[250px] block lg:hidden"
                />
              </Link>
            </div>
            <ul className="hidden md:flex items-center  space-x-4">
              <li>
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-base custom-line relative font-medium "
                >
                  Home
                </Link>
              </li>
              <li className="relative custom-line  inline-block group">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-base  font-medium flex items-center gap-2"
                >
                  Company <FaChevronDown />
                </Link>

                <ul className="dropdown-menu absolute left-full transform -translate-x-1/2 bg-white border-b-2  shadow-md w-[250px] list-none p-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 ease-in-out">
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/why-us-choose">Why Us Choose</Link>
                  </li>
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/team" >Our Professional Team </Link>
                  </li>
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/our-branches">Our Company Branches</Link>
                  </li>
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/faq">Frequently Asked Questions (FAQ)</Link>
                  </li>
                </ul>
              </li>
              <li className="custom-line relative inline-block group">
                <Link
                  href="/services"
                  className="px-3 py-2 rounded-md text-base  font-medium flex items-center gap-2"
                  onMouseEnter={() => setIsOpen(false)}
                >
                  Services <FaChevronDown />
                </Link>

                <ul className="dropdown-menu absolute left-full transform -translate-x-1/2 bg-white border-b-2  shadow-md w-[250px] list-none p-0 z-50 hidden group-hover:block transition-opacity duration-200 ease-in-out">
                  <li
                    className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 "
                    onMouseEnter={() => setIsOpen("packers")}
                  >
                    <button className="flex w-full items-center justify-between">
                      Packers and Movers Services <FaChevronDown />
                    </button>
                    {isOpen === "packers" && (
                      <ul
                        className=" absolute left-full transform translate-x-0 top-4 bg-white border-b-2  shadow-md w-[250px] list-none p-0 z-50 hidden group-hover:block transition-opacity duration-200 ease-in-out"
                        onMouseLeave={() => setIsOpen(false)}
                      >
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/international-Courier-Services">
                            International Courier Services
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/international-Parcel-Services">
                            International Parcel Services
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/international-Packing-Services">
                            International Packing Services
                          </Link>
                        </li>

                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/international-Shifting-Services">
                            International Shifting Services
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/international-Transport-Services">
                            International Transport Services
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/Warehouse-Services">
                            Warehouse Services
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 "
                    onMouseEnter={() => setIsOpen("logistics")}
                  >
                    <button className="flex w-full items-center justify-between">
                      Logistics Services <FaChevronDown />
                    </button>

                    {isOpen === "logistics" && (
                      <ul
                        className=" absolute left-full transform translate-x-0 top-0 bg-white border-b-2  shadow-md w-[280px] list-none p-0 z-50 hidden group-hover:block transition-opacity duration-200 ease-in-outg"
                        onMouseLeave={() => setIsOpen(false)}
                      >
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/logistics-service-for-commercial-goods">
                            Logistics service for commercial goods
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/containers-service">
                            Containers service
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/transporter-service">
                            Transporter service
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/logistics-service">
                            Logistics service
                          </Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/parcel-services">Parcel services</Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/supply-chain">Supply Chain</Link>
                        </li>
                        <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                          <Link href="/heavy-goods-transport">
                            Heavy Goods Transport
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="px-3 py-2 rounded-md custom-line relative text-base font-medium "
                >
                  Blog
                </Link>
              </li>
              <li className=" custom-line relative inline-block group">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                >
                  Features <FaChevronDown />
                </Link>

                <ul className="dropdown-menu absolute left-full transform -translate-x-1/2 bg-white border-b-2  shadow-md w-[250px] list-none p-0 z-50 hidden group-hover:block transition-opacity duration-200 ease-in-out">
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/request-quote">Request A Quote</Link>
                  </li>
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/global-location">Global Location</Link>
                  </li>
                  <li className="text-[14px] w-full text-[#24416b] relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0">
                    <Link href="/gallery">Our Gallery</Link>
                  </li>
                </ul>
              </li>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-base font-medium custom-line relative"
              >
                Contact
              </Link>
              <div className="custom-line relative ">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary "
                >
                  <svg
                    className=""
                    width="28px"
                    height="28px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>menu-dialpad</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none" />
                      </g>
                      <g id="icons_Q2" data-name="icons Q2">
                        <g>
                          <circle cx="24" cy="24" r="5" fill="white" />
                          <circle cx="9" cy="24" r="5" fill="white" />
                          <circle cx="39" cy="24" r="5" fill="white" />
                          <circle cx="24" cy="39" r="5" fill="white" />
                          <circle cx="9" cy="39" r="5" fill="white" />
                          <circle cx="39" cy="39" r="5" fill="white" />
                          <circle cx="24" cy="9" r="5" fill="white" />
                          <circle cx="9" cy="9" r="5" fill="white" />
                          <circle cx="39" cy="9" r="5" fill="white" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>

                <SidebarModal
                  isOpen={isModalOpen}
                  onClose={() => setModalOpen(false)}
                />
              </div>
            </ul>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => toggleDropdown("mob-nav")}
                className="inline-flex items-center justify-center text-4xl rounded-md text-[#fa4612]"
              >
                <IoMenu />
              </button>
            </div>
          </div>
        </div>

        {isSecond === "mob-nav" && (
          <div className="text-[#677294] md:hidden bg-white">
            <div className="sm:px-3 h-[350px] overflow-y-auto">
              <Link
                href="/"
                className="block px-8 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                onClick={() => setIsSecond(null)}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => toggleNavbar("company")}
                  className="flex justify-between px-8 w-full  py-3 border-t border-[#dbeefd]  text-base font-medium text-left"
                >
                  Company{" "}
                  <span
                    className={`text-xl font-semibold ${openDropdown === "company" ? "text-[#fa4612]" : ""
                      }`}
                  >
                    {openDropdown === "company" ? "-" : "+"}{" "}
                  </span>
                </button>

                {openDropdown === "company" && (
                  <div className=" z-10 w-full bg-white mt-1">
                    <Link
                      href="/about"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                      onClick={() => setIsSecond(null)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/why-us-choose"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                      onClick={() => setIsSecond(null)}
                    >
                      Why Us Choose
                    </Link>
                    <Link
                      href="/team"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                      onClick={() => setIsSecond(null)}
                    >
                      Our Professional Team
                    </Link>
                    <Link
                      href="/our-branches"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                      onClick={() => setIsSecond(null)}
                    >
                      Our Company Branches
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                      onClick={() => setIsSecond(null)}
                    >
                      Frequently Asked Questions (FAQ)
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <div className="flex justify-between px-8 w-full py-3 border-t border-[#dbeefd] text-base font-medium text-left">
                  <Link href="/services" onClick={() => setIsSecond(null)}>
                    Services
                  </Link>
                  <span
                    onClick={() => toggleNavbar("Services")}
                    className={`text-xl font-semibold ${openDropdown === "Services" ? "text-[#fa4612]" : ""
                      }`}
                  >
                    {openDropdown === "Services" ? "-" : "+"}{" "}
                  </span>
                </div>
                {openDropdown === "Services" && (
                  <>
                    <div className="relative">
                      <button
                        onClick={() => toggleSubNavbar("mob-packers")}
                        className="flex justify-between pl-12 pr-8 w-full py-3 border-t border-[#dbeefd] text-base font-medium text-left"
                      >
                        Packers and Movers Services{" "}
                        <span
                          className={`text-xl font-semibold ${openSubDropdown === "mob-packers"
                            ? "text-[#fa4612]"
                            : ""
                            }`}
                        >
                          {openSubDropdown === "mob-packers" ? "-" : "+"}{" "}
                        </span>
                      </button>
                      {openSubDropdown === "mob-packers" && (
                        <div className=" z-10 w-full bg-white mt-1">
                          <Link
                            href="/international-Courier-Services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            International Courier Services
                          </Link>
                          <Link
                            href="/international-Parcel-Services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            International Parcel Services
                          </Link>
                          <Link
                            href="/international-Packing-Services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            International Packing Services
                          </Link>
                          <Link
                            href="/international-Shifting-Services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            International Shifting Services
                          </Link>
                          <Link
                            href="/international-Transport-Services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            International Transport Services
                          </Link>
                          <Link
                            href="/Warehouse-Services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Warehouse Services
                          </Link>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => toggleSubNavbar("mob-logistics")}
                        className="flex justify-between pl-12 pr-8 w-full py-3 border-t border-[#dbeefd] text-base font-medium text-left"
                      >
                        Logistics Services{" "}
                        <span
                          className={`text-xl font-semibold ${openSubDropdown === "mob-logistics"
                            ? "text-[#fa4612]"
                            : ""
                            }`}
                        >
                          {openSubDropdown === "mob-logistics" ? "-" : "+"}{" "}
                        </span>
                      </button>
                      {openSubDropdown === "mob-logistics" && (
                        <div className=" z-10 w-full bg-white mt-1">
                          <Link
                            href="/logistics-service-for-commercial-goods"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Logistics service for commercial goods
                          </Link>
                          <Link
                            href="/containers-service"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Containers service
                          </Link>
                          <Link
                            href="/transporter-service"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Transporter service
                          </Link>
                          <Link
                            href="/logistics-service"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Logistics service
                          </Link>
                          <Link
                            href="/parcel-services"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Parcel services
                          </Link>
                          <Link
                            href="/supply-chain"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Supply Chain
                          </Link>
                          <Link
                            href="/heavy-goods-transport"
                            className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                            onClick={() => setIsSecond(null)}
                          >
                            Heavy Goods Transport
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/blog"
                className="block px-8 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                onClick={() => setIsSecond(null)}
              >
                Blog
              </Link>
              <div className="relative">
                <button
                  onClick={() => toggleNavbar("Features")}
                  className="flex justify-between px-8 w-full py-3 border-t border-[#dbeefd]  text-base font-medium text-left"
                >
                  Features
                  <span
                    className={`text-xl font-semibold ${openDropdown === "Features" ? "text-[#fa4612]" : ""
                      }`}
                  >
                    {openDropdown === "Features" ? "-" : "+"}{" "}
                  </span>
                </button>
                {openDropdown === "Features" && (
                  <div className="">
                    <Link
                      href="/request-quote"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium  "
                      onClick={() => setIsSecond(null)}
                    >
                      Request A Quote
                    </Link>
                    <Link
                      href="/global-location"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium  "
                      onClick={() => setIsSecond(null)}
                    >
                      Global Location
                    </Link>
                    <Link
                      href="/gallery"
                      className="block px-12 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                      onClick={() => setIsSecond(null)}
                    >
                      Our Gallery
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="block px-8 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
                onClick={() => setIsSecond(null)}
              >
                Contact
              </Link>
              <Link
                href="https://razorpay.me/@futureittouch"
                target="_blank"
                className="block px-8 w-full py-3 border-t border-[#dbeefd]  text-base font-medium "
              >
                Online Payment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
