"use client";
import React, { useState } from "react";

const Chooseus = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="choose-us-area py-12 px-0 md:px-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#fa4612] ">Why Choose Us</span>
            <h2 className="text-2xl md:text-[40px] underline-animation left leading-[52px] font-bold mt-2 text-[#24416b]">
              Why Choose Move It Solutions?

            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 ">
            <div className="md:w-2/3 space-y-4 p-4 lg:p-12 custom-shadow">
              <h2 className="text-xl md:text-2xl font-semibold">
                Why Is Move It Solution The Best International House Shifting Company?
              </h2>

              <div className="tabs border-b border-gray-200 flex space-x-4">
                {["Our Vision", "Our Mission", "Our Goal"].map((tab, index) => (
                  <h6
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-2 lg:px-4 py-2 focus:outline-none  text-[13px] lg:text-base cursor-pointer ${activeTab === index
                      ? "border-b-2  border-[#fa4612] text-[#fa4612] font-semibold "
                      : ""
                      }`}
                  >
                    {tab}
                  </h6>
                ))}
              </div>

              <div className="tab-content mt-4">
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <p className="text-justify">
                      We have been in this industry for over years now and with time as we grew eventually we have witnessed a lot of hardships as well. One of the biggest concerns that we have seen in the market is the way goods are moved. Our vision sees a future in which Move It Solutions will re-define logistics by blending it with hassle-free transportation and thus, offering a real-time channel between the business and the clients.
                    </p>
                    <p className="text-justify">
                      Move It is one of the top international relocation companies, we make sure that with cutting-edge technology, we offer comprehensive relocation assistance. We are also aiming at building a platform that is built using advanced technology and automation that serves the complete optimal movement of the goods during relocation.
                      Our vision for the next phase also includes minimizing the cost of logistics and we also aim at minimizing the impact of the same on our clients while optimizing the efficiency of goods transport.
                    </p>
                    <p className="text-justify">
                      To streamline our services with our vision, we are putting in our best efforts to make transportation easy, convenient, and affordable at the same time.  We aim to ultimately provide you with the best relocation experience whether it be in-house or international. So, you can rely on one of the best relocation companies in the market for all your moving needs. Move It Solution’s vision is to reach the top while keeping the setbacks in mind.
                    </p>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="space-y-4">
                    <p className="text-justify">
                      Transportation plays a crucial role in case of shifting or relocation or sending goods to another city/country through courier. We at Move it, understand the importance of transportation in daily life. That is why we want to adhere to the true meaning of transportation: that it should be accessible, seamless, and sustainable.

                    </p>
                    <p className="text-justify">
                      Our mission is to involve technology to optimize the transport networks thus making it seamless, reduce or remove the operational inefficiencies focussed to make it accessible, and minimize the environmental impact, ultimately making it sustainable. We want to innovate the way people, goods, or cargo move from one place to another.

                    </p>
                    <p className="text-justify">
                      We enable smooth communication between shippers and carriers through our advanced platform built with smart algorithms that increase productivity.


                    </p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="space-y-4">
                    <ul className="text-justify list-disc list-inside space-y-2">
                      <li>Customer satisfaction is our top priority and that is why we take the responsibility to deliver your goods safely and we give you access to track your goods in real-time.
                      </li>
                      <li>Customer service should be accessible and quick. We ensure that you can easily reach out to us in case of queries, worries, or complaints (if any).
                      </li>
                      <li>Building an extensive network of partners enables us to provide services to our customers worldwide.
                      </li>
                      <li>Honesty and Integrity are values we can’t compromise with and so our goal is to build trust among our customers and partners.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="choose-img choose-img-two  w-full "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chooseus;
