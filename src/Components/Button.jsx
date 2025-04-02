import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";

const AnimatedButton = ({ content }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;

    // Hover effect: Background moves from bottom to top
    const handleMouseEnter = () => {
      gsap.fromTo(bg, { y: "100%" }, { y: "0%", duration: 0.5, ease: "power3.out" });
    };

    // Leave effect: Background continues moving up and disappears
    const handleMouseLeave = () => {
      gsap.to(bg, { y: "-100%", duration: 0.5, ease: "power3.in" });
    };

    bg.parentElement.addEventListener("mouseenter", handleMouseEnter);
    bg.parentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      bg.parentElement.removeEventListener("mouseenter", handleMouseEnter);
      bg.parentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button className="relative h-[9vh] w-auto flex gap-4 items-center justify-between mt-6 py-6 pl-6 text-sm rounded-full bg-[#262820] text-white cursor-pointer overflow-hidden">
      <span ref={bgRef} className="absolute inset-0 bg-black"></span>
      <span className="relative z-10">{content}</span>
      <div className="circle h-16 w-16 pr-2 flex justify-center items-center relative z-10">
        <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
          <FaArrowRightLong className="fill-black rotate-[-46deg]" />
        </div>
      </div>
    </button>
  );
};

export default AnimatedButton;
