"use client";
import React, { useState } from "react";
import "react-international-phone/style.css";
import { PhoneInput } from "react-international-phone";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import Swal from 'sweetalert2';

const ContactForm = ({ pageType }) => {
  const [phone, setPhone] = useState("+91");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    S_name: "",
    S_email: "",
    S_phone: "+91",
    S_services: "",
    message: "",
    userEmailsir: "moveitsolutionpackers@gmail.com"
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const urlEncodedData = new URLSearchParams();

    for (const [key, value] of Object.entries(formData)) {
      urlEncodedData.append(key, value);
    }

    try {
      const response = await fetch(
        "https://sendingmail-6znv.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData.toString(),
        }
      );

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Form submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#4CAF50",
        });
        setFormData({
          S_name: "",
          S_email: "",
          S_phone: "",
          S_services: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to submit the form. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
          confirmButtonColor: "#f44336",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
        confirmButtonColor: "#f44336",
      });
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} data-toggle="validator">
      <div className="px-12 max-sm:px-3 max-md:px-5 pt-10">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 ">
            <input
              id="form_name"
              name="S_name"
              type="text"
              placeholder="Enter your name *"
              required
              value={formData.S_name}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              id="form_email"
              name="S_email"
              type="email"
              placeholder="Enter your email *"
              required
              value={formData.S_email}
              onChange={handleChange}
              className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="custom-contact-main w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <PhoneInput
              defaultCountry="ua"
              value={formData.S_phone}
              onChange={(phone) => setFormData({
                ...formData,
                S_phone: phone,
              })}
              inputClassName="custom-contact"
              dropdownClassName="custom-phone-dropdown"
              searchable
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            {pageType === "career" && (
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <input
                    id="form_resume"
                    type="file"
                    name="resume"
                    placeholder="Upload your resume *"
                    required
                    accept=".pdf,.doc"
                    onChange={handleChange}
                    className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
                  />
                </div>
              </div>
            )}

            {pageType === "contact" && (
              <select
                id="S_services"
                name="S_services"
                value={formData.S_services}
                onChange={handleChange}
                className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
              >
                <option value="">Select Service</option>
                <option value="International Courier Services">
                  International Courier Services
                </option>
                <option value="International Parcel Services">
                  International Parcel Services
                </option>
                <option value="International Packing Services">
                  International Packing Services
                </option>
                <option value="International Shifting Services">
                  International Shifting Services
                </option>
                <option value="International Transport Services">
                  International Transport Services
                </option>
                <option value="Warehouse Services">Warehouse Services</option>
                <option value="Logistics service for commercial goods">
                  Logistics service for commercial goods
                </option>
                <option value="Containers service">Containers service</option>
                <option value="Transporter service">Transporter service</option>
                <option value="Logistics service">Logistics service</option>
                <option value="Parcel services">Parcel services</option>
                <option value="Supply Chain">Supply Chain</option>
                <option value="Heavy Goods Transport">
                  Heavy Goods Transport
                </option>
                <option value="Other">Other</option>
              </select>
            )}
          </div>
        </div>
        <textarea
          id="form_message"
          name="message"

          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          placeholder="Message for me *"
          className="block w-full px-4 py-3 mb-3 leading-tight text-[#6a6a8e] bg-white border-b-2 border-[#e6e6e6] focus:outline-none focus:bg-white focus:border-[#ff1f8e]"
        ></textarea>
      </div>

      <div className="px-12 mt-5">
        <input
          type="checkbox"
          id="customCheck"
          name="check_term"
          checked={formData.check_term}
          onChange={() =>
            setFormData({ ...formData, check_term: !formData.check_term })
          }
        />
        <label className="text-[#6a6a8e] text-base ml-2" htmlFor="customCheck">
          I agree to the{" "}
          <Link href="/terms-conditions" className="text-blue-600">
            Terms &amp; Conditions
          </Link>{" "}
          of Business Name.
        </label>
      </div>
      <div className="fieldsets mt-7 px-10">
        <button
          type="submit"
          disabled={isLoading}
          className="lnk px-8 py-0 w-full text-white text-lg font-normal leading-[56px] bg-[#ff1f8e] rounded-full shadow-[0_10px_15px_0_rgba(233,30,99,0.15)]"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </div>
      <p className="flex gap-4 justify-center text-sm items-center text-[#6a6a8e] mt-10">
        <FaLock />
        We hate spam, and we respect your privacy.
      </p>
    </form>
  );
};

export default ContactForm;
