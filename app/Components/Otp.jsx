import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2

const OTPModal = ({ togglePopup, number }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false); // State for Resend

  // const handlePhoneNumberChange = (e) => {verifyAndSubmit
  //   setPhoneNumber(e.target.value);
  //   setErrorMessage("");
  //   setSuccessMessage("");
  // };

  const resendOtp = async () => {
    setIsResending(true); 
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://otp-verify-service.onrender.com/send-otp",
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

  const verifyOtp = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const enteredOtp = otp.join(""); // Concatenate OTP digits into a single string
    if (enteredOtp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsVerifying(true);

    try {
      console.log("Verifying OTP:", { otp: enteredOtp, phone: number }); // Debug log

      const response = await axios.post(
        "https://otp-verify-service.onrender.com/verify-otp",
        {
          code: enteredOtp,
          phone: number, // Ensure phone number is sent
        }
      );

      if (response.data.success) {
        setSuccessMessage("OTP verified successfully!");
        console.log("OTP Verification Success:", response.data); // Debug log
        togglePopup(true);

        // SweetAlert2 success popup
        Swal.fire({
          icon: "success",
          title: "OTP Verified",
          text: "Your OTP has been verified successfully!",
        });
        togglePopup(false);
      } else {
        console.error("OTP Verification Failed:", response.data); // Debug log
        setErrorMessage(
          response.data.message || "Invalid OTP. Please try again."
        );

        // SweetAlert2 error popup
        Swal.fire({
          icon: "error",
          title: "Verification Failed",
          text: response.data.message || "Invalid OTP. Please try again.",
        });
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status outside 2xx
        const { status, data } = error.response;

        if (status === 400) {
          setErrorMessage(data.message || "Invalid request. Please try again.");
        } else if (status === 401) {
          setErrorMessage("OTP expired or unauthorized. Please request a new one.");
        } else if (status === 500) {
          setErrorMessage("Server error. Please try again later.");
        } else {
          setErrorMessage("Unexpected error occurred. Please try again.");
        }

        console.error("API Response Error:", error.response);
      } else if (error.request) {
        // No response received
        console.error("No Response from API:", error.request);
        setErrorMessage("No response from server. Please check your network.");
      } else {
        // Error setting up the request
        console.error("Request Setup Error:", error.message);
        setErrorMessage("Unexpected error. Please try again.");
      }

      Swal.fire({
        icon: "error",
        title: "Verification Failed",
        text: error.response?.data?.message || "An error occurred. Please try again.",
      });
    }
    finally {
      setIsVerifying(false);
    }
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

  return (
    <div
      id="otp-modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <div className="relative p-6">
          <button
            onClick={togglePopup}
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
              <span className="text-black text-lg">{number}</span>
            </p>
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center mb-4">
                {successMessage}
              </p>
            )}
            <form>
              <div className="flex justify-center space-x-2 mb-4">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-12 h-12 text-center text-xl border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength="1"
                    value={value}
                    onChange={(e) => handleInputChange(e.target, index)}
                    autoComplete="off"
                  />
                ))}
              </div>
              <button
                onClick={verifyOtp} // Using onClick here
                className={`w-full py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 ${isVerifying && "opacity-50 cursor-not-allowed"
                  }`}
              >
                {isVerifying ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </form>
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
  );
};

export default OTPModal;
