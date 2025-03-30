import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-100 text-zinc-800  py-12 px-14 ">
        <div className="flex justify-between">
          <div className="left">
            <h3 className="text-[6vw] font-bold uppercase leading-none">
              Eye- <br /> Opening
            </h3>
          </div>
          <div className="right">
            <h3
              className="text-[6vw]  font-bold uppercase leading-none"
              uppercase
            >
              Presentions
            </h3>
            <div className="links flex justify-between">
              <div className="">
                <div className="mt-32">
                  <span className="text-lg font-meduim 0">S:</span>
                  <ul className="mt-3 underline cursor-pointer">
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>FaceBook</li>
                    <li>Behance</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <span className="text-lg font-meduim 0">L:</span>
                  <ul className="mt-3 underline cursor-pointer">
                    <li>202-1965 W 4th Ave</li>
                    <li className="mb-4">Vancouver, Canada</li>
                    <li>30 Chukarina St</li>
                    <li>Lviv, Ukraine</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <span className="text-lg font-meduim 0">E:</span>
                  <ul className="mt-3 underline cursor-pointer">
                    <li>Hello@ochi.design</li>
                  </ul>
                </div>
              </div>
              <div className="relative w-[20%]">
                <div className="absolute bottom-0 left-0">
                  <span className="text-lg font-meduim 0">M:</span>
                  <ul className="mt-3 underline cursor-pointer">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Our Work</li>
                    <li>About us</li>
                    <li>Insigts</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
