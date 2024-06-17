import React from "react";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaCloudflare,
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiKubernetes,
  SiPostman,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconLang = [
  { icon: <IoLogoJavascript />, key: 1, desc: "JavaScript" },
  { icon: <SiTypescript />, key: 2, desc: "TypeScript" },
  { icon: <FaHtml5 />, key: 3, desc: "HTML5" },
  { icon: <FaCss3 />, key: 4, desc: "CSS3" },
  { icon: <FaReact />, key: 5, desc: "React" },
  { icon: <TbBrandNextjs />, key: 6, desc: "Next.js" },
  { icon: <SiTailwindcss />, key: 7, desc: "Tailwind CSS" },
  { icon: <FaNodeJs />, key: 8, desc: "Node.js" },
  { icon: <SiExpress />, key: 9, desc: "Express.js" },
  { icon: <FaNpm />, key: 10, desc: "npm" },
  { icon: <FaAws />, key: 12, desc: "Amazon Web Services" },
  { icon: <FaCloudflare />, key: 13, desc: "Cloudflare" },
  { icon: <IoLogoVercel />, key: 14, desc: "Vercel" },
  { icon: <FaGithub />, key: 15, desc: "GitHub" },
  { icon: <DiMongodb />, key: 16, desc: "MongoDB" },
  { icon: <DiMysql />, key: 17, desc: "MySQL" },
  { icon: <DiPostgresql />, key: 18, desc: "PostgreSQL" },
  { icon: <SiPostman />, key: 19, desc: "Postman" },
  { icon: <FaDocker />, key: 20, desc: "Docker" },
  { icon: <SiKubernetes />, key: 21, desc: "Kubernetes" },
  { icon: <SiTerraform />, key: 22, desc: "Terraform" },
];


export default function SkillIcon() {
  return (
    <div className="flex flex-wrap justify-center md:mx-32 mx-5">
      {iconLang.map(({ icon, key, desc }) => (
        <Design key={key} desc={desc}>{icon}</Design>
      ))}
    </div>
  );
}

function Design({ children, desc }: any) {
  return (
    <div className="my-3 mx-2 sm:mx-4 flex flex-col items-center bg-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-900  cursor-pointer">
      <div className="text-2xl sm:text-4xl    text-white ">
        {children}

      </div>
      <p className="font-bold mt-2">{desc}</p>
    </div>
  );
}
