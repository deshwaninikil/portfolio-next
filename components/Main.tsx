// import Buttons from "./Buttons";

import Buttons from "./UI/Button";
import SkillChange from "./UI/SkillChange";

function MainSection() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen flex-col ">
        <div className="md:text-5xl text-2xl font-bold ">
          I'm Nikil Deshwani
        </div>
        <div className="md:text-4xl text-lg md:mt-5 mt-2">
          I am working as a <SkillChange />
        </div>
        <div className="md:mt-10 mt-4  md:mx-48 mx-10 md:text-lg text-sm text-white/60">
          I have 5.6 years of experience in frontend development with
          specialized expertise in developing MERN (MongoDB, Express.js,
          React.js, Node.js) applications and deploying them in the cloud using
          AWS (Amazon Web Services) tools. Highly motivated and possessing the
          ability to work collaboratively within a team environment, I am adept
          at leveraging modern technologies such as ReactJs, NextJs, HTML, CSS,
          JavaScript, jQuery, Redux, Tailwind, GIT, Node.js, MongoDB, UI/UX
          Design, Google Apps Script, and Docker to create efficient and
          scalable web solutions. With a strong foundation in full-stack
          development and cloud computing, I am driven to contribute to projects
          that require innovative problem-solving and a collaborative approach
          to achieve success.
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default MainSection;
