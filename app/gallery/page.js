import React from "react";
import Image from "next/image";
import Link from "next/link";

const Map = () => {
  const images = [
    "/Images/img/International-Transportation.webp",
    "/Images/img/Household-Transportation.webp",
    "/Images/img/International-Packing.webp",
    "/Images/img/Bike-Transportation.webp",
    "/Images/img/House-Shifting.webp",
    "/Images/img/Packing-Services.webp",
    "/Images/img/Kitchen-Appliances-Packing.webp",
    "/Images/img/Cardboard-Packing-Services.webp",
    "/Images/img/International-Moving.webp",
    "/Images/img/Abroad-Services.webp",
    "/Images/img/International-Shipping-Services.webp",
    "/Images/img/International-Warehouse-Services.webp",
  ];

  return (
    <>
      <head>
        <title>Our Gallary | Move It Solution </title>
        <meta
          name="description"
          content="Discover the extensive Move It Solution Gallery and explore our top-notch moving services to simplify your relocation process."
        />
      </head>

      <div className="bg-gray-100 banner h-full pt-28 pb-10">
        <div className="px-10 lg:px-28 w-full h-full">
          <div className="flex justify-center lg:justify-end  items-center h-full">
            <div className="text-white flex text-sm gap-5 hover:text-blue-500">
              <Link href="/" className="">
                Home
              </Link>
              <li className="text-[#fa4612]">Gallery</li>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20  mx-5 lg:mx-28">
        <p className=" text-[#fa4612] text-center">Our Projects</p>
        <h2 className="text-2xl lg:text-[40px] mb-8 text-center">
          Featured Projects have done
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group h-[250px]  w-full overflow-hidden"
            >
              <Image
               width={700}
               height={700}
                src={src}
                alt="Move It Solution"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-150"
              />
              <div className="absolute inset-0 bg-black bg-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="project-content absolute inset-0 m-auto p-4 flex justify-center items-center bg-[#25245e]/90 transform scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100 w-[93%] h-[90%] text-center z-20">
                  <div>
                    <p className="text-white text-base  mb-2">
                      Move It Solution
                    </p>
                    <p className="text-white text-xl hover:underline font-semibold mb-2">
                      All India Services
                    </p>
                    <button className="text-[#fa4612] hover:text-white text-base font-medium transition-colors duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Map;
