"use client";

import React from "react";
// import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "@/components/SubmitBton";
import toast from "react-hot-toast";

export default function Contact() {
  // const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      className="relative text-center w-screen h-screen bg-skills">
      <div className="bg-black/50  inset-0 w-full h-full "></div>
      <div className="absolute inset-0 w-full h-full max-w-[1100px] mx-auto md:mt-40 mt-20 z-50">
        <p className="text-gray-100 text-lg md:text-xl ">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:kasem2023mohareb@gmail.com">
            kasem2023mohareb@gmail.com
          </a>{" "}
          or through this form.
        </p>
      
        <form
          className="mt-10 flex flex-col "
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
        
            if (error) {
              toast.error(error);
              return;
            }
        
            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded-lg borderBlack bg-white/10 backdrop-blur-lg text-white transition-all "
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-80 my-3 rounded-lg borderBlack bg-white/10 backdrop-blur-lg p-4 text-white  transition-all "
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
     </div>
    </motion.section>
  );
}
