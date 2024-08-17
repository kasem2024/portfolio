"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideclick } from "@/hooks/use-outside-click";



export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  useOutsideclick(ref, () => setActive(null));
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.div
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 sm:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.div>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black  sm:rounded-3xl overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-100 text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-300 "
                    >
                      {active.description}
                    </motion.p>
                  </div>

              
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-100  text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto  [scrollbar-width:none] [-ms-overflow-style:none]   [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" mx-auto w-full gap-2 lg:gap-1 xl:gap-2   flex flex-wrap item-center justify-center ">
        {cards.map((card) => (
          <motion.div
            initial={{opacity:0 , y:100 ,scale:0}}
            animate={{opacity:1 , y:0 , scale:1 ,transition:{delay:4.5}}}
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="px-4 py-2 flex justify-between gap-[4px] items-center bg-black  rounded-xl hover:bg-zinc-700  "
          >
            
            <div className="flex-col ">
            <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-sm sm:text-md md:text-lg text-neutral-100  text-center md:text-left"
            >
                {card.title}
            </motion.h3>
            <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-400  text-center md:text-left text-sm sm:text-md "
            >
                {card.description}
            </motion.p>
            </div>
        
            <motion.div
              layoutId={`button-${card.title}-${id}`}
              className="hidden sm:block px-2 sm:px-4 py-2 text-sm sm:text-md   rounded-full font-bold bg-gray-100 hover:bg-blue-600 hover:text-white text-black mt-4 md:mt-0 transition-all duration-200"
            >
              {card.ctaText}
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};


const cards = [
  {
    description: "Matlap",
    title: "Image Processing",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          During my studies at Damnhour University, I collaborated with a team to develop an advanced image processing system using MATLAB. The project was built to automatically detect and enhance edges in various images, improving visual clarity and detail.
          <br />
          Technical Details:
          <br />
          Algorithms: We implemented several image processing algorithms, such as edge detection, filtering, and image segmentation, to enhance the quality and clarity of the images.
          Tools and Libraries: Utilizing MATLAB&apos;s powerful image processing toolbox, we efficiently manipulated pixel data and applied various transformations.
          Challenges Overcome: One of the significant challenges we tackled was optimizing the algorithms to handle large image datasets without compromising performance. This required careful consideration of computational efficiency and memory usage.
          <br />
          Impact:
          <br />
          The project demonstrated the potential of MATLAB in real-world applications and laid the groundwork for further research in image processing. Our work not only enhanced our technical skills but also provided valuable insights into the practical challenges of working with complex image data.
        </p>
      );
    },
  },
  {
    description: "Python",
    title: "Chat System",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          As part of a team project at Damnhour University, we developed a robust chat system using Python. The system was designed to facilitate real-time communication between users, incorporating various features that enhanced user experience and ensured secure data transmission.
          <br />
          Technical Details:
          <br />
          Programming Language: We utilized Python as the primary language, leveraging its simplicity and power to implement both the front-end and back-end of the chat application.
          Libraries and Tools: The system was built using essential Python libraries like socket for handling connections and threading for managing multiple users simultaneously. We also employed encryption techniques to secure messages and protect user privacy.
          Challenges Overcome: One of the key challenges was ensuring real-time performance while maintaining scalability. We implemented efficient data handling and optimized the server to manage numerous concurrent connections without latency issues.
          <br />
          Impact:
          <br />
          The project demonstrated our ability to build a fully functional, scalable chat system from scratch. It provided valuable insights into real-time communication protocols, data security, and the importance of user-centric design. This experience significantly enhanced our understanding of network programming and multi-threading in Python.
        </p>
      );
    },
  },
  {
    description: "Spring Boot (Java)",
    title: "Online Game",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          As part of a collaborative project at Damnhour University, we developed an online Tic-Tac-Toe game, utilizing Spring Boot (Java) for the backend and JavaScript for the front end. The game was designed to offer a seamless and interactive experience for players, allowing them to compete in real-time.
          <br />
          Technical Details:
          <br />
          Backend Development: We used Spring Boot to create a robust and scalable backend. The server handled game logic, player sessions, and real-time communication between clients, ensuring a smooth gaming experience.
          Frontend Development: The front end was built using JavaScript, providing a dynamic and responsive interface. Players could easily interact with the game board, and the interface updated in real-time based on the moves made by each player.
          Challenges Overcome: One of the significant challenges was ensuring the synchronization of game states between multiple players. We implemented efficient WebSocket communication to handle real-time data exchange, ensuring that both players saw the same game state without delays.
          <br />
          Impact:
          <br />
          The project showcased our ability to integrate front-end and back-end technologies to build a complete, functional web application. It also provided valuable experience in real-time data handling, user interface design, and the use of Spring Boot for managing server-side logic.
        </p>
      );
    },
  },
  {
    description: "Pusher (Node.js)",
    title: "Real-Time Messaging",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          In one of my recent projects, I developed a competitive online chat platform that featured real-time messaging, utilizing Node.js for the backend and Pusher to handle real-time data transmission. The chat system was designed to provide a seamless and responsive communication experience, catering to users who require instant interaction.
          <br />
          Technical Details:
          <br />
          Backend Development: Node.js was chosen for its efficiency and ability to handle asynchronous operations, making it ideal for managing real-time messaging. The server managed user authentication, message storage, and delivered messages instantly between users.
          Real-Time Messaging: Pusher was integrated to enable real-time communication, ensuring that messages were delivered and displayed instantly without requiring manual refreshes. This created a dynamic and engaging user experience.
          Challenges Overcome: One of the primary challenges was optimizing the system to handle a large number of concurrent users while maintaining low latency. We implemented efficient message queues and optimized database interactions to ensure the platform could scale without compromising performance.
          <br />
          Impact:
          <br />
          This project demonstrated my ability to build a high-performance, real-time communication platform from scratch. It provided hands-on experience with real-time data handling, user authentication, and the integration of third-party services like Pusher to enhance the user experience.
        </p>
      );
    },
  },
  {
    description: "PHP & JavaScript & Bootstrap",
    title: "E-commerce",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          As a backend developer on a college team, I contributed to building a feature-rich E-commerce platform using PHP, JavaScript, Bootstrap, and MySQL. The platform included essential features like product listings, a shopping cart, user profiles, and secure payment processing.
          <br />
          Key Contributions:
          <br />
          Backend Development: Developed core features such as user authentication, product uploads, shopping cart functionality, and payment processing.
          Database Management: Designed and managed the MySQL database, optimizing data storage and retrieval for users, products, and orders.
          Integration: Worked closely with the front-end team to ensure seamless interaction between the backend and the user interface, creating a smooth and responsive shopping experience.
          <br />
          Impact:
          <br />
          This project honed my skills in backend development, database management, and creating secure, user-friendly applications.
        </p>
      );
    },
  },
  {
    description: "Python",
    title: "License Plate Recognition",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          I developed a license plate recognition system using Python, with a focus on creating a user-friendly and clear interface. The project aimed to accurately detect and recognize license plates from images, providing users with a seamless experience.
          <br />
          Key Contributions:
          <br />
          Algorithm Development: Implemented image processing and machine learning techniques to detect and recognize license plates with high accuracy.
          User Interface: Designed and built a clean, intuitive UI, ensuring that users could easily upload images, view results, and navigate the system.
          Optimization: Focused on optimizing the processing time to deliver quick and reliable results without compromising accuracy.
          <br />
          Impact:
          <br />
          This project enhanced my skills in Python, image processing, and UI design, demonstrating my ability to build practical applications with a strong focus on user experience.
        </p>
      );
    },
  },
  {
    description: "Machine Learning",
    title: "Object Recognition System",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          As part of a collaborative project at Damnhour University, I developed an object recognition system using Python. The project aimed to accurately identify and classify objects within images, enhancing automated analysis and decision-making.
          <br />
          Key Contributions:
          <br />
          Algorithm Development: Implemented object detection and classification algorithms to achieve high accuracy in identifying various objects.
          System Integration: Collaborated on integrating the recognition system into a user-friendly application, allowing for easy image uploads and result visualization.
          Optimization: Worked on optimizing the system for speed and efficiency, ensuring prompt and reliable object recognition.
          <br />
          Impact:
          <br />
          This project demonstrated my ability to work in a team to build a sophisticated object recognition system, enhancing my skills in Python, machine learning, and practical application development.
        </p>
      );
    },
  },
  {
    description: "OpenAi & Replicate",
    title: "AI Media Generator",
    ctaText: "Open",
    content: () => {
      return (
        <p>
          Project Overview:
          <br />
          As the team leader for our graduation project, I led the development of an AI media generator that utilized OpenAI and Replicate AI to create images, audio, video, conversations, and music based on user input. I was responsible for overseeing this area of the project and ensuring its successful implementation.
          <br />
          Key Contributions:
          <br />
          Integration: Led the integration of OpenAI and Replicate AI APIs to generate various forms of media, ensuring seamless interaction between different AI models.
          User Interface: Worked on designing a user-friendly interface that allowed users to input their preferences and receive AI-generated media tailored to their needs.
          Project Management: Managed the project timeline, coordinated team efforts, and ensured that all deliverables were met on time.
          <br />
          Impact:
          <br />
          This project highlighted my leadership skills and my ability to integrate cutting-edge AI technologies to build innovative applications. It provided invaluable experience in project management, AI integration, and user-centered design.
        </p>
      );
    },
  },
];
