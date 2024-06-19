import React from "react";
import userImg from "../img/profile-pic.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="md:px-10 py-5 bg-[#1c1b23] flex items-center justify-between">
      <div className="flex items-center gap-10">
        <Image
          src={userImg}
          alt=""
          width={120}
          height={120}
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-1 text-center">
        <h1 className=" text-3xl font-bold text-zinc-200">Suraj Maurya</h1>
        <h1 className=" text-md font-medium text-zinc-200">Fullstack Developer</h1>

        
      </div>
      </div>
      
      <div>
        <button className="hidden md:flex px-4 py-2 text-xs font-semibold text-[#8b8a91] w-max bg-[#14131a] rounded-md  items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b8a91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          Connect with me on linkedin
          </button>
      </div>
    </div>
  );
};

export default Banner;
