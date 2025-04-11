import React, { useEffect,useState } from "react";
import Button from "./Button";

const CTA = () => {
  const content = ["Ready","to start","project?"];
  const [angle, setAngle] = useState(0);
    useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
  
        let deltax = x - window.innerWidth/2;
        let deltay = y - window.innerHeight/2;
  
        let angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
    
        setAngle(angle-180);
      });
    });

  return (
    <>
      <div data-scroll  data-scroll-speed="-0.9" data-scroll-section className="w-full min-h-screen relative py-12 px-14 bg-[#cdea68] overflow-hidden">
      <div className="flex justify-center absolute items-center w-[90%] h-96 mt-12">
      <div className="w-full h-full">
          <div className="absolute flex justify-center gap-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-96">
            <div className="flex justify-center items-center h-[14vw] w-[14vw] bg-zinc-100 rounded-full">
              <div className="flex justify-center items-center h-3/5 w-3/5 bg-zinc-800 rounded-full">
              <div style={{transform :  `translate(-0%, 0%) rotate(${angle}deg)`}} className="w-full h-8">
                  <div className="h-4 w-4 bg-white rounded-full"></div>
              </div>
              </div>
            </div>
            <div className="flex justify-center items-center h-[14vw] w-[14vw] bg-zinc-100 rounded-full">
              <div className="flex justify-center items-center h-3/5 w-3/5 bg-zinc-800 rounded-full">
                <div style={{transform :  `translate(0%, 0%) rotate(${angle}deg)`}} className="w-full h-8">
                  <div className="h-4 w-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="">
          {
            content.map((item, index) => (
              <div key={index} className="w-full flex justify-center items-center leading-none uppercase">
                <h1 className="text-[10rem] text-zinc-800 font-[800]">
                  {item}
                </h1>
              </div>
            ))
          }
        </div>
        <div className="flex justify-center items-center mt-4 flex-col">
        <Button label="start the project" />
        <span className="mt-6 uppercase text-zinc-800 font-semibold">OR</span>
        <Button label="Hello@ochi.design" bg="transparent" text="black"/>
        </div>
      </div>
    </>
  );
};

export default CTA;
