import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
    <head>
        <title>Terms & Condition | Move It Solution </title>
        <meta name="description" />
      </head>


      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-[#fa4612]">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612] text-nowrap">Terms Conditions</li>
            </div>
          </div>
        </div>
      </div>

      <section className="privacy-policy py-16 mx-0 lg:mx-28">
        <div className="container mx-auto px-4">
          <div className="single-privacy space-y-8">
            {/* Heading */}
            <h3 className="text-2xl font-bold">
              Terms &amp; Conditions for Move It Solution: Welcome
            </h3>
            {/* Paragraph */}
            <p className="text-justify">
              Thank you for choosing Move It Solution. By using our services,
              you agree to the following terms and conditions: We provide
              reliable and efficient moving solutions. Any damages or losses
              during the moving process are the responsibility of the customer.
              Payment must be made in full upon completion of the service.
            </p>
            {/* Sub-section */}
            <h3 className="text-xl font-semibold">
              There are additional limitations on downloading and copying the
              Materials.
            </h3>
            <p className="text-justify">
              Downloading and copying the Materials from the Move It solution is
              subject to certain limitations. Additional restrictions apply to
              these actions. Please refer to the terms and conditions or the
              license agreement provided by Move It for specific details. It is
              important to abide by these limitations to ensure compliance with
              the usage rights and protect the intellectual property rights of
              Move It and any third-party content providers involved.
            </p>
            {/* Software Section */}
            <h3 className="text-xl font-semibold">Software</h3>
            <p className="text-justify">
              Move It Solution is a cutting-edge software designed to streamline
              and optimize business operations. With its robust features, it
              enables seamless management of inventory, logistics, and supply
              chain processes. The software offers real-time tracking, inventory
              visibility, and intelligent analytics for enhanced
              decision-making. Its user-friendly interface ensures easy
              navigation and customization, while its scalability makes it
              suitable for businesses of all sizes. Move It Solution empowers
              organizations to achieve greater efficiency, reduce costs, and
              improve customer satisfaction, making it an indispensable tool for
              modern businesses.
            </p>
            {/* Trademarks Section */}
            <h3 className="text-xl font-semibold">Trademarks</h3>
            <p className="text-justify">
              Move It Solution is a leading provider of innovative technology
              solutions in the field of logistics and transportation. As a
              company at the forefront of digital transformation, Move It
              Solution understands the importance of protecting its intellectual
              property. Therefore, Move It Solution has successfully registered
              several trademarks to safeguard its brand identity and distinguish
              its services from competitors in the market.
            </p>
            <p className="text-justify">
              Move It Solution trademarks symbolize trust, reliability, and
              technological expertise. They serve as a testament to the
              company's dedication to providing efficient and streamlined
              solutions to its clients. With its strong trademark portfolio,
              Move It Solution reinforces its market position, protects its
              intellectual property, and reinforces its commitment to innovation
              and excellence in the logistics and transportation sector.
            </p>
            {/* General Section */}
            <h3 className="text-xl font-semibold">General</h3>
            <p className="text-justify">
              Move It Solution is a comprehensive technology provider
              specializing in delivering innovative IT solutions to businesses
              of all sizes. Our expertise includes network infrastructure, cloud
              computing, cybersecurity, data management, and software
              development. We strive to understand our clients' unique needs and
              provide tailored solutions that enhance their productivity,
              efficiency, and security. With our experienced team of IT
              professionals and a customer-centric approach, Move It Solution is
              committed to delivering reliable, scalable, and cost-effective
              technology solutions to help businesses thrive in today's
              fast-paced digital world.
            </p>
            {/* Changes Section */}
            <h3 className="text-xl font-semibold">Changes and Other Terms</h3>
            <p className="text-justify">
              Move It Solution has implemented several changes and updated its
              terms. These include enhanced security measures, improved data
              privacy policies, streamlined user experience, expanded service
              offerings, and revised pricing structures. Customers are advised
              to review the updated terms and conditions to ensure compliance
              and take advantage of the new features and benefits.
            </p>
            <p className="text-justify">
              In addition to the aforementioned changes, Move It Solution has
              introduced a new customer support system to provide faster and
              more efficient assistance. The company has also implemented
              advanced analytics capabilities, empowering clients with valuable
              insights into their operations. Furthermore, Move It Solution has
              extended its service availability to international markets,
              catering to a wider range of businesses.
            </p>
            <p className="text-justify">
              Due to recent developments, Move It Solution has implemented
              changes to enhance its services. We have revised our pricing
              model, introduced new features, and updated our terms and
              conditions. These changes aim to provide a better user experience
              and meet evolving customer needs. Please review our updated
              documentation for more information.
            </p>
            {/* Refund and Cancellation Policy */}
            <h3 className="text-xl font-semibold">
              Here is our policy on refunds and cancellations:
            </h3>
            <p className="text-justify">
              <strong>Cancellation and Refund Policy:</strong> Our cancellation
              and refund policy states that customers are eligible for a full
              refund if a cancellation request is made within 24 hours of
              placing an order. After this period, cancellations may incur a
              processing fee. Refunds will be issued within 7 business days via
              the original payment method.
            </p>
            <h3 className="text-xl font-semibold">Refund Policy</h3>
            <p className="text-justify">
              Move It Solution Refund Policy: We offer a 30-day refund period
              for our services. If you're unsatisfied, contact our customer
              support within 30 days of purchase to initiate the refund process.
              The original payment method will be used to grant refunds.
            </p>
            <h3 className="text-xl font-semibold">
              Cancellation charges against booking
            </h3>
            <p className="text-justify">
              5% of the entire booking price or Rs. 1000, whichever is higher.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
