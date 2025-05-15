import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ label = "Read More" }) => {
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const tl = useRef(null);
  const [hoverBtn, setHoverBtn] = useState(false);
  const circleRef = useRef();
  const innerCircle = useRef();

  const btnHover = () => {
    setHoverBtn(true);
    gsap.to(circleRef.current, {
      "padding-right": "0.5rem",
    });
    gsap.to(circleRef.current, {
      duration: 0.5,
      ease: "power2.in",
    });
    gsap.to(innerCircle.current, {
      height: "2.5rem",
      width: "2.5rem",
    });
  };
  const btnHoverLeave = () => {
    setHoverBtn(false);
    gsap.to(circleRef.current, {
      duration: 0.5,
      ease: "power2.out",
      "padding-right": "1.5rem",
      onComplete: () => {
        gsap.set(circleRef.current, {
          clearProps: "all",
        });
      },
    });
    gsap.to(innerCircle.current, {
      height: "0.5rem",
      width: "0.5rem",
    });
   
  };

  useEffect(() => {
    const button = buttonRef.current;
    const overlay = overlayRef.current;

    const handleEnter = () => {
      gsap.set(overlay, { y: "100%", borderRadius: "5rem" });

      tl.current = gsap.timeline();
      tl.current.to(overlay, {
        y: 0,
        borderRadius: "0rem",
        duration: 0.3,
        ease: "expo",
      });
    };

    const handleLeave = () => {
      gsap.to(overlay, {
        y: "-100%",
        borderRadius: "5rem",
        duration: 0.2,
        ease: "power2.out",
      });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className="relative w-auto bg-[#262525] text-white mt-6 pl-6 py-6 h-[9vh] rounded-full overflow-hidden flex items-center justify-between items- gap-6 cursor-pointer border border-zinc-900"
      onMouseEnter={btnHover}
      onMouseLeave={btnHoverLeave}
    >
      <span
        ref={overlayRef}
        className="absolute left-0 top-0 w-full h-full bg-[#0b0b0b] z-0"
      ></span>
      <span className="relative z-10">{label}</span>
      <div
        ref={circleRef}
        className="h-12 w-12 pr-6 flex justify-end items-center z-10"
      >
        <div
          ref={innerCircle}
          className="h-2 w-2 rounded-full bg-white  flex justify-center items-center"
        >
          {hoverBtn && (
            <FaArrowRightLong className=" fill-black rotate-[-46deg]" />
          )}
        </div>
      </div>
    </button>
  );
};

export default Button;
