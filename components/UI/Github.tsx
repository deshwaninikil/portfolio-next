import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className=" hidden lg:block py-10">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="font-bold">Code</strong>
      </h1>
      <GitHubCalendar
        username="deshwaninikil"
        blockSize={14}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}
