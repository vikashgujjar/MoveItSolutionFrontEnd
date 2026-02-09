import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[600px] md:h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-[100%] md:h-full object-cover"
        src="/Images/video/bg-video.mp4"
        autoPlay
        loop
        muted
        poster="/Images/img/banner-img1.webp"
        preload="none"
      />

      <div className="absolute top-0 left-0 w-full h-[90%] md:h-full bg-black opacity-10"></div>

      <div className="relative top-12 md:top-0 flex flex-col items-center justify-center h-[90%] md:h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl md:text-[60px] font-bold mb-4 leading-[1.2] w-[85%] md:w-[70%] text-white">
          House Shifting Made Easy With the Best
          International Packers & Movers

        </h1>

        <p className="text-lg md:text-xl mb-8">
          Move internationally with Move It. We handle your belongings with care. Get a seamless
          moving experience at a low cost.
        </p>

        <div className="flex space-x-4">
          <Link
            href="/services"
            className="default-btn active border border-[#fa4612] bg-[#fa4612] text-white  py-3 px-6 rounded transition duration-300 "
          >
            Our Services
          </Link>

          <Link
            href="/request-quote"
            className="default-btn  py-3 px-6 rounded text-white transition duration-300  text-lg"
          >
            Request A Quote
          </Link>
        </div>
      </div>

      {/* <div className="absolute bottom-4 right-4 flex flex-col space-y-4 z-20">
        <Link
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          className="flex items-center bg-green-500 text-white p-3 rounded-lg shadow-lg space-x-2"
        >
          <img src="/whatsapp-icon.webp" alt="WhatsApp" className="w-6 h-6" />
          <span>WhatsApp Now</span>
        </Link>

        <Link
          href="tel:+917056997000"
          className="flex items-center bg-blue-500 text-white p-3 rounded-lg shadow-lg space-x-2"
        >
          <img src="/phone-icon.webp" alt="Call" className="w-6 h-6" />
          <span>Call Now</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;
