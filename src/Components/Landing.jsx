import React, { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import {useGSAP} from "@gsap/react";
import { gsap } from "gsap";
const Landing = () => {
  const maskerContent = ["We create", "eye-opening", "presentations"];
  const langingFotter = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  const headImgRef = useRef()

  useGSAP(()=>{
      gsap.from(headImgRef.current,{
        x:-100,
        duration:0.5,
        ease:'power2.in',
      })
  })  
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-0.8" data-scroll-offset="0,-100%" data-scroll-postion="top" className="w-full min-h-screen bg-zinc-900 pt-[130px]">
        <div className="textsturcture px-14">
          {maskerContent.map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-center">
                {index === 1 && (
                  <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" 
                  alt="" 
                  className="w-[8rem] h-[6vw] rounded-md mt-3 mr-4"
                  ref={headImgRef}
                  />
              )}
                <h1 className="Grostesk uppercase leading-[7.5vw] text-[8rem] font-bold">
                  {item}
                </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="broder border-t-[1px] border-zinc-700 flex px-14 mt-24">
          {langingFotter.map((item, index) => {
            return (
              <div key={index} className={`w-[40%] flex ${index === 1 && "justify-center"} items-center  mt-4`}>
                <h4 className={`${index === 1 && "mr-[4rem]"}`}>{item}</h4>
              </div>
            );
          })}
          <div className="flex gap-4 items-center mt-4">
          <div className="border-2 border-zinc-700 px-4 py-1 uppercase rounded-full">
            <span className="leading-none text-sm font-normal tracking-tight">
              START THE PROJECT
            </span>
          </div>
            <div className="icon flex justify-center items-center  h-10 w-10 rounded-full border-2 border-zinc-700 rotate-[-45deg]">
            <FaArrowRightLong />
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
