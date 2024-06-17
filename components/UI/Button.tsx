"use client";
import { FaDownload } from "react-icons/fa";

function Buttons() {
  return (
    <div className="md:flex justify-around md:w-2/3 md:mt-10 mt-6 ">
      <div className="py-4 px-4 rounded-full border-4 bg-purple-900/30 border-white shadow-white/50 shadow-lg relative w-max mt-5 md:mt-0">
        <a
          href="https://drive.google.com/file/d/1FtvGNN5cdHlVO5NIcZKEK5N81bsKOsMM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center"
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            <FaDownload className="mr-3" />
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
