import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const services = [
    {
      icon: "fa-calendar",
      title: "Always Available",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venen augue nec pretium ornare.",
    },
    {
      icon: "fa-shopping-cart",
      title: "Best Offers",
      description:
        "Nam ultrices enim eu mattis caursu Nam consectetur urana egaet eff icitur pulvinar sae cenas.",
    },
    {
      icon: "fa-home",
      title: "Residential Moves",
      description:
        "Morbi volutpat consequat cdfondium. Proin vel rutrum est, quiasv rahus justo. Quisque et tortor sem.",
    },
    {
      icon: "fa-truck",
      title: "Corporate Relocation",
      description:
        "Vestibulum maximus orci in ante con vallis egestas. Nulla a ex eget ex su lvinar. Duis a augue id urna.",
    },
    {
      icon: "fa-globe",
      title: "International Moves",
      description:
        "Ut non magna pellentesque, scelerisq erat ut, ultrices lorem. Morbi ni osuere, efficitur varius orci.",
    },
    {
      icon: "fa-users",
      title: "Military Moving",
      description:
        "Nam ultrices enim eu mattis caursu Nam consectetur urana egaet eff icitur pulvinar sae cenas.",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      imageSrc: "/Images/img/blog-classic-img1.webp",
      title: "My Boss Is Looking To Rent a Cargo Ship",
      date: "AUG 21",
      author: "John Mike",
      comments: 32,
      description:
        "Donec hendrerit lectus in dolor tepus, a rho ncus enim facilsis. In molestie ne sem ve ti ncidunt. Sed vitae felis nisl.",
      link: "blog-detail.html",
    },
    {
      id: 2,
      imageSrc: "/Images/img/blog-classic-img2.webp",
      title: "Its Mission Explore Strange New Worlds To",
      date: "AUG 21",
      author: "John Mike",
      comments: 32,
      description:
        "Vestibulum maximus orci in ante convallis eg estas. Nulla a ex eget ex susadcipit pulvinar uis a augue id urna pulvinar.",
      link: "blog-detail.html",
    },
    {
      id: 3,
      imageSrc: "/Images/img/blog-classic-img3.webp",
      title: "These Are The Voyages of The Starship Enterprise",
      date: "AUG 21",
      author: "John Mike",
      comments: 32,
      description:
        "Donec hendrerit lectus in dolor tepus, a rho ncus enim facilsis. In molestie ne sem ve ti ncidunt. Sed vitae felis nisl.",
      link: "blog-detail.html",
    },
  ];

  return (
    <>
      <header className="bg-white border-b-[5px] border-[#ffb118] shadow">
        <div className="container mx-auto px-28">
          <div className="flex flex-wrap items-center justify-between py-2">
            {/* Logo Section */}
            <div className="">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <Image
                  width={700}
                  height={700}
                  src="/Images/logo/Move-it-solution-packers-and-movers.webp"
                  alt="Move It Solution Logo"
                  className="w-40 md:w-[250px] hidden lg:block"
                />
                <Image
                  width={700}
                  height={700}
                  src="/Images/logo/logo-mob.webp"
                  alt="Move It Solution Logo"
                  className="w-44 md:w-[250px] block lg:hidden"
                />
              </Link>
            </div>

            <div className="">
              <nav className="relative">
                <button
                  type="button"
                  className="block md:hidden text-gray-600 hover:text-gray-800 focus:outline-none focus:ring"
                >
                  <span className="sr-only">Toggle navigation</span>
                </button>
                <ul className="hidden items-center  md:flex md:gap-10">
                  <li className="">
                    <Link href="/">
                      <span className="text-gray-600 font-semibold text-lg hover:text-blue-600">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#">
                      <span className="text-gray-600 font-semibold text-lg hover:text-blue-600">
                        Services
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link href="#">
                      <span className="text-gray-600 font-semibold text-lg hover:text-blue-600">
                        Blogs
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Link href="404.html">
              <span className="float-right font-roboto px-5 py-2 text-white font-bold ml-0 tracking-wider bg-[#ffb118] hover:bg-[#272b3d] ">
                Get A Quote
              </span>
            </Link>
          </div>
        </div>
      </header>
      <div
        className="relative overflow-hidden flex items-center justify-center w-full h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/img/banner-img1.webp')",
        }}
      >
        <span className="banner-transparent"></span>
        <div className="relative z-10 container mx-auto">
          <div className="flex flex-wrap">
            {/* Text Section */}
            <div className="w-full md:w-7/12 ">
              <div className="text-white m-40">
                <h5 className="text-lg text-white uppercase font-semibold tracking-widest">
                  We Provide
                </h5>
                <h1 className="text-4xl mb-5 mt-3 text-white md:text-[40px] font-semibold leading-[50px] -tracking-tighter uppercase">
                  World Class <span className="text-yellow-400">Logistic</span>{" "}
                  Services
                </h1>
                <p className="text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas is, augue nec pretium ornare, ante mauris congue dui,
                  eu porttit psum non purus ellentesque sit amet.
                </p>
                <div className="flex gap-4 mt-8">
                  <button class="float-left border-2 hover:bg-[#ffb118] border-white font-bold text-white m-0 mr-5 px-6 py-2">
                    Button Text
                  </button>

                  <Link
                    href="/404"
                    className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:text-white transition hover:bg-[#ffb118]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:block absolute right-16 bottom-0 md:w-5/12 ">
              <Image
                src="/Images/img/banner-thumb-1.png"
                alt="Banner Thumbnail"
                width={900}
                height={900}
                className="mx-auto h-[600px] w-auto "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-20 px-28 ">
        <div className="text-center relative mb-[66px] mx-auto max-w-2xl">
          <span className="absolute left-1/2 top-[-49px] opacity-[0.04] text-[80px] font-bold -ml-[47px] tracking-[1.5px]">
            01
          </span>
          <h2 className="text-3xl font-bold">
            Our <span className="text-[#ffb118]">Services</span>
          </h2>
          <p className="text-gray-600 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            venenatis augue nec pretium ornare, ante mauris congue dui.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mx-28">
          {services.map((service, index) => (
            <div className="group">
              <div
                key={index}
                className="bg-[#f5f5f5] group-hover:bg-[#272b3d] relative  rounded-lg p-8 text-center transition duration-300"
              >
                <i
                  className={`fa ${service.icon} group-hover:bg-[#ffb118] absolute left-[-20px] border-[#272b3d] top-[-20px] w-[60px] h-[60px] bg-[#f5f5f5] rounded-full text-center text-[20px] py-[18px] px-0 border border-dashed`}
                ></i>
                <h5 className="text-lg font-semibold mb-2 group-hover:text-white">
                  {service.title}
                </h5>
                <p className="text-gray-600 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full pt-10 pb-20 px-28 ">
        <div className="text-center relative mb-[66px] mx-auto max-w-2xl">
          <span className="absolute left-1/2 top-[-49px] opacity-[0.04] text-[80px] font-bold -ml-[47px] tracking-[1.5px]">
            02
          </span>
          <h2 className="text-3xl font-bold">
            Latest <span className="text-[#ffb118]">News</span>
          </h2>
          <p className="text-gray-600 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            venenatis augue nec pretium ornare, ante mauris congue dui.
          </p>
        </div>

        <div className="moverspackers-blog moverspackers-blog-classic">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <li key={post.id} className="flex flex-col">
                <figure className="relative">
                  <Link href={post.link}>
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <i className="fa fa-share absolute top-2 right-2 text-white"></i>
                  </Link>
                  <time
                    dateTime="2008-02-14 20:00"
                    className="absolute left-[10px] top-[10px] w-[55px] text-white bg-[#272b3d] font-bold text-[15px] p-[8px_10px] text-center leading-[18px] tracking-[1px] border-b-[3px] border-[#ffb118] z-10 uppercase"
                  >
                    {post.date}
                  </time>
                </figure>
                <div className="moverspackers-blog-classic-wrap bg-[#f5f5f5]">
                  <ul className="moverspackers-blog-option bg-[#272b3d] text-white  text-sm flex  w-[84%] relative m-0 p-[9px_30px_12px] border-b-[3px] border-[#ffb118] ">
                    <li className="mr-5 pr-5 border-r border-gray-50">
                      Posted By:{" "}
                      <Link href="404.html" className="">
                        {post.author}
                      </Link>
                    </li>
                    <li>
                      Comments:{" "}
                      <Link href="404.html" className="">
                        {post.comments}
                      </Link>
                    </li>
                  </ul>
                  <div className="moverspackers-blog-classic-text  p-5">
                    <h5>
                      <Link
                        href={post.link}
                        className="text-xl font-semibold text-black hover:text-blue-500"
                      >
                        {post.title}
                      </Link>
                    </h5>
                    <p className="text-gray-700 mt-2">{post.description}</p>
                    <Link
                      href={post.link}
                      className="moverspackers-readmore-btn text-[13px] bg-[#ffb118]  mt-4 inline-block text-gray-600 border border-gray-300 px-3 py-2"
                    >
                      Read More{" "}
                      <i className="fa fa-angle-double-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
