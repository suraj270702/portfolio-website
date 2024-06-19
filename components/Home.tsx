import React from "react";
import Banner from "./Banner";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Certifications";
import Education from "./Education";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex text-white hide h-screen">
      <div className="hidden lg:block min-w-[300px] h-screen">
        <div className="w-[260px] mx-auto bg-[#1c1b23] h-[90%] rounded-md mt-[60px] p-5 ">
          <div>
            <Link
              href={""}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b8a91"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Home</h1>
            </Link>
            <Link
              href={""}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b8a91"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-code"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Projects</h1>
            </Link>
            <Link
              href={""}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b8a91"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-flame"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Skills</h1>
            </Link>
            <Link
              href={""}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b8a91"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Education</h1>
            </Link>
            <div className="mt-5 text-[#8b8a91]">Socials</div>
            <Link
              href={"https://www.instagram.com/suraj270702/"}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#b5179e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Instagram</h1>
            </Link>
            <Link
              href={"https://github.com/suraj270702"}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2a9d8f"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Github</h1>
            </Link>
            <Link
              href={"https://stackoverflow.com/users/23716133/suraj-maurya"}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f77f00"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-layers"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Stack overflow</h1>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/suraj-maurya-8ab6711ab"}
              className="flex items-center gap-4 p-4 hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0277b5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <h1 className="text-sm text-[#8b8a91]">Linkedin</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-5 w-full">
        <div className="p-5 flex items-center justify-between lg:justify-end flex-row-reverse lg:flex-row">
          <div className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8b8a91"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="flex lg:hidden cursor-pointer hover:text-primary transition-colors"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </div>
          <button className="text-xs py-2 px-4 rounded-md bg-[#2bd576] flex items-center gap-2">
            Contact{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
        <div
          style={{
            maxHeight: "calc(100vh - 80px)",
            overflowY: "auto",
          }}
          className="hide"
        >
          <div className="">
            <Banner />
            <Projects />
            <Skills />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
