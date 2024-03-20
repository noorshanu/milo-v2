import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function footer() {
  return (
    <section className=" relative z-20 overflow-hidden">
 
      <div className=" container-wrapper px-4 py-5">
      
   
     

        <div className=" bg-[#2f313498] border-[#585858] border-2 rounded-full py-4 px-7 my-10 max-w-[400px] mx-auto">
        <div className=" flex items-center justify-center gap-6">
                <a href="https://t.me/milomem" target="_blank" className=" text-4xl">
                  <FaTelegramPlane />
                </a>
                <a href="https://twitter.com/LexieSolll" className=" text-4xl" target="_blank">
                <FaXTwitter />
                </a>
                <a href="/" className=" text-4xl">
                  <FaInstagram />
                </a>
                <a href="/" className=" text-4xl">
                  <FaMedium />
                </a>
              </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
