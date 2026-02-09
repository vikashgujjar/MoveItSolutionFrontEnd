"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

const LeftService = () => {
  const items = [
    {
      id: 1,
      name: "International Courier Services",
      href: "/international-Courier-Services",
    },
    {
      id: 2,
      name: "International Parcel Services",
      href: "/international-Parcel-Services",
    },
    {
      id: 3,
      name: "International Packing Services",
      href: "/international-Packing-Services",
    },
    {
      id: 4,
      name: "International Shifting Services",
      href: "/international-Shifting-Services",
    },

    {
      id: 5,
      name: "International Transport Services",
      href: "/international-Transport-Services",
    },
    { id: 6, name: "Warehouse Services", href: "/Warehouse-Services" },
  ];

  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState("+91");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    countryCode: "+91", // Initial country code set to +91
    userEmail: "info@bluevisionllc.com",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // Format data for React Select
        const options = data
          .filter((country) => country.idd && country.idd.root) // Filter out countries without idd/root
          .map((country) => ({
            value:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""), // Combine root and suffixes
            label: `${country.name.common} (${country.idd.root})`, // Format label with name and code
          }));
        setCountryCodes(options); // Set options to the state
      });
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const url = "https://sendingmail-6znv.onrender.com/sendmail"; // Replace with your actual API endpoint
  //   const data = new URLSearchParams();

  //   // Use the formData values including country code
  //   data.append("S_name", formData.name);
  //   data.append("S_phone", `${formData.countryCode} ${formData.phone}`); // Concatenate country code and phone number
  //   data.append("message", formData.message);
  //   data.append("S_email", formData.email);
  //   data.append("S_services", formData.course);
  //   data.append("userEmailsir", formData.userEmail);

  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded", // URL-encoded form data
  //       },
  //       body: data.toString(), // Send the URL-encoded string
  //     });
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Success:", result);
  //     } else {
  //       console.error("Error:", response.statusText); // Handle error
  //     }
  //   } catch (error) {
  //     console.error("Network error:", error); // Handle network error
  //   }

  //   // Reset form after submission
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     course: "",
  //     message: "",
  //     countryCode: "+91", // Reset country code to default
  //     userEmail: "shivamlugwal01@gmail.com",
  //   });
  // };

  return (
    <>

      {/* Menu Widget */}

      <div className="widget-2 bg-white p-5 text-uppercase">
        <ul className="">
          <div class="bg-[rgb(250,70,18)] polygon-custom px-5 py-3 mb-2">
            <h2 class="text-lg text-white font-bold">Our Services</h2>
          </div>
          {items.map((item) => (
            <>
              <li
                key={item.id}
                className="border-b group  border-dashed w-full border-gray-200 px-5 py-3 font-medium transition duration-500  hover:bg-[#fa4612] hover:text-white"
              >
                <Link
                  href={item.href}
                  className="w-full flex items-center justify-between text-sm"
                >
                  {item.name}
                  <span>
                    <i className="bx bx-check border rounded-full p-2 bg-[#fa4612] text-white text-xl group-hover:text-[#fa4612] group-hover:bg-white" />
                  </span>
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>

      {/* <div className=" bg-[#071c1f] mx-5  p-6 shadow-md relative">
          <h6 className="text-[#2f82ec] text-sm font-bold uppercase">
            // subscribe
          </h6>
          <h4 className=" text-4xl text-white font-bold my-6">
            Get Newsletter
          </h4>
          <form action="#" className="flex">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="flex-grow border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white  px-4 hover:bg-blue-600 transition duration-200"
            >
              <FaSearch />
            </button>
          </form>
          <div className="absolute top-0 right-0 p-4 text-gray-300">
            <FaEnvelopeOpenText className="text-5xl" />
          </div>
        </div> */}

      {/* <div className="border p-7 m-5 relative">
          <h6 className="text-2xl font-bold mb-6">Get in Touch</h6>
          <form
            onSubmit={handleSubmit}
            className="form-fill relative space-y-4"
          >
            <span className="absolute top-3 right-5 text-lg text-gray-700">
              <FaUserAlt />
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full h-12 p-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 block mb-4"
            />
          </form>
          <div className="form-fill relative space-y-4">
            <span className="absolute top-3 right-5 text-lg text-gray-700">
              <FaEnvelope />
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full h-12 p-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 block mb-4"
            />
          </div>
          <div className="form-fill relative mt-4">
            <span className="absolute top-3 right-5 text-lg text-gray-700">
              <FaPhoneAlt />
            </span>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              className="py-3 border h-[48px] w-[60px] border-gray-300 focus:outline-none absolute top-0"
            >
              {countryCodes.map((data, ind) => (
                <option key={ind} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 p-3 pl-[70px] text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 block mb-4"
            />
          </div>
          <div className="form-fill relative space-y-4">
            <span className="absolute top-3 right-5 text-lg text-gray-700">
              <FaPencilAlt />
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 block mb-4 h-40"
            ></textarea>

            <button
              type="submit"
              className="w-full text-lg font-medium text-white bg-[#2f82ec] hover:bg-blue-500  py-3 tracking-wide mt-4"
            >
              Send Now
            </button>
          </div>
        </div> */}
      <div className="custom-shadow m-5 relative">
        <div class="bg-[rgb(250,70,18)] polygon-custom px-5 py-3 mb-2">
          <h2 class="text-lg text-white font-bold">Contact Info</h2>
        </div>
        <ul>
          <li
            className={`border-b group   border-dashed w-full border-gray-200 px-5 py-3 font-medium transition duration-500  hover:bg-[#fa4612] hover:text-white`}
          >
            <Link
              href="tel:+91-7056997000"
              className="w-full flex items-center justify-between text-sm"
            >
              +91-7056997000
              <span>
                <i className="bx bx-phone-call bx-rotate-270 border rounded-full p-2 bg-[#fa4612] text-white text-xl group-hover:text-[#fa4612] group-hover:bg-white   " />
              </span>
            </Link>
          </li>
          <li
            className={`border-b group  border-dashed w-full border-gray-200 px-5 py-3 font-medium transition duration-500  hover:bg-[#fa4612] hover:text-white`}
          >
            <Link
              href="mailto:info@moveitsolution.com"
              className="w-full flex items-center justify-between text-sm"
            >
              [info@moveitsolution.com]
              <span>
                <i className="bx bx-envelope border rounded-full p-2 bg-[#fa4612] text-white text-xl group-hover:text-[#fa4612] group-hover:bg-white" />
              </span>
            </Link>
          </li>
          <li
            className={`border-b group  border-dashed w-full border-gray-200 px-5 py-3 font-medium transition duration-500  hover:bg-[#fa4612] hover:text-white`}
          >
            <Link
              href=""
              className="w-full flex items-center justify-between text-sm"
            >
              Dwarka, Sector 26, New Delhi – 110077
              <span>
                <i className="bx bx-location-plus border rounded-full p-2 bg-[#fa4612] text-white text-xl group-hover:text-[#fa4612] group-hover:bg-white" />
              </span>
            </Link>
          </li>

          <li
            className={`border-b group  border-dashed w-full border-gray-200 px-5 py-3 font-medium transition duration-500  hover:bg-[#fa4612] hover:text-white`}
          >
            <Link
              href="mailto:info@moveitsolution.com"
              className="w-full flex items-center justify-between text-sm"
            >
              9:00 AM – 6:00 PM
              <span>
                <i className="bx bx-time border rounded-full p-2 bg-[#fa4612] text-white text-xl group-hover:text-[#fa4612] group-hover:bg-white" />
              </span>
            </Link>
          </li>
        </ul>
      </div>

    </>
  );
};

export default LeftService;
