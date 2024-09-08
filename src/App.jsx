import React from "react";
import illustration from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";
const App = () => {
  return (
    <div className="flex  bg-yellow-300 max-h-[960px] w-full h-screen justify-center items-center relative">
      <div className="absolute w-[384px] h-[522px] bg-gray-950 rounded-[20px] border-gray-400 translate-x-2 translate-y-2"></div>
      <div className="relative  card w-[384px] h-[522px] bg-white border-gray-950 border rounded-[20px] justify-center p-[24px] hover:cursor-pointer ">
        <div>
          <img
            src={illustration}
            alt="illustration"
            className=" w-full h-auto rounded-[10px]"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div class="w-[82px] h-[29px] bg-yellow-300 text-gray-950 text-center  font-bold font-sans mt-[24px] flex justify-center items-center inline-block rounded-[4px] mb-2">
            <a href="#">
              <h1>Learning</h1>
            </a>
          </div>
          <div className="text-gray-950 text-start  font-sans text-[14px]">
            <h1>Published 21 Dec 2023</h1>
          </div>
          <div className="mt-2 text-yellow-300 text-start font-sans font-bold text-[24px]">
            <h1>HTML & CSS foundations</h1>
          </div>
          <div className="mt-2 text-gray-500 font-sans text-start ">
            <p>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="justify-center items-center content-center mr-2">
            <img
              src={avatar}
              alt="avatar"
              className="w-[32px] h-[32px] rounded-full"
            />
          </div>
          <div className="justify-center text-center items-center content-center">
            <h1 className="text-gray-950  font-sans font-bold text-[14px]">
              Greg Hooper
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
