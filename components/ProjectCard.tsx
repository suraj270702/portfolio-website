import Image, { StaticImageData } from 'next/image'
import bikegaragImg from "../img/bikegarage.png";
import React from 'react'
import Link from 'next/link';

const ProjectCard = ({name,img,description,link}:{name:string,img:StaticImageData,description:string,link:string}) => {
  return (
    <Link href={`${link}`} className=" flex flex-col overflow-hidden gap-3 rounded-lg text-zinc-800 bg-white">
          <Image src={img} alt="" height={700} width={700} className=" object-cover h-32 w-full " />
          <div className=" flex flex-col px-4 py-2 h-24">
            <div className=" font-bold">{name}</div>
            <div className="text-[#4f4f52] text-xs">
              {
                description
              }
            </div>
          </div>
        </Link>
  )
}

export default ProjectCard