import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({content,...props}) => {
  return (
    <>
      <button className="btn h-[9vh] w-auto flex gap-4 items-center justify-between mt-6 py-6 pl-6 text-sm rounded-full  uppercase bg-[#262820] text-white cursor-pointer relative"
      props={props}
      >
         <span>{content}</span>
        <div className="circle h-16 w-16 pr-2 flex justify-center items-center">
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
            <FaArrowRightLong className=" fill-black rotate-[-46deg]" />
          </div>
        </div>
      </button>
    </>
  );
};

export default Button;
