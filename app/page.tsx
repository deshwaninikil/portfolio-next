import Par from "@/components/Par"
import Main from "@/components/Main"

import SideSocial from "@/components/UI/SideSocial"
import Skills from "@/components/Skills"
import ProjectSection from "@/components/ProjectSection"
import ContactForm from "@/components/ContactForm"

export default function page() {
  return (
    <div>
      <div className="bg-[#09001f] w-full h-full text-white">
        <Par/>
        <div>
        <SideSocial/>

        <Main/>
          <Skills/>
          <ProjectSection/>
          <ContactForm/>
        
        </div>

      </div>
    </div>
  )
}
