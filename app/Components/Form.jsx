"use client";
import { useEffect, useState } from "react";
import { FaTruck } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import TrackingNumberArea from "./Tracking";
import OTPModal from "./Otp";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRef } from "react";


const FROM = ({ head }) => {
  return (<>
    <h1>
      {head}
    </h1>
  </>)
}

const Form = ({ showOnlyLocal = false }) => {
  const [activeTab, setActiveTab] = useState(showOnlyLocal ? "local" : "international");
  const [isOpen, setIsOpen] = useState(null);

  const [selectedOption, setSelectedOption] = useState("Todays");
  const [phone, setPhone] = useState("+91");
  const [formData, setFormData] = useState({
    S_name: "",
    S_phone: phone,
    S_email: "",
    Location_form: "",
    Location_to: "",
    moving_from_country: "",
    moving_to_country: "",
    Location_to_state: "",
    Location_form_state: "",
    moving_form_state: '',
    moving_to_state: '',
    message: '',
    service_type: "",
    userEmailsir: "moveitsolutionpackers@gmail.com"
  });
  const [otpVerified, setOtpVerified] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    console.log('qefrwfrwfdre', formData)
  };

  const options = [
    { value: "Todays", label: "Todays" },
    { value: "Tomorrow", label: "Tomorrow" },
    { value: "Within Next 2-3 Days", label: "Within Next 2-3 Days" },
    { value: "Within A Week", label: "Within A Week" },
    { value: "In Next 2 Week", label: "In Next 2 Week" },
    { value: "Early Next Month", label: "Early Next Month" },
  ];

  const servicesList = [
    "Local Household Shifting",
    "Domestic Shifting Services",
    "Corporate Relocation",
    "Car & Bike Transportation",
    "Warehouse Services",
    "International Transportation",
  ];


  const toggleDropdown = (dropdownType) => {
    setIsOpen(isOpen == dropdownType ? null : dropdownType);
    setFormData({ ...formData, service_type: dropdownType })
    console.log(formData, "this is cl type");
  };

  const [otpPopup, setOtpPopup] = useState(false)
    ;
  const selectOption = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  const filterCountries = () => {


    return countriesData.filter((option) => {
      if (!localDomestic.MovingFromCountry) return true;
      return option.name.common
        .toLowerCase()
        .includes(localDomestic.MovingFromCountry.toLowerCase());
    });
  };

  const handleInputChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      element.nextSibling?.focus();
    }
  };

  const [countriesData, setCountriesData] = useState([]);
  // const MovingFromCountryRef = useRef();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountriesData(response.data);
      if (data && data.length > 0) {
        setLocalDomestic((prevState) => ({
          ...prevState,
          MovingFromCountry: data[0]?.name?.common || "",
        }));
      }
    } catch (error) {
      console.error("Error fetching countries data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [localDomestic, setLocalDomestic] = useState({
    MovingFromCountry: "",
    MovingToCountry: "",
    DeliveryType: "Road Freight",
    TentativeSchedule: "Todays",
    DeliveryMethod: showOnlyLocal ? "Local Household Shifting" : "Road Freight",
  });
  const InputValueChangeHanler = (e) => {
    const { name, value } = e.target;
    setLocalDomestic((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const localDomesticHandler = (name, val) => {
    const updatedFormData = { ...formData, [name]: val };

    // Sync service_type with DeliveryMethod or DeliveryType
    if (name === "DeliveryMethod" || name === "DeliveryType") {
      updatedFormData.service_type = val;
    }

    setFormData(updatedFormData);
    console.log("ILY", name, val)
    setLocalDomestic((preVal) => {
      return { ...preVal, [name]: val };
    });

    setIsOpen(false);
  };

  const MovingFromCountryRef = useRef(null);
  const MovingToCountryRef = useRef(null);
  const DeliveryTypeRef = useRef(null);
  const TentativeScheduleRef = useRef(null);
  const DeliveryMethodRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !(
          MovingFromCountryRef.current?.contains(event.target) ||
          MovingToCountryRef.current?.contains(event.target) ||
          DeliveryTypeRef.current?.contains(event.target) ||
          TentativeScheduleRef.current?.contains(event.target) ||
          DeliveryMethodRef.current?.contains(event.target)
        )
      ) {
        setIsOpen(null); // Close all dropdowns
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);



  const resendOtp = async () => {
    setIsResending(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "c",
        { phone: number }
      );

      if (response.data.success) {
        setSuccessMessage("OTP has been resent successfully!");
        // SweetAlert for resend success
        Swal.fire({
          icon: "success",
          title: "OTP Resent",
          text: "A new OTP has been sent to your phone number.",
        });
      } else {
        setErrorMessage(
          response.data.message || "Failed to resend OTP. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message ||
        "Failed to resend OTP. Please check your network and try again."
      );
    } finally {
      setIsResending(false); // Re-enable the Resend button
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    try {

      const otpResponse = await axios.post(
        "https://otp-verify-service.onrender.com/send-otp",
        { phone: `${phone}` }
      );

      if (!otpResponse.data.success) {
        Swal.fire({
          icon: "error",
          title: "Failed to Send OTP",
          text: "Unable to send OTP. Please try again.",
        });
        setLoading(false)
        return;
      }

      setFormData({ ...formData, S_phone: phone })

      setLoading(false)

      Swal.fire({
        icon: "success",
        title: "OTP Sent",
        text: "An OTP has been sent to your phone number.",
      });

      setOtpPopup(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send OTP. Please try again later.",
      });
    }
  };

  const verifyAndSubmit = async () => {



    // console.log(otp)

    const otpAsString = otp.join("");
    // console.log('dqwedsqwdqedsed312e123e123ew2',otpAsString);



    // // Step 2: Verify OTP
    const verifyResponse = await axios.post(
      "https://otp-verify-service.onrender.com/verify-otp",
      { phone: `${phone}`, code: otpAsString }
    );

    if (!verifyResponse.data.success) {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "The OTP you entered is incorrect. Please try again.",
      });
      return;
    }



    setOtpPopup(false);

    // Step 3: Submit Form Data
    const data = new URLSearchParams();
    for (const key in formData) {
      data.append(key, formData[key]);
    }



    console.log("aferwfewr")

    const submitResponse = await fetch(
      "https://sendingmail-6znv.onrender.com/sendmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }
    );


    Swal.fire({
      icon: "success",
      title: "Thank You",
      text: "Thank you For Contact Us.",
    });


    window.location.reload();




    setOtpPopup(false); // Close OTP popup



  };

  return (
    <>
      <div className={`form-bg ${showOnlyLocal ? "!py-0" : ""}`}>
        <div className="w-[97%] md:w-[85%] mx-auto bg-white shadow-md rounded-lg">
          {!showOnlyLocal && (
            <div className="flex justify-between md:justify-start border-b bg-[#fcfcfc]">
              <button
                className={`flex items-center gap-2 px-3 md:px-5 py-5 text-xs md:text-lg text-nowrap  font-semibold ${activeTab === "international"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-600"
                  }`}
                onClick={() => setActiveTab("international")}
              >
                <GiCommercialAirplane className="text-2xl" />
                International Shifting
              </button>
              <button
                className={`flex items-center gap-2 px-3 md:px-5 py-5 text-xs md:text-lg text-nowrap  font-semibold ${activeTab === "local"
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-600"
                  }`}
                onClick={() => setActiveTab("local")}
              >
                <FaTruck className="text-2xl" /> Local & Domestic
              </button>
            </div>
          )}
          <div className={`bloxk md:flex  gap-3 px-5 md:px-14 ${showOnlyLocal ? "md:px-5 py-5" : "md:px-14 py-10"}`}>
            <div className={`w-full ${showOnlyLocal ? "md:w-full" : "md:w-3/4"}`}>
              {showOnlyLocal && (
                <h2 className="text-2xl text-center font-bold mb-3">Start Your Hassle-Free Move</h2>
              )}
              <div className="space-y-6">
                <div>
                  {!showOnlyLocal && (
                    <h2 className="text-md font-bold mb-2">Personal Data</h2>
                  )
                  }
                  <div className={`grid ${showOnlyLocal ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-5`}>
                    <input
                      type="text"
                      placeholder="Your Name*"
                      name="S_name"
                      value={formData.S_name}
                      onChange={handleChange}
                      className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                    />
                    {!showOnlyLocal && (
                      <input
                        type="email"
                        placeholder="Your Email*"
                        name="S_email"

                        value={formData.S_email}
                        onChange={handleChange}
                        className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                      />
                    )}
                    <div className="home-contact">
                      <PhoneInput
                        defaultCountry="ua"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputClassName="custom-phone-input"
                        dropdownClassName="custom-phone-dropdown"
                        searchable // Enable searchable feature
                      />
                    </div>
                  </div>
                </div>


                {/* <FROM head={"Hello"}/> */}

                <div>
                  {activeTab === "local" ? (
                    <>
                      {!showOnlyLocal && (
                        <h2 className="text-md font-bold mb-2">
                          Tentative Schedule
                        </h2>
                      )}
                      <div className={`grid ${showOnlyLocal ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-5`}>
                        {!showOnlyLocal && (
                          <div className="relative" ref={TentativeScheduleRef}>
                            <button
                              type="button"
                              onClick={() => toggleDropdown("schedule")}
                              className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none flex justify-between items-center"
                            >
                              <span className="current">
                                {localDomestic.TentativeSchedule}
                              </span>
                              <svg
                                className={`w-4 h-4 transform transition-transform duration-200 ${isOpen === "schedule" ? "rotate-180" : ""
                                  }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                ></path>
                              </svg>
                            </button>
                            {isOpen === "schedule" && (
                              <ul className="absolute z-10 w-full bg-white border border-[#e6e6e6] rounded overflow-hidden mt-1 shadow-lg">
                                {options.map((option) => (
                                  <li
                                    key={option.value}
                                    onClick={() =>
                                      localDomesticHandler(
                                        "TentativeSchedule",
                                        option.label
                                      )
                                    }
                                    className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.TentativeSchedule ===
                                      option.label
                                      ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                      : "font-normal"
                                      }`}
                                  >
                                    {option.label}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}

                        <input
                          type="text"
                          placeholder="From City"
                          name="Location_form"
                          value={formData.Location_form}
                          onChange={handleChange}
                          className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="To City"
                          name="Location_to"
                          value={formData.Location_to}
                          onChange={handleChange}
                          className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-md font-bold mb-2 ">
                        Moving From Country
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="relative" ref={MovingFromCountryRef}>
                          <div
                            // type="button"
                            onClick={() => toggleDropdown("from")}
                            className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full  focus:outline-none flex justify-between items-center"
                          >
                            {/* <span className="current">{localDomestic.MovingFromCountry}</span >  */}
                            <input
                              type="text"
                              name="moving_from_country"
                              placeholder="Moving from Country"
                              onChange={handleChange}
                              value={formData.moving_from_country}
                              className="border-none outline-none  w-full h-full"
                            />
                            <svg
                              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen === "from" ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>

                          {isOpen === "from" && (
                            <ul className="absolute h-60 overflow-y-auto z-10 w-full bg-white border border-[#e6e6e6] rounded overflow-hidden mt-1 shadow-lg">
                              {filterCountries().map((option) => (
                                <li
                                  key={option.value}
                                  onClick={() =>
                                    localDomesticHandler(
                                      "moving_from_country",
                                      option.name.common
                                    )
                                  }
                                  className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.MovingFromCountry ===
                                    option.name.common
                                    ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                    : "font-normal"
                                    }`}
                                >
                                  {console.log('rff3r4r43r33f', option.name.common)}
                                  {option.name.common}
                                </li>
                              ))}
                            </ul>
                          )}

                        </div>
                        <input
                          type="text"
                          placeholder="Which State"
                          name="Location_form_state"
                          onChange={handleChange}
                          value={formData.Location_form_state}
                          className="border  border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Which City"
                          name="Location_to_state"
                          onChange={handleChange}
                          value={formData.Location_to_state}
                          className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />
                      </div>

                      <h2 className="text-md font-bold mb-2 mt-6">
                        Moving To Country
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="relative" ref={MovingToCountryRef}>
                          <button
                            type="button"
                            onClick={() => toggleDropdown("to")}
                            className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full  focus:outline-none flex justify-between items-center"
                          >
                            <input
                              type="text"
                              placeholder="Moving To Country"
                              name="moving_to_country"
                              onChange={handleChange}
                              value={formData.moving_to_country}
                              className="border-none h-full w-full  outline-none"
                            />
                            <svg
                              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen === "to" ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </button>

                          {isOpen === "to" && (
                            <ul className="absolute h-60 overflow-y-auto z-10 w-full bg-white border border-[#e6e6e6] rounded overflow-hidden mt-1 shadow-lg">
                              {countriesData
                                .filter((option) =>
                                  localDomestic.MovingToCountry
                                    ? option.name.common
                                      .toLowerCase()
                                      .includes(
                                        localDomestic.MovingToCountry.toLowerCase()
                                      )
                                    : option
                                )
                                .map((option) => (
                                  <li
                                    key={option.value}
                                    onClick={() =>
                                      localDomesticHandler(
                                        "moving_to_country",
                                        option.name.common
                                      )
                                    }
                                    className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.MovingToCountry ===
                                      option.name.common
                                      ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                      : "font-normal"
                                      }`}
                                  >
                                    {option.name.common}
                                  </li>
                                ))}
                            </ul>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="Which State"
                          name="moving_to_state"
                          onChange={handleChange}
                          value={formData.moving_to_state}
                          className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />

                        <input
                          type="text"
                          placeholder="Which City"
                          name="moving_form_state"
                          onChange={handleChange}
                          value={formData.moving_form_state}
                          className="border border-[#e6e6e6] text-[15px] text-[#24416b] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </>
                  )}
                </div>

                {activeTab === "local" ? (
                  <>
                    <div className={`grid ${showOnlyLocal ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-5`}>
                      {showOnlyLocal && (
                        <div className="relative" ref={TentativeScheduleRef}>
                          <h2 className="text-md font-bold mb-2">
                            Tentative Schedule
                          </h2>
                          <button
                            type="button"
                            onClick={() => toggleDropdown("schedule")}
                            className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none flex justify-between items-center"
                          >
                            <span className="current">
                              {localDomestic.TentativeSchedule}
                            </span>
                            <svg
                              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen === "schedule" ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </button>
                          {isOpen === "schedule" && (
                            <ul className="absolute z-10 w-full bg-white border border-[#e6e6e6] rounded overflow-hidden mb-1 bottom-[50%] max-h-[220px] overflow-y-auto shadow-lg">
                              {options.map((option) => (
                                <li
                                  key={option.value}
                                  onClick={() =>
                                    localDomesticHandler(
                                      "TentativeSchedule",
                                      option.label
                                    )
                                  }
                                  className={`cursor-pointer !text-sm flex items-center leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.TentativeSchedule ===
                                    option.label
                                    ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                    : "font-normal"
                                    }`}
                                >
                                  {option.label}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                      {showOnlyLocal && (
                        <div
                          className="relative"
                          ref={DeliveryMethodRef}
                        >
                          <h2 className="text-md font-bold mb-2">
                            Select Services
                          </h2>
                          <button
                            type="button"
                            onClick={() => toggleDropdown("method")}
                            className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none flex justify-between items-center"
                          >
                            <span className="current">
                              {localDomestic.DeliveryMethod}
                            </span>
                            <svg
                              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen === "method" ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </button>

                          {isOpen === "method" && (
                            <ul className="absolute z-10 w-full bg-white border border-[#e6e6e6] rounded mb-1 bottom-[50%] max-h-[220px] overflow-y-auto shadow-lg">
                              {servicesList.map((service) => (
                                <li
                                  key={service}
                                  onClick={() =>
                                    localDomesticHandler("DeliveryMethod", service)
                                  }
                                  className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 flex items-center !text-sm ${localDomestic.DeliveryMethod === service
                                    ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                    : "font-normal"
                                    }`}
                                >
                                  {service}
                                </li>
                              ))}
                            </ul>
                          )}

                        </div>
                      )}
                    </div>
                    <div className="block md:flex gap-5">
                      {!showOnlyLocal && (
                        <div
                          className="relative w-full md:w-[33%]"
                          ref={DeliveryMethodRef}
                        >
                          <h2 className="text-md font-bold mb-2">
                            Delivery Method
                          </h2>
                          <button
                            type="button"
                            onClick={() => toggleDropdown("method")}
                            className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none flex justify-between items-center"
                          >
                            <span className="current">
                              {localDomestic.DeliveryMethod}
                            </span>
                            <svg
                              className={`w-4 h-4 transform transition-transform duration-200 ${isOpen === "method" ? "rotate-180" : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </button>

                          {isOpen === "method" && (
                            <ul className="absolute z-10 w-full bg-white border border-[#e6e6e6] rounded overflow-hidden mt-1 shadow-lg">
                              <li
                                onClick={() =>
                                  localDomesticHandler("DeliveryMethod", "Road Freight")
                                }
                                className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.DeliveryMethod === "Road Freight"
                                  ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                  : "font-normal"
                                  }`}
                              >
                                Road Freight
                              </li>
                              <li
                                onClick={() =>
                                  localDomesticHandler(
                                    "DeliveryMethod",
                                    "Express Delivery"
                                  )
                                }
                                className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.DeliveryMethod ===
                                  "Express Delivery"
                                  ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                  : "font-normal"
                                  }`}
                              >
                                Express Delivery
                              </li>
                              <li
                                onClick={() =>
                                  localDomesticHandler("DeliveryMethod", "Local Shifting")
                                }
                                className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.DeliveryMethod === "Local Shifting"
                                  ? "bg-[#24416b] text-[#fa4612] font-semibold"
                                  : "font-normal"
                                  }`}
                              >
                                Local Shifting
                              </li>
                            </ul>
                          )}
                        </div>
                      )
                      }
                      <div className={`mt-5 md:mt-0 w-full ${showOnlyLocal ? "md:w-full" : "md:w-[68%]"}`}>
                        {!showOnlyLocal && (
                          <h2 className="text-md font-bold mb-2">
                            Write Your Message
                          </h2>
                        )}
                        <textarea
                          placeholder="You can enter item list details."
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="border border-[#e6e6e6] text-[15px] text-[#24416b] p-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="block md:flex gap-5">
                    <div
                      className="relative w-full md:w-[33%]"
                      ref={DeliveryTypeRef}
                    >

                      <h2 className="text-md font-bold mb-2">Delivery type</h2>
                      <button
                        type="button"
                        onClick={() => toggleDropdown("type")}
                        className="border-b-2 border-[#e6e6e6] text-[15px] text-[#495057] px-3 h-[50px] w-full focus:border-orange-500 focus:outline-none flex justify-between items-center"
                      >
                        <span className="current">
                          {localDomestic.DeliveryType}
                        </span>
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen == "type" ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      {isOpen == "type" && (
                        <ul className="absolute z-10 w-full bg-white border border-[#e6e6e6] rounded overflow-hidden mt-1 shadow-lg">
                          <li
                            onClick={() =>
                              localDomesticHandler(
                                "DeliveryType",
                                "Road Freight"
                              )
                            }
                            className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.DeliveryMethod === "Road Freight"
                              ? "bg-[#24416b] text-[#fa4612] font-semibold"
                              : "font-normal"
                              }`}
                          >
                            Road Freight
                          </li>
                          <li
                            onClick={() =>
                              localDomesticHandler(
                                "DeliveryType",
                                "Express Delivery"
                              )
                            }
                            className={`cursor-pointer leading-[40px] list-none min-h-[40px] outline-none pl-[18px] pr-[29px] text-left transition-all duration-200 ${localDomestic.DeliveryMethod ===
                              "Express Delivery"
                              ? "bg-[#24416b] text-[#fa4612] font-semibold"
                              : "font-normal"
                              }`}
                          >
                            Express Delivery
                          </li>
                        </ul>
                      )}
                    </div>

                    <div className="mt-5 md:mt-0 w-full md:w-[68%]">
                      <h2 className="text-md font-bold mb-2">
                        Write Your Message
                      </h2>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="You can enter item list details."
                        className="border border-[#e6e6e6] text-[15px] text-[#24416b] p-3 h-[50px] w-full focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div>
                <button

                  onClick={handleSubmit}
                  className="w-full default-btn py-2 px-6 mt-5 rounded transition duration-300"

                >
                  {console.log('ILY', loading)}
                  <span>
                    {
                      loading ? "Loading..." : "Request A Quote"
                    }

                  </span>
                </button>

                {otpPopup ? (
                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                      id="otp-modal"
                      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="bg-white rounded-lg shadow-md w-full max-w-md">
                        <div className="relative p-6">
                          <button
                            onClick={() => setOtpPopup(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            aria-label="Close"
                          >
                            ✖
                          </button>
                          <div className="py-5 px-12">
                            <h2 className="text-center font-bold text-2xl my-4">
                              Validate OTP
                            </h2>

                            <p className="text-gray-500 text-center my-4">
                              Enter the verification code we sent to{" "}
                              <span className="text-black text-lg">

                              </span>
                            </p>

                            <div className="flex justify-center space-x-2 mb-4">
                              {otp.map((value, index) => (
                                <input
                                  key={index}
                                  type="text"
                                  className="w-12 h-12 text-center text-xl border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  maxLength="1"
                                  value={value}
                                  onChange={(e) =>
                                    handleInputChange(e.target, index)
                                  }
                                  autoComplete="off"
                                />
                              ))}
                            </div>
                            <button

                              onClick={verifyAndSubmit}
                              className={`w-full py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 ${isVerifying &&
                                "opacity-50 cursor-not-allowed"
                                }`}
                            >
                              {isVerifying
                                ? "Verifying OTP..."
                                : "Verify OTP"}
                            </button>

                            <div className="text-sm text-center mt-4">
                              Didn't get the code?{" "}
                              <button
                                onClick={resendOtp} // Using onClick here
                                disabled={isResending} // Disable the button while it's resending
                                className="text-blue-600 hover:underline"
                              >
                                {isResending ? "Resending..." : "Resend it"}
                              </button>
                            </div>
                            <hr className="my-4 w-1/2 mx-auto border-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : ''}
              </div>
            </div>
            {!showOnlyLocal && (
              <div className="w-full md:w-[33%]">
                <Image
                  width={700}
                  height={700}
                  src="/Images/img/International-Movers-and-Packers.webp"
                  className="object-cover mt-5 md:mt-0 ml-0 md:ml-5 h-80 md:h-full w-full"
                  alt="International Courior Movers and Packers "
                />
              </div>
            )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
