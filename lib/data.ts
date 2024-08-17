import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/games.png";
import { IoStorefront } from "react-icons/io5";
import { TbBrandPhp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiLoop } from "react-icons/si";
import { LiaPhp } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io5";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiUpstash } from "react-icons/si" 
import { IoLogoFirebase } from "react-icons/io5";
import { SiStrapi } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsStripe } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
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
      imageUrl: '/games.png',
      link:"https://games-three-teal.vercel.app"
    },
    {
      title: "CloudCraze",
      description:
        "I worked on this project to provide comprehensive weather information. Based on your location or city, you will receive the current weather conditions as well as the forecast for the rest of the week.",
      tags: ["React", "Tailwind","RESTful API"],
      imageUrl: '/weather.png',
      link:"https://cloudcraze-v2.vercel.app"
    },
    {
      title: "Movies",
      description:
        "I worked on this project to show users movie trailers and provide a seamless, engaging experience. Additionally, the platform includes detailed movie information",
      tags: ["React", "Next.js","Html", "Tailwind", ],
      imageUrl: '/movies.png',
      link:"https://movie-application-hazel.vercel.app"
  
    },
    {
      title: "Videos",
      description:
        "I worked on Youtube Api that allows users to search for specific content and view various channels.",
      tags: ["React","RESTful API", "Html", "Tailwind", "Framer"],
      imageUrl: '/youtube.png',
      link:'https://youtubeclone-bay-rho.vercel.app'
  
    },
    {
      title: "Watches Store",
      description:
        " The platform offers advanced filtering features, allowing users to sort watches by color, size, and price.Additionally, users can effortlessly sort watches by price, from high to low or low to high.",
      tags: [ "Next.js", "TypeScript", "Tailwind"],
      imageUrl: '/watch-store.png',
      link:'https://watch-store-rouge.vercel.app'
    },
    {
      title: "Tetris Game",
      description:
        " This game allows the player to move the shape (tetromino) left, right, and down, and rotate it. Additionally, it provides the player with stats about their current level and points, and includes a preview of the upcoming shapes.",
      tags: [ "Javascript", "React", "css"],
      imageUrl: '/TetrisGame.png',
      link:'https://tetris-game-beige.vercel.app'
    },
  ] as const;

  export const skillsData = [
    { name: "HTML", IconName: ImHtmlFive, color: "#E34F26" }, // Red for HTML
    { name: "CSS", IconName: SiCss3, color: "#1572B6" }, // Blue for CSS
    { name: "Sass", IconName: FaSass, color: "#CC6699" }, // Pink for Sass
    { name: "Bootstrap", IconName: FaBootstrap, color: "#7952B3" }, // Purple for Bootstrap
    { name: "MaterialUI", IconName: SiMui, color: "#007FFF" }, // Blue for MaterialUI
    { name: "TailwindCss", IconName: RiTailwindCssFill, color: "#38B2AC" }, // Teal for Tailwind
    { name: "Chakra UI", IconName: SiChakraui, color: "#319795" }, // Green for Chakra UI
    { name: "Framer", IconName: SiFramer, color: "#0055FF" }, // Blue for Framer
    { name: "JavaScript", IconName: IoLogoJavascript, color: "#F7DF1E" }, // Yellow for JS
    { name: "TypeScript", IconName: SiTypescript, color: "#007ACC" }, // Blue for TypeScript
    { name: "React.js", IconName: FaReact, color: "#61DAFB" },
    { name: "ReactNative", IconName: TbBrandReactNative, color: "#61DAFB" }, // Cyan for React.js
    { name: "Zustand", IconName: RiBearSmileFill, color: "#764ABC" }, // Brown for Zustand
    { name: "ReactQuery", IconName: SiReactquery, color: "#FF4154" }, // Pink for ReactQuery
    { name: "ReactRouter", IconName: SiReactrouter, color: "#CA4245" }, // Red for ReactRouter
    { name: "Next.js", IconName: SiNextdotjs, color: "#000000" }, // Black for Next.js
    { name: "Prisma", IconName: SiPrisma, color: "#2D3748" }, // Dark blue for Prisma
    { name: "Upstash", IconName: SiUpstash, color: "#41B883" }, // Green for Upstash
    { name: "Firebase", IconName: IoLogoFirebase, color: "#FFCA28" }, // Yellow for Firebase
    { name: "Strapi", IconName: SiStrapi, color: "#2E7D32" }, // Green for Strapi
    { name: "Node.js", IconName: FaNodeJs, color: "#68A063" }, // Green for Node.js
    { name: "PHP", IconName: LiaPhp, color: "#777BB4" }, // Purple for PHP
    { name: "Express.js", IconName: SiExpress, color: "#000000" }, // Black for Express.js
    { name: "Mysql", IconName: GrMysql, color: "#4479A1" }, // Blue for MySQL
    { name: "MongoDB", IconName: SiMongodb, color: "#47A248" }, // Green for MongoDB
    { name: "Stripe", IconName: BsStripe, color: "#008CDD" }, // Blue for Stripe
    { name: "Git", IconName: FaGitAlt, color: "#F05032" }, // Orange for Git
  ] as const;