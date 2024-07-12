import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/games.png";
import { IoStorefront } from "react-icons/io5";
import { TbBrandPhp } from "react-icons/tb";
import rmtdevImg from "@/public/weather.png";
import wordanalyticsImg from "@/public/movies.png";
import wordanalyticsImg2 from "@/public/youtube.png";
import { SiLoop } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "C++ & Java ",
    description:
      "I first learned the fundamentals of data structures and algorithms, followed by gaining proficiency in object-oriented programming design using Java.",
    icon: React.createElement(SiLoop),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    description:
      "I started crafting web pages, focusing on front-end development. This involved designing user interfaces, ensuring responsive layouts, and enhancing user experience with HTML, CSS, and JavaScript.",
    icon: React.createElement(IoStorefront),
    date: "2021",
  },
  {
    title: "web Developer",
    description:
      "I learned PHP to enhance my ability to build back-end systems and develop websites more efficiently. With my knowledge of PHP, I developed an Ecommerce website, which allowed me to gain hands-on experience in server-side scripting, database management, This project helped me understand the full-stack development process and improved my overall web development skills.",
    icon: React.createElement(TbBrandPhp),
    date: "2022",
  },
  {
    title: "React.js and Next.js Developer",
    description:
      "I have developed various websites using these technologies, which has equipped me with the skills to build complex front-end applications. This experience has honed my expertise in creating dynamic, interactive, and user-friendly web interfaces. ",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "node.js Developer",
    description:
      "With all my experience in JavaScript, I decided to build back-end systems using Node.js. This allowed me to leverage my JavaScript skills on both the front end and back end, creating efficient and scalable web applications.",
    icon: React.createElement(FaNodeJs),
    date: "2024",
  },
  {
    title: "Graduation",
    description:
      "I graduated with a degree in Computer Science, majoring in Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "july 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Games",
    description:
      "I worked on this project to provide comprehensive information about various games, enhancing the user experience.",
    tags: ["React", "ReactQuery", "ReactRouter", "Tailwind","Typescript"],
    imageUrl: corpcommentImg,
    link:"https://games-three-teal.vercel.app"
  },
  {
    title: "CloudCraze",
    description:
      "I worked on this project to provide comprehensive weather information. Based on your location or city, you will receive the current weather conditions as well as the forecast for the rest of the week.",
    tags: ["React", "Tailwind","RESTful API"],
    imageUrl: rmtdevImg,
    link:"https://cloudcraze-v2.vercel.app"
  },
  {
    title: "Movies",
    description:
      "I worked on this project to show users movie trailers and provide a seamless, engaging experience. Additionally, the platform includes detailed movie information",
    tags: ["React", "Next.js","Html", "Tailwind", ],
    imageUrl: wordanalyticsImg,
    link:"https://movie-application-hazel.vercel.app"

  },
  {
    title: "YouTube Clone",
    description:
      "I worked on developing a YouTube clone that allows users to search for specific content and view various channels.",
    tags: ["React","RESTful API", "Html", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg2,
    link:'https://youtubeclone-bay-rho.vercel.app'

  },
  {
    title: "Watches Store",
    description:
      " The platform, developed with Next.js, offers advanced filtering features, allowing users to sort watches by color, size, and price. Utilizing Upstash for efficient database storage and React Query for optimized data fetching. Additionally, users can effortlessly sort watches by price, from high to low or low to high.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg2,
    link:'https://watch-store-rouge.vercel.app'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Framer Motion",
  "Zustand",
  "ReactQuery",
  "ReactRouter",
  "Next.js",
  "Node.js",
  "Express",
  "Prisma",
  "Mysql",
  "MongoDB",
  "Git",
  "Problem Solving"
] as const;
