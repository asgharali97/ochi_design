import React from "react";

const Review = () => {
  return (
    <>
      <div className="w-full py-14">
      <div className="heading px-14 py-8">
            <h1 className='text-5xl font-semibold'>Clients' reviews</h1>
        </div>
      <div className="border-t-1 border-zinc-600 mt-4"></div>
      <div className="w-full px-14">
        <div className="py-4 flex gap-12 justify-between">
            <span className="underline">Karman Ventures</span>
            <span>Services:</span>
            <span>William Barnes</span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Review;
