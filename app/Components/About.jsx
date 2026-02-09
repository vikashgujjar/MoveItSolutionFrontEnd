import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className=" mx-auto px-4 sm:px-6 lg:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <p className="text-[#fa4612] font-medium text-[13px] ">KNOW ABOUT US</p>
              <h2 className="text-2xl lg:text-[34px] font-semibold  mt-2 underline-animation">
                Welcome To Move It Solution - About Us
              </h2>
              <p className="mt-4 text-gray-600 text-justify">
                Move It Solution provides one of the top international movers and packers services. Our
                dedicated staff, excellent techniques, and best-in-class equipment allow us to provide you
                with the highest-quality worldwide moving services. We look after all your worries,
                whether it is residential or commercial relocation, packing/unpacking hassles, or any
                storage solutions you are searching for. Handling your belongings with utmost care makes
                us reliable and trustworthy. We ensure a smooth and stress-free international move.

              </p>
              <Link
                href="/about"
                className="text-[#fa4612] mt-4 inline-flex items-center"
              >
                Read More <span className="ml-2">&rarr;</span>
              </Link>
              <div className="mt-16">
                <h2 className="text-2xl lg:text-[34px] font-semibold">
                  International Packers and Movers
                </h2>
                <p className="mt-4 text-gray-600 text-justify">
                  International Packers and Movers Move It Solution is an expert in worldwide residential or
                  commercial relocation. We oer our wide range of professional services to assist your
                  hassle-free international move. Our excellent sta pays attention to your needs and fullls
                  each of them with tailor-made plans to ensure your satisfaction. We use premium-quality
                  packaging materials to keep your goods safe. Our extensive services include international
                  courier, transport, packing, shifting, parcel, warehouse, and supply chain making us the
                  best international relocation company. moving company


                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end mt-10 lg:mt-0">
              <Image
                src="/Images/img/international-packers-and-movers.webp"
                alt="international packers and movers"
                width={700}
                height={800}
                priority
                className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-[550px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
