import React from "react";
import EducationCard from "./EducationCard";
import { StaticImageData } from "next/image";
import schoolImg from "../img/lg-school-building-clipart.jpg";
import collegeImg from "../img/good-colleges.webp";
import universityImg from "../img/university-image.png";

const Education = () => {
  const educations: {
    year: string;
    marks: string;
    name: string;
    img: StaticImageData;
  }[] = [
    {
      name: "Dr Antonio Da Silva Technical High School",
      year: "2016-2018",
      marks: "89.2%",
      img: schoolImg,
    },
    {
      name: "Guru Nanak Khalsa College",
      year: "2018-2020",
      marks: "81.54%",
      img: collegeImg,
    },
    {
      name: "Rizvi College Of Engineering",
      year: "2021-2024",
      marks: "9.23cgpa",
      img: universityImg,
    },
  ];
  return (
    <div className="mt-5 lg:px-10 grid gap-5">
      <div className="text-xl text-zinc-200">Education</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {educations.map((item, i) => (
          <EducationCard
            key={i}
            name={item.name}
            marks={item.marks}
            img={item.img}
            year={item.year}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
