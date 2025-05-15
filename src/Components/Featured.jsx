import React, { useRef } from "react";
import gsap from "gsap";
const Featured = () => {
  const titleRef = useRef([]);

  const projectDetails = [
    {
      title: "FYDE",
      img: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
    },
    {
      title: "carboard spaceship",
      img: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
    },
  ];

  // if(titleRef.current.length !== projectDetails.length) {
  //   titleRef.current = Array(projectDetails.length)
  //   .fill()
  //   .map((_,i) => titleRef.current[i] || React.createRef());
  // }
  // const handleHover = (index) => {
  //   console.log("enter");
  //   gsap.to(titleRef.current[index].current, {
  //     // y: -50,
  //     duration: 0.5,
  //     ease: "power2.in",
  //     display: "block",
  //   });
  // };

  // const handleMouseLeave = (index) => {
  //   gsap.from(titleRef.current[index].current, {
  //     // y: -50,
  //     duration: 0.5,
  //     ease: "power2.out",
  //     display: "none",
  //   });
  // };
  return (
    <>
      <div className="w-full py-14">
        <h1 className="text-5xl font-semibold px-14">Featured Projects</h1>
      </div>
      <div className="border-t-1 border-zinc-600 mt-4"></div>
      <div className="px-14">
        <div className="cards w-full mt-10 flex gap-8">
          {projectDetails.map((item, index) => {
            return (
              <div className="cardcontainer relative w-1/2 h-[80vh]" key={index}>
                <div
                  className="card w-full h-full rounded-xl overflow-hidden"
                  // onMouseEnter={() => handleHover(index)}
                  // onMouseLeave={() => handleMouseLeave(index)}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full rounded-xl"
                  />
                {/* <div
                  ref={titleRef.current[index]}
                  className="text-sm flex items-center left-34 uppercase text-[#cdea68] "
                >
                  <span>
                  {item.title}
                  </span>
                </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
