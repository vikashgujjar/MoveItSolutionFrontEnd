import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Link from 'next/link';
import { FaTruck, FaArrowRight } from 'react-icons/fa';

const CommonService = () => {
  
  return (
    <>
      <div className="service-area relative bg-[#003F72] z-[1] sa-bg mb-20  px-5 lg:px-24  py-20">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-center text-white animate-fadeInDown">
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 bg-[#fa4612] text-white rounded-full p-[2px] mb-0">
                <FaTruck className="bg-white text-[#fa4612] text-3xl rounded-full p-1" />
                <span className="text-lg font-semibold pr-3">Services</span>
              </div>
              <h2 className="font-bold capitalize text-white text-4xl lg:text-[45px] lg:leading-[1.2] text-dark mt-2 mb-0">
              Our Customized  <br /> <span className="text-[#fa4612]">Services</span> for You

                 

              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className='text-[17px] leading-[1.8] text-justify'>
              Moving abroad can be exhausting and stressful! However, things become convenient when you have the support of one of the best international packers and movers. Move it ensures that everything gets to your chosen location promptly and safely, including paperwork, vehicle transportation, and customs clearance.


              </p>
            </div>
            <div className="lg:col-span-2">
              <Link href="/services" className="text-white text-center  inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-lg cursor-pointer  overflow-hidden bg-[#fa4612] shadow transition-all duration-500">
                All Services <FaArrowRight className="ml-2  rotate-[-40deg] transition-all" />
              </Link>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { id: '01', icon: '/Images/img/air.svg', link: '/international-Courier-Services', title: 'International Courier Services', para: "Move It Solutions is a reputable and experienced international packer and mover that can assist you with international courier services if you are relocating or shipping valuable items across the world. We put your confidence and trust first by offering real-time tracking and timely customer service. " },

              { id: '02', icon: '/Images/img/road.svg', link: '/international-Transport-Services', title: 'International Transport Services', para: "Whether you're downsizing, renovations, or moving, you need to make sure your belongings are safe. One of the top international shipping companies, Move It, provides reasonably priced, safe storage facilities. You can be sure that your goods are in good hands when you work with us. In addition, it's hassle-free thanks to our affordable prices and flexible rental plans." },

              { id: '03', icon: '/Images/img/package.svg', link: '/international-Packing-Services', title: 'International Packing Services', para: "Moving goods to a different country can be stressful, as we all know. However, things are simple and convenient when you are working with one of the top international packers and movers! Our group at Move It Solutions, guarantees quality, it makes sure that every little detail and item is handled with the highest care and attention! Every one of your belongings is handled with care thanks to our specialized equipment. " },

              { id: '04', icon: '/Images/img/shipping.svg', link: '/international-Shifting-Services', title: 'International Shifting Services', para: "Move It Solutions is a leading international moving company. Do you want your international move to go as smoothly and stress-free as possible? Our logistic networks support our services, which guarantee seamless international shipping. Additionally, we make sure that the timely and safe delivery of your goods to their destination is our top priority." },



              { id: '05', icon: '/Images/img/ocean.svg', link: '/international-Parcel-Services', title: 'International Parcel Services', para: "The international parcel services offered by Move It Solutions guarantee that your goods will be delivered on time and across borders. As one of the leading packers and movers, we guarantee the safe and effective delivery of your belongings via our international logistics networks, which eventually offer a flawless shipping solution and assist you with your personal and professional requirements." },

              { id: '06', icon: '/Images/img/warehouse.svg', link: '/Warehouse-Services', title: 'Warehouse Services', para: "Would you like to streamline your distribution and stock management? Then don't hesitate any longer; Move It Solutions is the top international moving company that offers storage services and warehouse solutions to help your business. While we handle your warehouse management, you can relax." },

              { id: '07', icon: '/Images/img/warehouse.svg', link: '/heavy-goods-transport', title: 'Heavy Goods Transport', para: "Whether you need to move heavy machinery or bulky household items, we can handle it all. We can carry and ship heavy items that you require thanks to our extensive network of suppliers and transportation partners. You can trust Move It Solutions with your heavy goods because we have experience handling freight and luggage that is on the heavy side." },

              { id: '08', icon: '/Images/img/warehouse.svg', link: '/supply-chain', title: 'Supply Chain', para: "You can rely on Move It Solution’s services whether you're moving to a new country or need to handle international house shifting from scratch because we have networks with a large number of reliable suppliers. Our company, which is among the best worldwide packers and movers, provides a smooth delivery of things. " },

            ].map((service) => (
              <div key={service.id} className="service-item ">
                <div className="card-num">{service.id}</div>
                <div className="service-icon relative">
                  <img src={service.icon} alt={service.title} className='absolute top-4 left-3' />
                </div>
                <div className="">
                  <h4 className="text-xl font-semibold mb-2">
                    <Link href={service.link} className="text-[#003F72]">{service.title}</Link>
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 text-justify">
                    {service.para}
                  </p>
                  <Link href={service.link} className="text-white text-center  inline-flex items-center text-base font-semibold capitalize px-5 py-2.5 rounded-lg cursor-pointer  overflow-hidden bg-[#fa4612] shadow transition-all duration-500">
                    Learn More <FaArrowRight className="ml-2  rotate-[-40deg] transition-all" />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default CommonService;
