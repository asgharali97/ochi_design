import React from "react";

const Review = () => {
  return (
    <>
      <div className="w-full py-14">
        <div className="px-14 py-8">
          <h1 className="text-5xl font-semibold">Clients' reviews</h1>
        </div>
        <div className="border-t-1 border-zinc-600 mt-4"></div>
        <div className="w-full px-14">
          <div className="py-4 flex justify-between">
            <div className="">
              <span className="underline">Karman Ventures</span>
            </div>
            <div className="flex flex-col">
              <span>Services:</span>
              <div className="btns mt-12 flex flex-col">
                <button className="my-2 border py-2 px-4 rounded-full uppercase font-light text-sm text-gray-200 cursor-pointer">
                  Investor Deck
                </button>
                <button className="w-[9vw] my-2 border py-2 px-2 rounded-full uppercase font-light text-sm text-gray-200 cursor-pointer">
                  Sales deck
                </button>
              </div>
            </div>
            <div>
              <span>William Barnes</span>
              <div className="img w-24 h-24 mt-12">
                <img
                  src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                  className="w-full h-full rounded-lg"
                  alt=""
                />
              </div>
              <div className="desc mt-4 mb-2 w-[30vw] h-auto rounded-lg">
                <p>
                  They were transparent about the time and the stages of the
                  project. The end product is high quality, and I feel confident
                  about how they were handholding the client through the
                  process. I feel like I can introduce them to someone who needs
                  to put a sales deck together from scratch, and they would be
                  able to handhold the client experience from 0 to 100 very
                  effectively from story to design. 5/5
                </p>
              </div>
            </div>
            <div className="">
              <span className="font-normal text-gray-400 cursor-pointer">
                Read
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-6 border-t-1 border-b-1 border-zinc-600">
          <div className="flex justify-between py-4 px-14">
            <span className="underline">Planetly</span>
            <span>Nina Walloch</span>
            <span className="underline uppercase">Read</span>
          </div>
        </div>
        <div className="w-full border-t-1 border-b-1 border-zinc-600">
          <div className="flex justify-between py-4 px-14">
            <span className="underline">Workiz Easy</span>
            <span>Tomer Levy</span>
            <span className="underline uppercase">Read</span>
          </div>
        </div>
        <div className="py-12 px-14 my-12 flex gap-5">
          <div className="relative bg-[#004d43] w-[42vw] h-[52vh] flex items-center justify-center rounded-lg">
            <img
              className="w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
            <button
              className="absolute py-1 px-2 m-6 w-[8vw] rounded-full border
              border-[#cdea68] text-[#cdea68] font-light text-sm bottom-0 left-0"
            >
              ©2019-2022
            </button>
          </div>
          <div className="relative bg-[#212121] w-[23vw] h-[52vh] flex items-center justify-center rounded-lg">
          <img
              className="w-[10vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button
              className="absolute py-1 px-3 m-6 w-auto rounded-full border
              border-[#fff] text-[#fff] font-light text-sm bottom-0 left-0 uppercase"
            >
            Rating 5.0 on Clutch
            </button>
          </div>
          <div className="relative bg-[#212121] w-[23vw] h-[52vh] flex items-center justify-center rounded-lg">
          <img
              className="w-[8vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button
              className="absolute py-1 px-3 m-6 w-auto rounded-full border
              border-[#fff] text-[#fff] font-light text-sm bottom-0 left-0 uppercase"
            >
            Business Bootcamp Alumni
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
