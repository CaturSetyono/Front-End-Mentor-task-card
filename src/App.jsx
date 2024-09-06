import React from "react";
import illustration from "./assets/images/illustration-article.svg";
const App = () => {
  return (
    <div className="flex bg-yellow-300 max-h-[960px] w-full h-screen justify-center items-center relative">
    <div className="absolute w-[384px] h-[522px] bg-gray-950 rounded-[20px] border-gray-400 translate-x-2 translate-y-2"></div>
      <div className="relative  card w-[384px] h-[522px] bg-white border-gray-950 border rounded-[20px] justify-center p-[24px]">
        <div><img src={illustration} alt="illustration" className=" w-full h-auto rounded-[10px]" /></div>
        <div class="w-[82px] h-[29px] bg-yellow-300 text-gray-950 text-center  font-bold font-sans mt-[24px] flex justify-center items-center inline-block rounded-[4px] mb-2">
        <h1>Learning</h1>
        </div>
        
    </div>
  </div>
  );
};

export default App;
