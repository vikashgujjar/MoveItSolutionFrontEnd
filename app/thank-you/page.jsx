import Link from "next/link";
import { FaCheckCircle, FaHome, FaPhoneAlt, FaWhatsapp, FaTruck, FaBoxOpen, FaStar, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";

export const metadata = {
  title: "Thank You | Move It Solution",
  description: "Thank you for contacting Move It Solution. We will get back to you shortly.",
};

const stats = [
  { icon: <FaTruck className="text-2xl" />, value: "50,000+", label: "Successful Moves" },
  { icon: <FaStar className="text-2xl" />, value: "4.9 / 5", label: "Customer Rating" },
  { icon: <FaShieldAlt className="text-2xl" />, value: "100%", label: "Safe & Insured" },
  { icon: <FaHeadset className="text-2xl" />, value: "24 / 7", label: "Customer Support" },
];

const ThankYouPage = () => {
  return (
    <>
      {/* Banner */}
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end items-center h-full">
            <div className="text-white flex text-sm gap-5">
              <Link href="/" className="hover:text-[#fa4612]">Home</Link>
              <li className="text-[#fa4612] list-none">Thank You</li>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#f0f4ff] min-h-[70vh] py-14 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Hero Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Dark top panel with decorative elements */}
            <div className="relative px-8 pt-12 pb-16 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #24416b 0%, #1a2f50 100%)" }}>

              {/* Decorative floating circles */}
              <div className="absolute top-4 left-6 w-16 h-16 rounded-full opacity-10 bg-[#fa4612]" />
              <div className="absolute top-12 left-16 w-8 h-8 rounded-full opacity-10 bg-white" />
              <div className="absolute top-4 right-10 w-12 h-12 rounded-full opacity-10 bg-[#fa4612]" />
              <div className="absolute bottom-8 left-8 w-10 h-10 rounded-full opacity-10 bg-white" />
              <div className="absolute bottom-4 right-6 w-20 h-20 rounded-full opacity-10 bg-[#fa4612]" />
              <div className="absolute top-6 right-28 w-6 h-6 rounded-full opacity-15 bg-white" />

              {/* Decorative icons */}
              <FaTruck className="absolute top-8 left-10 text-white/10 text-5xl rotate-12" />
              <GiCommercialAirplane className="absolute bottom-10 right-12 text-white/10 text-5xl -rotate-12" />
              <FaBoxOpen className="absolute top-10 right-8 text-white/10 text-3xl rotate-6" />

              {/* Check icon */}
              <div className="relative inline-flex items-center justify-center mb-5">
                <div className="absolute w-28 h-28 rounded-full opacity-20 bg-[#fa4612] animate-ping" style={{ animationDuration: "2s" }} />
                <div className="absolute w-24 h-24 rounded-full opacity-20 bg-[#fa4612]" />
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30"
                  style={{ background: "linear-gradient(135deg, #fa4612, #c73000)" }}
                >
                  <FaCheckCircle className="text-white text-4xl" />
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Thank You!
              </h1>
              <p className="text-white/70 text-sm md:text-base max-w-sm mx-auto">
                Your request has been submitted. Our expert team will reach out to you shortly.
              </p>

              {/* Response badge */}
              <div className="inline-flex items-center gap-2 mt-5 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-medium">Expected response within <span className="text-[#fa4612] font-bold">24 hours</span></span>
              </div>
            </div>

            {/* Wave separator */}
            <div className="relative -mt-6">
              <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: "block" }}>
                <path fill="white" d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
              </svg>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-[#f0f4ff]">
              {stats.map((s, i) => (
                <div key={i} className={`flex flex-col items-center py-5 px-3 text-center ${i < stats.length - 1 ? "border-r border-[#f0f4ff]" : ""}`}>
                  <div className="text-[#fa4612] mb-1">{s.icon}</div>
                  <p className="text-[#24416b] font-extrabold text-lg leading-none">{s.value}</p>
                  <p className="text-gray-400 text-[11px] mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="px-8 py-8">
              <p className="text-center text-gray-500 text-sm mb-5">What would you like to do next?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #fa4612, #c73000)" }}
                >
                  <FaHome />
                  Back to Home
                </Link>
                <Link
                  href="tel:+91-7056997000"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-[#24416b] border-2 border-[#24416b] text-sm hover:bg-[#24416b] hover:text-white transition-all hover:shadow-xl"
                >
                  <FaPhoneAlt />
                  Call Us Now
                </Link>
                <Link
                  href="https://wa.me/917056997000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Us
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom trust note */}
          <p className="text-center text-gray-400 text-xs mt-6">
            🔒 Your information is safe with us. We never share your data with third parties.
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
