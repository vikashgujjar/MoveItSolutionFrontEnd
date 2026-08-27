"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getFormSettings } from "@/app/lib/formSettings";
import { pathnameToSlug } from "@/app/lib/pageSlug";
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

const Form = ({ showOnlyLocal = false, notifyEmail }) => {
  const router = useRouter();
  const pathname = usePathname();
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
    userEmailsir: notifyEmail || "moveitsolutionpackers@gmail.com,packersmoversspeedking@gmail.com"
  });

  useEffect(() => {
    // An explicit notifyEmail prop (e.g. Bangalore's LocationBanner override)
    // always wins; otherwise resolve the recipient for this page from the
    // admin-managed form settings, falling back to today's hardcoded default.
    if (notifyEmail) return;
    let cancelled = false;
    const slug = pathnameToSlug(pathname);
    getFormSettings(slug).then((data) => {
      if (!cancelled && data?.recipient_email) {
        setFormData((prev) => ({ ...prev, userEmailsir: data.recipient_email }));
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, notifyEmail]);

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

  const filterCountries = (searchValue = "") => {
    if (!searchValue) return countriesData;
    return countriesData.filter((option) =>
      option.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
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

  const COUNTRIES = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
    "Bahamas","Bahrain","Bangladesh","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina",
    "Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde",
    "Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba",
    "Cyprus","Czech Republic","Denmark","Djibouti","Dominican Republic","DR Congo","Ecuador","Egypt","El Salvador",
    "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia",
    "Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras",
    "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan",
    "Kazakhstan","Kenya","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
    "Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania",
    "Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
    "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
    "Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
    "Qatar","Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia",
    "Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
    "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo",
    "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Uganda","Ukraine","United Arab Emirates",
    "United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
  ].map((name) => ({ name: { common: name } }));

  const [countriesData] = useState(COUNTRIES);

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

    setLoading(true);
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
        setLoading(false);
        return;
      }

      setFormData({ ...formData, S_phone: phone });
      setLoading(false);

      // Swal.fire({
      //   icon: "success",
      //   title: "OTP Sent",
      //   text: "An OTP has been sent to your phone number.",
      // });

      setOtpPopup(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send OTP. Please try again later.",
      });
    }
  };

  const verifyAndSubmit = async () => {
    const otpAsString = otp.join("");

    try {
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

      const payload = {
        company: "Move It Solution",
        company_name: "Move It Solution",
        name: formData.S_name,
        phone: formData.S_phone,
        email: formData.S_email,
        serviceType: formData.service_type || formData.DeliveryMethod || formData.DeliveryType,
        message: formData.message,
        "Moving From City": formData.Location_form,
        "Moving From State": formData.Location_form_state,
        "Moving To City": formData.Location_to,
        "Moving To State": formData.Location_to_state,
        "Moving From Country": formData.moving_from_country,
        "Moving From State (Intl)": formData.moving_form_state,
        "Moving To Country": formData.moving_to_country,
        "Moving To State (Intl)": formData.moving_to_state,
        "Delivery Type": formData.DeliveryType,
        "Service Type": formData.DeliveryMethod,
        "Schedule": formData.TentativeSchedule,
        mail_to: formData.userEmailsir,
      };

      const submitResponse = await fetch(
        "https://mail.futuretouch.org/api/send-message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!submitResponse.ok) {
        throw new Error(`Mail service error: ${submitResponse.status}`);
      }

      setOtpPopup(false);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error in verifyAndSubmit:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  const inputCls = "w-full h-[38px] px-3 text-[13px] text-[#24416b] bg-white border-2 border-[#e8edf5] rounded-lg focus:border-[#fa4612] focus:outline-none transition-colors duration-200 placeholder:text-gray-400";
  const dropdownTriggerCls = "w-full h-[38px] px-3 text-[13px] text-[#24416b] bg-white border-2 border-[#e8edf5] rounded-lg focus:border-[#fa4612] focus:outline-none transition-colors duration-200 flex justify-between items-center";
  const dropdownListCls = "absolute z-20 w-full bg-white border border-[#e8edf5] rounded-lg mt-1 shadow-xl overflow-hidden";
  const dropdownItemCls = (active) => `cursor-pointer px-3 py-1.5 text-sm transition-all duration-150 ${active ? "bg-[#24416b] text-[#fa4612] font-semibold" : "hover:bg-orange-50 hover:text-[#fa4612]"}`;
  const sectionLabel = (text) => (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="w-1 h-3.5 rounded-full bg-[#fa4612] inline-block" />
      <span className="text-xs font-bold text-[#24416b] uppercase tracking-wide">{text}</span>
    </div>
  );
  const chevron = (open) => (
    <svg className={`w-4 h-4 shrink-0 transition-transform duration-200 text-[#fa4612] ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <>
      <div className={`form-bg ${showOnlyLocal ? "!py-0" : ""}`}>
        <div className="w-[97%] md:w-[88%] mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">

          {/* Tab Bar */}
          {!showOnlyLocal && (
            <div className="flex bg-[#24416b]">
              <button
                onClick={() => setActiveTab("international")}
                className={`flex items-center gap-2 px-4 md:px-7 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === "international"
                  ? "bg-[#fa4612] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"}`}
              >
                <GiCommercialAirplane className="text-xl" />
                International Shifting
              </button>
              <button
                onClick={() => setActiveTab("local")}
                className={`flex items-center gap-2 px-4 md:px-7 py-3 text-sm font-semibold transition-all duration-200 ${activeTab === "local"
                  ? "bg-[#fa4612] text-white shadow-lg"
                  : "text-white/70 hover:text-white hover:bg-white/10"}`}
              >
                <FaTruck className="text-lg" />
                Local & Domestic
              </button>
            </div>
          )}

          <div className={`flex flex-col md:flex-row gap-0 ${showOnlyLocal ? "" : ""}`}>
            {/* Form Body */}
            <div className={`w-full ${showOnlyLocal ? "" : "md:w-3/4"} p-3 md:p-5`}>
              {showOnlyLocal && (
                <div className="text-center mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-[#24416b]">Start Your Hassle-Free Move</h2>
                  <p className="text-gray-500 text-xs mt-1">Fill the form and we'll get back to you within minutes</p>
                </div>
              )}

              <div className="space-y-3">
                {/* Personal Info */}
                <div>
                  {sectionLabel("Personal Information")}
                  <div className={`grid ${showOnlyLocal ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-4`}>
                    <input type="text" placeholder="Your Full Name *" name="S_name" value={formData.S_name} onChange={handleChange} className={inputCls} />
                    {!showOnlyLocal && (
                      <input type="email" placeholder="Your Email Address *" name="S_email" value={formData.S_email} onChange={handleChange} className={inputCls} />
                    )}
                    <div className="home-contact">
                      <PhoneInput defaultCountry="in" value={phone} onChange={(p) => setPhone(p)} inputClassName="custom-phone-input" dropdownClassName="custom-phone-dropdown" searchable />
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div>
                  {activeTab === "local" ? (
                    <>
                      {sectionLabel("Moving Details")}
                      <div className={`grid ${showOnlyLocal ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-4`}>
                        {!showOnlyLocal && (
                          <div className="relative" ref={TentativeScheduleRef}>
                            <button type="button" onClick={() => toggleDropdown("schedule")} className={dropdownTriggerCls}>
                              <span>{localDomestic.TentativeSchedule}</span>
                              {chevron(isOpen === "schedule")}
                            </button>
                            {isOpen === "schedule" && (
                              <ul className={dropdownListCls}>
                                {options.map((o) => (
                                  <li key={o.value} onClick={() => localDomesticHandler("TentativeSchedule", o.label)} className={dropdownItemCls(localDomestic.TentativeSchedule === o.label)}>{o.label}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                        <input type="text" placeholder="From City" name="Location_form" value={formData.Location_form} onChange={handleChange} className={inputCls} />
                        <input type="text" placeholder="To City" name="Location_to" value={formData.Location_to} onChange={handleChange} className={inputCls} />
                      </div>
                    </>
                  ) : (
                    <>
                      {sectionLabel("Moving From")}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="relative" ref={MovingFromCountryRef}>
                          <div onClick={() => toggleDropdown("from")} className={dropdownTriggerCls + " cursor-text"}>
                            <input type="text" name="moving_from_country" placeholder="Country" onChange={handleChange} value={formData.moving_from_country} className="border-none outline-none w-full h-full bg-transparent text-[#24416b] placeholder:text-gray-400" />
                            {chevron(isOpen === "from")}
                          </div>
                          {isOpen === "from" && (
                            <ul className={dropdownListCls + " h-52 overflow-y-auto"}>
                              {filterCountries(formData.moving_from_country).map((opt) => (
                                <li key={opt.name.common} onClick={() => localDomesticHandler("moving_from_country", opt.name.common)} className={dropdownItemCls(formData.moving_from_country === opt.name.common)}>{opt.name.common}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <input type="text" placeholder="State" name="Location_form_state" onChange={handleChange} value={formData.Location_form_state} className={inputCls} />
                        <input type="text" placeholder="City" name="Location_to_state" onChange={handleChange} value={formData.Location_to_state} className={inputCls} />
                      </div>

                      {sectionLabel("Moving To")}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative" ref={MovingToCountryRef}>
                          <button type="button" onClick={() => toggleDropdown("to")} className={dropdownTriggerCls}>
                            <input type="text" placeholder="Country" name="moving_to_country" onChange={handleChange} value={formData.moving_to_country} className="border-none outline-none w-full h-full bg-transparent text-[#24416b] placeholder:text-gray-400" />
                            {chevron(isOpen === "to")}
                          </button>
                          {isOpen === "to" && (
                            <ul className={dropdownListCls + " h-52 overflow-y-auto"}>
                              {filterCountries(formData.moving_to_country).map((opt) => (
                                <li key={opt.name.common} onClick={() => localDomesticHandler("moving_to_country", opt.name.common)} className={dropdownItemCls(formData.moving_to_country === opt.name.common)}>{opt.name.common}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <input type="text" placeholder="State" name="moving_to_state" onChange={handleChange} value={formData.moving_to_state} className={inputCls} />
                        <input type="text" placeholder="City" name="moving_form_state" onChange={handleChange} value={formData.moving_form_state} className={inputCls} />
                      </div>
                    </>
                  )}
                </div>

                {/* Service & Message */}
                {activeTab === "local" ? (
                  <>
                    {showOnlyLocal && (
                      <div>
                        {sectionLabel("Service & Schedule")}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="relative" ref={TentativeScheduleRef}>
                            <button type="button" onClick={() => toggleDropdown("schedule")} className={dropdownTriggerCls}>
                              <span>{localDomestic.TentativeSchedule}</span>
                              {chevron(isOpen === "schedule")}
                            </button>
                            {isOpen === "schedule" && (
                              <ul className={dropdownListCls + " max-h-52 overflow-y-auto bottom-[110%]"}>
                                {options.map((o) => (
                                  <li key={o.value} onClick={() => localDomesticHandler("TentativeSchedule", o.label)} className={dropdownItemCls(localDomestic.TentativeSchedule === o.label)}>{o.label}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <div className="relative" ref={DeliveryMethodRef}>
                            <button type="button" onClick={() => toggleDropdown("method")} className={dropdownTriggerCls}>
                              <span>{localDomestic.DeliveryMethod}</span>
                              {chevron(isOpen === "method")}
                            </button>
                            {isOpen === "method" && (
                              <ul className={dropdownListCls + " max-h-52 overflow-y-auto bottom-[110%]"}>
                                {servicesList.map((s) => (
                                  <li key={s} onClick={() => localDomesticHandler("DeliveryMethod", s)} className={dropdownItemCls(localDomestic.DeliveryMethod === s)}>{s}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                    {!showOnlyLocal && (
                      <div>
                        {sectionLabel("Service & Message")}
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="relative w-full md:w-[33%]" ref={DeliveryMethodRef}>
                            <button type="button" onClick={() => toggleDropdown("method")} className={dropdownTriggerCls}>
                              <span>{localDomestic.DeliveryMethod}</span>
                              {chevron(isOpen === "method")}
                            </button>
                            {isOpen === "method" && (
                              <ul className={dropdownListCls}>
                                {["Road Freight", "Express Delivery", "Local Shifting"].map((s) => (
                                  <li key={s} onClick={() => localDomesticHandler("DeliveryMethod", s)} className={dropdownItemCls(localDomestic.DeliveryMethod === s)}>{s}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <textarea placeholder="Tell us about your items, special requirements…" name="message" value={formData.message} onChange={handleChange} className="w-full md:w-[67%] px-3 py-2 text-[13px] text-[#24416b] bg-white border-2 border-[#e8edf5] rounded-lg focus:border-[#fa4612] focus:outline-none transition-colors resize-none h-[38px]" />
                        </div>
                      </div>
                    )}
                    {showOnlyLocal && (
                      <div>
                        {sectionLabel("Your Message")}
                        <textarea placeholder="Tell us about your items, special requirements…" name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 text-[13px] text-[#24416b] bg-white border-2 border-[#e8edf5] rounded-lg focus:border-[#fa4612] focus:outline-none transition-colors resize-none h-[38px]" />
                      </div>
                    )}
                  </>
                ) : (
                  <div>
                    {sectionLabel("Delivery & Message")}
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-full md:w-[33%]" ref={DeliveryTypeRef}>
                        <button type="button" onClick={() => toggleDropdown("type")} className={dropdownTriggerCls}>
                          <span>{localDomestic.DeliveryType}</span>
                          {chevron(isOpen === "type")}
                        </button>
                        {isOpen === "type" && (
                          <ul className={dropdownListCls}>
                            {["Road Freight", "Express Delivery"].map((s) => (
                              <li key={s} onClick={() => localDomesticHandler("DeliveryType", s)} className={dropdownItemCls(localDomestic.DeliveryType === s)}>{s}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <textarea placeholder="Tell us about your items, special requirements…" name="message" value={formData.message} onChange={handleChange} className="w-full md:w-[67%] px-3 py-2 text-[13px] text-[#24416b] bg-white border-2 border-[#e8edf5] rounded-lg focus:border-[#fa4612] focus:outline-none transition-colors resize-none h-[38px]" />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-2.5 px-6 mt-1 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-[1.01]"
                  style={{ background: "linear-gradient(135deg, #fa4612 0%, #c73000 100%)" }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                      Sending OTP…
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      🚚 Request A Free Quote
                    </span>
                  )}
                </button>
              </div>

              {/* OTP Modal */}
              {otpPopup && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-auto overflow-hidden">

                    {/* Header */}
                    <div className="relative px-6 pt-8 pb-5 text-center" style={{ background: "linear-gradient(135deg,#24416b,#1a2f50)" }}>
                      <button
                        onClick={() => setOtpPopup(false)}
                        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white text-xs transition-all"
                      >✕</button>

                      {/* Shield icon */}
                      <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg border-4 border-white/20" style={{ background: "linear-gradient(135deg,#fa4612,#c73000)" }}>
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      </div>
                      <h2 className="text-xl font-bold text-white">OTP Verification</h2>
                      <p className="text-white/60 text-xs mt-1">Code sent to</p>
                      <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 mt-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white font-semibold text-xs tracking-wide">{phone}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-6">
                      <p className="text-center text-gray-500 text-xs mb-5">Enter the <span className="font-semibold text-[#24416b]">6-digit code</span> to verify your number</p>

                      {/* OTP Inputs */}
                      <div className="flex justify-center gap-2 mb-5">
                        {otp.map((value, index) => (
                          <input
                            key={index}
                            type="text"
                            className="w-10 h-12 text-center text-lg font-bold border-2 border-[#e8edf5] rounded-xl focus:border-[#fa4612] focus:outline-none focus:shadow-[0_0_0_3px_rgba(250,70,18,0.15)] transition-all text-[#24416b] bg-[#fafbff]"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleInputChange(e.target, index)}
                            autoComplete="off"
                          />
                        ))}
                      </div>

                      {/* Verify Button */}
                      <button
                        onClick={verifyAndSubmit}
                        disabled={isVerifying}
                        className="w-full py-3 rounded-xl font-bold text-white text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.01]"
                        style={{ background: "linear-gradient(135deg,#fa4612,#c73000)" }}
                      >
                        {isVerifying ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Verifying…
                          </span>
                        ) : "✓ Verify & Submit"}
                      </button>

                      {/* Resend */}
                      <div className="text-center mt-4 text-xs text-gray-400">
                        Didn't receive the code?{" "}
                        <button
                          onClick={resendOtp}
                          disabled={isResending}
                          className="text-[#fa4612] font-semibold hover:underline disabled:opacity-40 transition-all"
                        >
                          {isResending ? "Resending…" : "Resend OTP"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Side Image */}
            {!showOnlyLocal && (
              <div className="hidden md:block w-full md:w-[28%] relative min-h-[400px]">
                <div className="absolute inset-0 bg-[#24416b]">
                  <Image fill src="/Images/img/International-Movers-and-Packers.webp" className="object-cover opacity-80" alt="International Movers and Packers" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, #24416b 100%)" }} />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-bold text-lg leading-snug">Trusted by 10,000+ Families Worldwide</p>
                    <p className="text-sm text-white/70 mt-1">Safe, affordable & on-time delivery</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
