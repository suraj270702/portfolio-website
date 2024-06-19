import React from "react";
import hackerRankImg from "../img/hackerrank-software.png";
import Image from "next/image";
import Link from "next/link";
import CertificationCard from "./CertificationCard";

const Experience = () => {
  const certifications: {
    title: String;
    link: String;
    internship?: Boolean;
  }[] = [
    {
      title: "Javascript (Basic)",
      link: "https://www.hackerrank.com/certificates/a300e0607b09",
    },
    {
      title: "Javascript (Intermediate)",
      link: "https://www.hackerrank.com/certificates/25c3380e9011",
    },
    {
      title: "React (Basic)",
      link: "https://www.hackerrank.com/certificates/3d8d35c3337f",
    },
    {
      title: "Sql (Basic)",
      link: "https://www.hackerrank.com/certificates/013ad0ad8fbb",
    },
    {
      title: "Frontend Developer (React)",
      link: "https://www.hackerrank.com/certificates/5cc89bf28d1f",
    },
    {
      title: "Java (Basic)",
      link: "https://www.hackerrank.com/certificates/2915e22dd684",
    },
    {
      title: "WeframeTech Full Stack Internship",
      link: "https://drive.google.com/file/d/1fC7AaZjyVIOW2iJI8UzE09Gac9rgUAyh/view",
      internship: true,
    },
  ];

  return (
    <div className="grid gap-5 lg:px-10 mt-5">
      <div className="text-xl text-zinc-200">Certifications</div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((certificate, i) => (
          <CertificationCard
            key={i}
            title={certificate.title}
            link={certificate.link}
            internship={certificate.internship}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
