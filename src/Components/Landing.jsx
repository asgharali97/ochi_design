import React from "react";

const Landing = () => {
  const maskerContent = ["We create", "eye-opening", "presentations"];
  const langingFotter = [
    "For public and private companies",
    "From the first pitch to IPO",
    "START THE PROJECT",
  ];
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 pt-[130px]">
        <div className="textsturcture px-14">
          {maskerContent.map((item, index) => {
            return (
              <div key={index} className="masker">
                <h1 className="Grostesk uppercase leading-[7.5vw] text-[8rem] font-bold">
                  {item}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="broder border-t-[1px] border-zinc-700 flex justify-between px-14 mt-24">
          {langingFotter.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-between mt-4">
                <h4 className="Grostes">{item}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Landing;
