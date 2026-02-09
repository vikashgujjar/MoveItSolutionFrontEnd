import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <head>
        <title>Refund Policy | Move It Solution </title>
        <meta name="description" />
      </head>
      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">Cancellation / Refund Policy</li>
            </div>
          </div>
        </div>
      </div>{" "}
      <section className="privacy-policy py-16 mx-0 lg:mx-28">
        <div className="container mx-auto px-4">
          <div className="single-privacy">
            <h3 className="text-2xl font-bold mt-0">
              Welcome to Move It Solution Cancellation / Refund Policy
            </h3>
            <p className="text-justify mt-4">
              Thank you for choosing Move It Solution. We strive to provide
              seamless and reliable services to all our customers. However, we
              understand that changes or cancellations may sometimes be
              unavoidable. This policy outlines the terms and conditions for
              cancellations and refunds.
            </p>

            <p className="mt-4">
              For any inquiries or concerns about your privacy, please contact
              us at{" "}
              <strong>
                <Link href="mailto:info@moveitsolution.com">
                  info@moveitsolution.com
                </Link>
              </strong>
            </p>

            <h3 className="text-xl font-semibold mt-8">Cancellation Policy</h3>
            <p className="text-justify mt-4">
              You have 24 hours after placing your order at moveitsolution.com
              to cancel it if you would like to. Once the shipment has been
              dispatched, the cancellation cannot be made.
            </p>

            <h3 className="text-xl font-semibold mt-8">Refund Policy</h3>
            <p className="text-justify mt-4">
              Please contact our customer service at{" "}
              <strong>
                <Link href="mailto:info@moveitsolution.com">
                  info@moveitsolution.com
                </Link>
              </strong>{" "}
              in the event of a cancellation to receive a reimbursement of your
              money along with the necessary documentation.
            </p>

            <h3 className="text-xl font-semibold mt-8"> Pricing Policy</h3>
            <p className="text-justify mt-4">
              The rates are contingent on the type and quantity of services you
              use, which may vary depending on factors like volume, distance,
              and additional auxiliary services you wish to use.
            </p>
            <h3 className="text-2xl font-semibold mt-8"> Shipping policy</h3>
            <p className="text-justify mt-4">
              At Move It Solution, we are committed to delivering your orders
              promptly and reliably. We process and ship orders , excluding
              weekends and public holidays. Our shipping services are accessible
              both domestically and internationally, with anticipated delivery
              times changing based on the destination and shipping option
              selected during checkout. Once your product is dispatched, you
              will receive a confirmation email with tracking details to monitor
              its progress. Since we are not liable for delays or non-delivery
              brought on by inaccurate information, please make sure the
              shipping address you provide is correct and complete.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
