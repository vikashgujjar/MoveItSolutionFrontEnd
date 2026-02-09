import React from "react";

const PrioritiesSection = () => {
  return (
    <>
      <section className="about-area about-area-two py-24 bg-gray-50 px-0 md:px-20">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-8 space-y-4">
              <div className="about-content">
                <span className="text-[#fa4612] uppercase text-sm">
                  Know More About Us:
                </span>
                <h2 className="text-2xl md:text-[40px] leading-0 lg:leading-[50px] underline-animation font-bold text-[#24416b] mt-2">
                  Most Reliable Relocation & Transportation Services in The Market
                </h2>
                <p className="text-justify text-gray-700 mt-4">
                  If you are concerned about the deliverability of your goods on time, then relax! We at Move It Solutions care about punctuality like no one else. Being one of the best international relocation companies you can rely on us for all your moving needs.
                </p>
                <p className="text-justify text-gray-700">
                Move It Solutions is one of the most reliable and trusted logistics and transportation solution providers. We care about our customers and we also assure the efficient and on-time deliverability of your goods. 
                </p>
                <p className="text-justify text-gray-700">
                Our team is committed to providing the best-in-class relocation services to you. So, no matter the size of your parcel or the quantity of your goods, you can rest assured that your goods will be at the destination on time. 

                </p>
                <p className="text-justify text-gray-700">
                Not only this, we also provide real-time tracking systems that ultimately make moving and relocation a hassle-free experience for you. We value our customers and look after their needs, after assessing them, we provide a tailored relocation plan for them. So, if you are looking for such services then you can rely on the top international moving company, Move It Solutions. We streamline your relocation process with transparency, so you can coordinate and check the quality standard at any phase of your house shifting.  </p>
              </div>
            </div>

            <div className="lg:w-1/2 block lg:flex relative  items-start lg:items-center">
              <div
                className="about-img inner-about-img w-full mb-8 lg:mb-0 flex items-center justify-center"
                alt="Transportation and logistics services"
              />

              <div className="about-list bg-white relative lg:absolute top-0 left-0 p-6  shadow-md w-full lg:w-[70%]">
                <h3 className="text-lg font-semibold text-[#fa4612] mb-4">
                  Our Prime priorities:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fa4612] font-bold">✓</span>
                    <span>
                    We focus on being transparent throughout our collaboration.

                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fa4612] font-bold">✓</span>
                    <span>Real-time tracking systems for our customers to ensure a hassle-free relocation experience.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fa4612] font-bold">✓</span>
                    <span>We are open to feedback, so you can give us your unbiased opinions
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fa4612] font-bold">✓</span>
                    <span>
                    We are available at your service 24/7

                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fa4612] font-bold">✓</span>
                    <span>We take time and provide tailored solutions for our customers.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#fa4612] font-bold">✓</span>
                    <span>We want our customers to experience the best-in-class house-shifting experience. </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrioritiesSection;
