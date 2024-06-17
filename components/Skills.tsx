import React from 'react'
import SkillIcon from './SkillIcon'

export default function Skills() {
  return (
<div>
      <div className="flex justify-center items-center h-max flex-col ">
        <div
          className="md:text-5xl text-2xl font-bold font-serif"
          style={{ fontFamily: "Roboto" }}
        >
          My Skill Set
        </div>
        <div className='mt-10'>
          <SkillIcon/>
        </div>
        
      </div>
    </div>
  )
}
