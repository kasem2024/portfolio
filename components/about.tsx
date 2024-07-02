"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a passionate Computer Science graduate from Damanhur University, majoring in Information Technology. With expertise in both front-end and back-end development, I specialize in creating sophisticated web applications.

My technical journey began with mastering data structures, algorithms, and oop, and has since evolved to include advanced front-end technologies such as React.js, Next.js, Tailwind CSS, and Framer. I have developed a range of projects including a real-time chat website, an AI-services platform, a weather website, a movie site with detailed trailers, and a Game Hub using ReactQuery.

To enhance my back-end skills, I delved into PHP and Node.js, enabling me to build scalable systems . My certifications cover advanced HTML5, CSS3, JavaScript, React, TypeScript, and Git.

For my graduation project, I co-developed a comprehensive chat-AI web application, incorporating Pusher, Next.js, OpenAI, Stripe, .

Feel free to connect with me via email, GitHub, LinkedIn, or explore my portfolio.
      </p>
    </motion.section>
  );
}
