import React, { useRef } from "react";
import Button from "./Button";
const About = () => {
  const socialLinks = ["Instagram", "LinkedIn", "FaceBook", "Behance"];
  const imgRef = useRef();
  const handleMouse = () => {
    console.log('enter')
  };
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-0.1"
        data-scroll-section
        className="w-full py-24 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black"
      >
        <div className="w-full px-14">
          <h2 className="text-[4vw] leading-none">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to <u>raise funds</u>, <u>sell products</u>,{" "}
            <u>explain complex ideas</u>, and <u> hire great people</u>.
          </h2>
        </div>
        <div className="mt-20 py-5 border-t-1 border-[#99ad53] text-[#262820]">
          <div className="px-14 flex">
            <h4 className="w-[50%] text-lg font-medium">
              What you can expect:
            </h4>
            <h4 className="w-[25%] text-lg font-medium mr-28">
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants. We believe the mix of strategy and
              design (with a bit of coffee) is what makes your message clear,
              convincing, and captivating.
            </h4>
            <div className="mt-32">
              <span className="text-lg font-meduim">S:</span>
              <ul className="mt-3">
                {socialLinks.map((item, index) => (
                  <li key={index} className="relative group cursor-pointer">
                    <span className="transition">{item}</span>
                    <span className="absolute left-0 bottom-0 w-full h-[0.8px] bg-zinc-900 transition-transform duration-200 group-hover:scale-x-0 origin-left group-hover:origin-right"></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 py-5 border-t-1 border-[#99ad53] text-[#262820]">
          <div className="px-14">
            <div className="flex justify-between">
              <div>
                <h3 className="text-5xl font-bold">Our approach:</h3>
                <Button label="Read More"/>
              </div>
              <div className="img w-1/2">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                  alt=""
                  ref={imgRef}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
