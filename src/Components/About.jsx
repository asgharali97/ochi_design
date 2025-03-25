import React, { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
const About = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  const circleRef = useRef()
  const innerCircle = useRef()
  const btnHover = () => {
    setHoverBtn(true)
    gsap.to(circleRef.current, {
      "padding-right":"0.5rem",
    })
    gsap.to(circleRef.current, {
      duration: 0.5,
      ease: "power2.in",
    })
    gsap.to(innerCircle.current, {
      "height":"2.5rem",
      "width":"2.5rem",
    })
  }
  const btnHoverLeave = () => {
     setHoverBtn(false)
     gsap.to(circleRef.current, {
      duration: 0.5,
      ease: "power2.out",
      "padding-right":"1.5rem",
      onComplete:()=>{
        gsap.set(circleRef.current,{
          clearProps:"all",
        })
      }
    })
    gsap.to(innerCircle.current, {
      "height":"0.5rem",
      "width":"0.5rem",
    })
  }
  return (
    <>
      <div className="w-full py-24 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black">
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
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>FaceBook</li>
                <li>Behance</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 py-5 border-t-1 border-[#99ad53] text-[#262820]">
          <div className="px-14">
            <div className="flex justify-between">
              <div>
                <h3 className="text-5xl font-bold">Our approach:</h3>
                <button
                  onMouseEnter={() => btnHover()}
                  onMouseLeave={() => btnHoverLeave()}
                  className="btn h-[9vh] w-[13vw] flex items-center justify-between mt-6 py-6 pl-6 text-sm rounded-full uppercase bg-[#262820] text-white cursor-pointer hover:bg-[#0e0f0b]"
                >
                  Read more
                  <div ref={circleRef} className="h-12 w-12 pr-6 flex justify-end items-center">
                      <div ref={innerCircle} className="h-2 w-2 rounded-full bg-white  flex justify-center items-center">
                        {
                          hoverBtn && (
                            <FaArrowRightLong className=" fill-black rotate-[-46deg]" />
                          )
                        }
                      </div>
                  </div>
                  {/* {hoverBtn ? (
                    <div className="w-16 pr-2 flex justify-end items-center">
                      <div className="h-12 w-12 rounded-full bg-white flex justify-center items-center">
                        <FaArrowRightLong className="fill-black rotate-[-46deg]" />
                      </div>
                    </div>
                  ) : (
                    <div ref={circleRef} className="pr-6">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                  )} */}
                </button>
              </div>
              <div className="img w-1/2">
                <img
                  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
                  alt=""
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
