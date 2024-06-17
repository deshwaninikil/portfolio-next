import React, { useState } from "react";
import Link from "next/link";

function ContactForm() {
  return (
    <div className="h-max md:flex md:py-32 py-10">
      <div className="md:w-1/2 flex flex-col justify-center items-center text-5xl font-bold">
        <div>Contact ME</div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Link
          className="cursor-pointer z-40 text-2xl mt-6 border-purple-900 border-2 px-7 py-4  rounded-full"
          href="https://calendly.com/nikildeshwani/30min"
        >
          <span>Click here</span>
        </Link>
      </div>
    </div>
  );
}

export default ContactForm;
