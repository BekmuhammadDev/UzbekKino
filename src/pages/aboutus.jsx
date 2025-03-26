import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import backgroundImage from "../assets/images/bgimg.png";
import illusionbg from "../assets/illusionbg.svg";
import InfiniteSlider from "../components/infiniteSlider";
import AnimatedButton from "../components/AnimatedBtn";

const cards = [
  { id: 1, image: backgroundImage },
  { id: 2, image: "https://picsum.photos/1920/1080?random=2" },
  { id: 3, image: "https://picsum.photos/1920/1080?random=3" },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <main>
      <section
        className="relative bg-cover h-screen flex py-[170px] transition-all duration-700"
        style={{ backgroundImage: `url(${cards[activeIndex].image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-700"></div>

        <div className="container mx-auto relative flex justify-between items-center">
          {/* Chap tomondagi asosiy matn */}
          <div className="relative text-white max-w-2xl p-6">
            <h1 className="text-5xl font-bold mb-5">“HAMILTON” TEATRI</h1>
            <p className="text-xl font-normal mb-10">
              Hamilton: American Musical - bu musiqa, so'zlar va Lin-Manuel
              Mirandaning kitobi bilan kuylangan va rap qilingan biografik
              musiqiy asar.
            </p>
            <button className="px-[88px] py-3 bg-white text-black uppercase text-xl font-normal rounded-lg hover:bg-blue-600 hover:text-white transition">
              Ko'rish
            </button>
          </div>

          {/* O'ng tomondagi kartalar slayderi */}
          <div className="absolute right-0 top-0 flex gap-5 items-center">
            <div className="absolute top-0">
              <h1 className=" text-white font-bold text-2xl">YANGLIKLAR</h1>
            </div>

            <div className="flex justify-center items-center h-screen gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className={`relative w-[220px] h-[320px] bg-cover bg-center rounded-lg cursor-pointer transition-all duration-700 
            ${index === activeIndex ? "scale-110 z-10 shadow-lg" : "opacity-70"}
          `}
                  style={{ backgroundImage: `url(${card.image})` }}
                  animate={{ opacity: index === activeIndex ? 1 : 0.6 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            <div className="absolute ml-20">
              {/* Chapga o'tish tugmasi */}
              <button
                onClick={handlePrev}
                className="absolute left-[-50px] bg-gray-400 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
              >
                <FaChevronLeft size={24} />
              </button>

              {/* O'ngga o'tish tugmasi */}
              <button
                onClick={handleNext}
                className="absolute right-[-60px] bg-gray-400 bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-80 transition"
              >
                <FaChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-10 pb-20 bg-white text-black">
        <div className="container mx-auto">
          <div className=" flex items-center gap-10">
            <div className="w-2/2">
              <img src={PonoramaImg} alt="Film Strip" className="w-full" />
            </div>

            <div className="pl-10 items-center">
              <div className="ml-3">
                <h1 className="font-bold text-5xl mb-8">“UZKINO” TARIXI</h1>
                <p className="text-xl font-normal ">
                  — Oʻzbekiston bosh kinoarxivi, Xalqaro kinoarxivlar
                  federatsiyasi (FIAF) aʼzosi
                </p>
              </div>

              <div className="grid grid-cols-3 gap-20 text-center text-xl pt-16 font-bold">
                <div>
                  <span className="text-blue-600 font-bold text-[40px]">
                    710 856
                  </span>
                  <p className="text-gray-600 text-lg">
                    Qogʻoz hujjatlar arxivi
                  </p>
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-[40px]">
                    1 250 000
                  </span>
                  <p className="text-gray-600 text-lg">Milliy kino fondi</p>
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-[40px]">
                    1 762 000
                  </span>
                  <p className="text-gray-600 text-lg">Xorijiy filmlar fondi</p>
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-[40px]">
                    1 762 000
                  </span>
                  <p className="text-gray-600 text-lg">Xorijiy filmlar fondi</p>
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-[40px]">
                    710 856
                  </span>
                  <p className="text-gray-600 text-lg">
                    Qogʻoz hujjatlar arxivi
                  </p>
                </div>
                <div>
                  <span className="text-blue-600 font-bold text-[40px]">
                    1 250 000
                  </span>
                  <p className="text-gray-600 text-lg">Milliy kino fondi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10">
            <div className="w-1/4 h-px bg-gray-400"></div>
            <p className="mx-4 text-xl text-gray-700 text-center font-bold max-w-2xl">
              Gosfilmofond bugungi kunda O‘zbekiston kinosini rivojlantirish va
              ommalashtirishda muhim o‘rin tutadigan noyob ko‘p funksiyali
              majmuadir.
            </p>
            <div className="w-1/4 h-px bg-gray-400"></div>
          </div>

          <div className="text-center mt-6">
            <button className="px-10 py-3 bg-black text-white text-xl font-medium rounded-lg hover:bg-blue-600 transition">
              KO‘RISH
            </button>
          </div>
        </div>
      </section>

      <section
        className="container w-full h-[464px] flex flex-col items-center justify-center relative px-10"
        style={{
          backgroundImage: `url(${illusionbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white krone font-normal text-[48px] leading-9 text-center absolute top-[20%]">
          "ALISHER NAVOIY" TEATRI
        </h1>
        <div className="w-[861px] flex items-center justify-center mt-5 px-5">
          <p className="mont font-normal text-[20px] text-white leading-9 text-center">
            Hamilton: American Musical - bu musiqa, so'zlar va Lin-Manuel
            Mirandaning kitobi bilan kuylangan va rap qilingan biografik musiqiy
            asar. Hamilton: American Musical - bu musiqa, so'zlar va Lin-Manuel
            Mirandaning kitobi bilan kuylangan va rap qilingan biografik musiqiy
            asar.
          </p>
        </div>
      </section>
      <section className="w-full h-[650px]">
        <h1 className="mont font-bold text-[48px] text-center mt-10">
          Onlayn kino
        </h1>
        {/* 
        <div className="flex gap-10">
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>{" "}
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>{" "}
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>{" "}
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>{" "}
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>{" "}
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>{" "}
          <div className="flex-col gap-5">
            <img src={museyimg} alt="" className="w-[250px] h-[200px]" />
            <article>
              <p className="mont font-bold text-[20px]">— Teatr </p>
              <span className="mont text-[16px]">7 oy avval</span>
            </article>
          </div>
        </div> */}

        <InfiniteSlider />
        <AnimatedButton />
      </section>
    </main>
  );
};

export default AboutUs;
