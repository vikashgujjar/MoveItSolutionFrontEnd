import React from "react";
import { FaLock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
    
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/2 px-4">
              <div className="text-center mb-8">
                <span className="text-xl text-red-500">Contact Now</span>
                <h1 className="text-2xl md:text-3xl font-bold mt-2">
                  Have Questions? Write a Message
                </h1>
                <p className="text-gray-600 mt-4">
                  We will respond as soon as we receive the message
                </p>
              </div>

              <form id="contact-form" className="space-y-6">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="text"
                      placeholder="Enter your name *"
                      required
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="email"
                      placeholder="Enter your email *"
                      required
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2">
                    <input
                      type="text"
                      placeholder="Enter your Phone No *"
                      required
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <select
                      required
                      className="w-full p-3 border border-gray-300 rounded"
                    >
                      <option value="">Select Service</option>
                      <option>Local Household Shifting</option>
                      <option>Domestic Shifting Services</option>
                      <option>International Shifting Services</option>
                      <option>Corporate Relocation</option>
                      <option>Car &amp; Bike Transportation</option>
                      <option>Warehouse Storage Services</option>
                    </select>
                  </div>
                </div>
                <textarea
                  placeholder="Message for me *"
                  rows="4"
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                ></textarea>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  <label>
                    I agree to the{" "}
                    <a href="#" className="text-blue-600">
                      Terms &amp; Conditions
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-red-500 text-white font-semibold rounded"
                >
                  Submit
                </button>
                <p className="text-gray-500 text-sm mt-4">
                  <FaLock className="inline" /> We hate spam, and we respect
                  your privacy.
                </p>
              </form>
            </div>

            <div className="w-full lg:w-1/3 px-4 mt-10 lg:mt-0">
              <div className="space-y-6">
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <span className="flex items-center text-xl">
                    <i className="bx bx-phone-call mr-2"></i> Branches Contact
                    No:
                  </span>
                  <p className="text-gray-600 mt-2">
                    Assistance hours: Monday – Friday, 9 am to 5 pm
                  </p>
                  <a
                    href="tel:+91-7056997000"
                    className="text-blue-600 mt-2 block"
                  >
                    Delhi office: (+91) 7056997000
                  </a>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <span className="flex items-center text-xl">
                    <i className="bx bx-envelope mr-2"></i> Company Email
                    Address:
                  </span>
                  <p className="text-gray-600 mt-2">
                    Our support team will respond within 24 hours during
                    standard business hours.
                  </p>
                  <a
                    href="mailto:info@moveitsolution.com"
                    className="text-blue-600 mt-2 block"
                  >
                    info@moveitsolution.com
                  </a>
                </div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <span className="flex items-center text-xl">
                    <i className="bx bx-location-plus mr-2"></i> Head Office
                    Address:
                  </span>
                  <p className="text-gray-600 mt-2">
                    Sco No : 487, 1st Floor, Near SBI Bank, Dwarka Sector 26,
                    New Delhi (110077)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
