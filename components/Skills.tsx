import Link from "next/link";
import React from "react";

const Skills = () => {
  return (
    <div className="lg:px-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className=" col-span-2 md:col-span-2 lg:col-span-3">
        <div className="mt-2 mb-5 text-zinc-200 text-xl">What I know</div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className=" flex flex-col gap-4 p-4 bg-[#1c1b23] rounded-md shadow-lg">
            <div className="text-[#8b8a91] font-medium text-lg tracking-wider">
              Frontend
            </div>
            <div className=" flex flex-wrap gap-2">
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md">
                HTML
              </div>
             
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-blue-500/60">
                Tailwind
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md">
                CSS
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-yellow-500/60">
                Javascript
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md">
                Typescript
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-blue-500/60">
                Reactjs
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md">
                Nextjs 13
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-4 bg-[#1c1b23] rounded-md shadow-lg">
            <div className="text-[#8b8a91] font-medium text-lg tracking-wider">
              Backend
            </div>
            <div className=" flex flex-wrap gap-2">
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-green-500/60">
                Nodejs
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md">
                Expressjs
              </div>

              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md">
                NextAuth
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-4 bg-[#1c1b23] rounded-md shadow-lg">
            <div className="text-[#8b8a91] font-medium text-lg tracking-wider">
              Database
            </div>
            <div className=" flex flex-wrap gap-2">
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-green-500/60">
                Mongodb
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-red-500/60">
                Mysql
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 p-4 bg-[#1c1b23] rounded-md shadow-lg">
            <div className="text-[#8b8a91] font-medium text-lg tracking-wider">
              Others
            </div>
            <div className=" flex flex-wrap gap-2">
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-green-500/60">
                Postman
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-red-500/60">
                Git
              </div>
              <div className=" bg-[#14131a] text-xs text-[#8b8a91] p-2 rounded-md border border-blue-500/60">
                Vscode
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1c1b23] grid gap-6 p-6 shadow-lg rounded-md">
        <div className="text-zinc-200 text-xl font-medium">More Projects</div>
        <div className=" grid grid-cols-1 gap-4 rounded-lg">
          <Link href={"https://weather-app-surajmaurya.vercel.app/"}>
            <div className="flex flex-col px-4 py-2">
              <div className="text-sm font-medium">Weather App</div>
              <div className="text-[#4f4f52] text-xs">
                A simple weather app built with React, using OpenWeatherMap API.
              </div>
            </div>
          </Link>
          <Link href={"https://nestmart.vercel.app/"}>
            <div className="flex flex-col px-4 py-2">
              <div className="text-sm font-medium">NestMart</div>
              <div className="text-[#4f4f52] text-xs">
                A Grocery web App Frontend built with Nextjs.
              </div>
            </div>
          </Link>
          <Link href={"https://bidcraft.vercel.app/"}>
            <div className="flex flex-col px-4 py-2">
              <div className="text-sm font-medium">Bidcraft</div>
              <div className="text-[#4f4f52] text-xs">
                A Auction web app Frontend built with Nextjs,.
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
