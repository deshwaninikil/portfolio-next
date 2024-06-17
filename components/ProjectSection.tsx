import React from "react";
import Github from "./UI/Github";
import ProjectList from "./ProjectList";
import WebCloneDesign from "./WebCloneDesign";

export default function ProjectSection() {
  return (
    <div className="  flex  h-max items-center flex-col">
      <div className="text-4xl mb-6 mt-20 font-bold">Project Section</div>
      <div>
        <ProjectList />
      </div>
      {/* <div className="text-4xl mb-6 mt-10 font-bold">Website Designs</div>
      <div className="mb-28 md:mb-2">
        <WebCloneDesign />
      </div> */}
      <Github />
    </div>
  );
}
