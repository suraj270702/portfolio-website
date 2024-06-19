import React from "react";
import bikegaragImg from "../img/bike-grage.jpg";
import ecommerceapp from "../img/fashion-shop.jpg";
import dsaNavigatorApp from "../img/dsa-image.jpg";
import cricketImg from "../img/cricket-1.png";
import Image, { StaticImageData } from "next/image";

import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects: {
    name: string;
    description: string;
    img: StaticImageData;
    link: string;
  }[] = [
    {
      name: "BikeGarage",
      description:
        "A full stack Next.js project for managing bike rentals and repairs.",
      img: bikegaragImg,
      link: "https://bikegarage.vercel.app/",
    },
    {
      name: "FashionDestination",
      description:
        "A MERN stack project for exploring and purchasing fashion items.",
      img: ecommerceapp,
      link: "https://fashiondestinationecommerceapp.netlify.app/",
    },
    {
      name: "DsaNavigator",
      description:
        "A Reactjs App for DSA topics and important practice problems.",
      img: dsaNavigatorApp,
      link: "https://dsanavigator.netlify.app/",
    },
    {
      name: "AllAboutCricket",
      description:
        "An Reactjs API-based project displaying player rankings and stats.",
      img: cricketImg,
      link: "https://allaboutcricket.netlify.app/",
    },
  ];
  return (
    <div className="mt-5 pb-8 lg:px-10 mx-auto flex flex-col gap-8">
      <div className="text-xl font-medium text-zinc-200">Projects</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-5 w-full">
        {projects.map((item, i) => (
          <ProjectCard
            key={i}
            name={item.name}
            img={item.img}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
