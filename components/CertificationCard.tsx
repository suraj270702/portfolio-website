import Image from "next/image";
import Link from "next/link";
import hackerRankImg from "../img/hackerrank-software.png";
import weframeTechImg from '../img/weframe_tech_logo.jpg'
import internshipImg from '../img/1685461414613.jpg'
import React from "react";

const CertificationCard = ({title,link,internship}:{title:String,link:String,internship?:Boolean}) => {
  return (
    <Link href={`${link}`} className="bg-white  rounded-lg grid gap-3">
      <Image src={internship ? internshipImg : hackerRankImg } alt="" height={200} width={700} className=" object-cover h-24 " />
      <div className="p-5">
        {
          !internship && (
            <h1 className="text-[#4f4f52] text-sm font-bold">
          Hackerank Skills Certifications {title}
        </h1>
          )
        }
        {
          internship && (
            <h1 className="text-[#4f4f52] text-sm font-bold">
           {title}
        </h1>
          )
        }
      </div>
    </Link>
  );
};

export default CertificationCard;
