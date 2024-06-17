"use client";
import { TypeAnimation } from "react-type-animation";

export default function SkillChange() {
  return (
    <TypeAnimation
      className="font-bold"
      sequence={[
        "Frontend Developer",
        2000,
        "Backend Developer",
        2000,
        "Fullstack Developer",
        2000,
      ]}
      wrapper="span"
      speed={3}
      repeat={Infinity}
    />
  );
}
