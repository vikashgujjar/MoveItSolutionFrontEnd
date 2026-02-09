import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      {" "}
      <head>
        <title>Privacy Policy | Move It Solution </title>
        <meta name="description" />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">Privacy Policy</li>
            </div>
          </div>
        </div>
      </div>


      <section className="privacy-policy py-16 mx-0 lg:mx-28">
        <div className="container mx-auto px-4">
          <div className="single-privacy">
            <h3 className="text-2xl font-bold mt-0">
              Welcome to Move It Solution Privacy Policy
            </h3>
            <p className="text-justify mt-4">
              At Move It Solution, we value your privacy and are committed to
              protecting your personal information. Our Privacy Policy outlines
              how we collect, use, disclose, and store your data when you
              interact with our services. We adhere to industry-standard
              security measures to ensure the confidentiality and integrity of
              your information. By using Move It Solution, you consent to the
              terms of our Privacy Policy. Please review the complete policy on
              our website for more detailed information.
            </p>
            <p className="text-justify mt-4">
              We collect personal information, such as your name, email address,
              and contact details, solely for the purpose of providing you with
              our services and improving your experience. We may also collect
              non-personal information through the use of cookies and similar
              technologies to enhance our website's functionality.
            </p>
            <p className="text-justify mt-4">
              By using our services, you consent to the collection and use of
              your personal information as described in this Privacy Policy. We
              may update this policy periodically, so we encourage you to review
              it regularly.
            </p>
            <p className="mt-4">
              For any inquiries or concerns about your privacy, please contact
              us at <strong>info@moveitsolution.com</strong>
            </p>

            <h3 className="text-xl font-semibold mt-8">
              You can visit the majority of our website without providing any
              personal information
            </h3>
            <p className="text-justify mt-4">
              At Move It Solution, we prioritize the privacy and security of our
              users. We strive to ensure that most parts of our website can be
              accessed without requiring any personal information from you. We
              understand the importance of safeguarding your privacy and
              maintaining confidentiality. For detailed information on how we
              handle and protect personal data when it is collected, stored, or
              processed, please refer to our comprehensive privacy statement.
            </p>

            <h3 className="text-xl font-semibold mt-8">Security</h3>
            <p className="text-justify mt-4">
              Move It Solution is committed to providing top-notch security for
              our clients. With our robust security measures, we ensure the
              highest level of protection for your valuable data and systems.
              Our expert team implements industry-leading encryption protocols,
              multi-factor authentication, and advanced intrusion detection
              systems to safeguard against cyber threats. Regular security
              audits and vulnerability assessments are conducted to identify and
              address any potential vulnerabilities.
            </p>

            <h3 className="text-xl font-semibold mt-8">Use Of Cookies</h3>
            <p className="text-justify mt-4">
              Cookies are small text files that websites store on a user's
              device to collect information about their browsing behavior. In
              the context of Move It Solution, cookies play a crucial role in
              enhancing user experience and optimizing website functionality.
              Cookies enable us to remember user preferences and settings, such
              as language preferences or login information, making subsequent
              visits more convenient.
            </p>

            <h3 className="text-xl font-semibold mt-8">Link To Other Sites</h3>
            <p className="text-justify mt-4">
              Links to other websites are located on this page. The content of
              these websites and their privacy policies are not the
              responsibility of Move It Solution Packers and Movers 
            </p>

            <h3 className="text-xl font-semibold mt-8">
              Contacting the website administrators
            </h3>
            <p className="text-justify mt-4">
              If you have any questions about this privacy statement, the
              practices of this site, or your dealings with this website, please
              contact: +91-7056497000, +91-7056997000 or email us at
              info@moveitsolution.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
