import React, { useEffect } from "react";

const Play = () => {
  const [angle, setAngle] = React.useState(0);
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
      <div className="w-full h-screen overflow-hidden bg-zinc-300">
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
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
    </>
  );
};

export default Play;
