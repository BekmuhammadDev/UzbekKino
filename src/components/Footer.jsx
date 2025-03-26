import React from "react";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[244px] container mx-auto bg-black p-10">
      <div className="text-white flex justify-around items-center h-full">
        <article className="flex-col">
          <h1 className="mont font-bold text-[24px] leading-6 text-start">
            Aloqa
          </h1>
          <p className="mont font-normal text-[20px] leading-4 my-3">
            +998 (93) 5-53335-2
          </p>
          <p className="mont font-normal text-[20px] leading-4">
            example@mail.uz
          </p>
        </article>
        <article className="flex-col">
          <h1 className="mont font-bold text-[24px] leading-6 text-start">
            Xizmat
          </h1>
          <p className="mont font-normal text-[20px] leading-4 my-3">
            Laboratoriya
          </p>
          <p className="mont font-normal text-[20px] leading-4">
            Tadqiqotlar uchun{" "}
          </p>
        </article>
        <article className="flex-col">
          <h1 className="mont font-bold text-[24px] leading-6 text-start">
            Biz haqimizda
          </h1>
          <p className="mont font-normal text-[20px] leading-4 my-3">
            Bizning faoliyatimiz
          </p>
          <p className="mont font-normal text-[20px] leading-4">
            Fondni haqida
          </p>
        </article>
        <article className="flex-col">
          <h1 className="mont font-bold text-[24px] leading-6 mb-6">Media</h1>
          <div className="flex items-center justify-center gap-2 text-[28px]">
            <RiTelegram2Fill />
            <FaInstagram />
            <FaFacebookF />
            <BsYoutube />
          </div>
        </article>
      </div>
      <h1 className="text-center text-white relative top-0">
        2025 @iPro Design
      </h1>
    </div>
  );
};

export default Footer;
