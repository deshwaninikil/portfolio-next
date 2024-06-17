import React from 'react'
import ProjectCard from './UI/ProjectCard'
import { ClonedData } from './Data/Cloneddata'

export default function WebCloneDesign() {
  return (
    <div className="flex flex-wrap justify-center">
    {ClonedData.map((project, index) => (
      <ProjectCard
        key={index}
        img={project.img} 
        title={project.title}
        githubLink={project.githubLink}
        deployedLink={project.deployedLink}
        skil= {project.skill}
        description={project.description}

      />
    ))}
  </div>
  )
}
