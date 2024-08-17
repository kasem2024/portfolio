"use client";
import { LayoutGrid } from "./ui/layout-grid";


export function Demo2() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />

    </div>
  );
}

const HTMLCSS1 = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-black">
           HTML & CSS 1
      </p>
    </div>
  );
};

const JavaScriptPartOne = () => {
  return (
    <div>
        <p className="font-bold md:text-2xl text-xl text-black">
          JavaScript 
        </p>
    </div>
  );
};
const Javascript2 = () => {
  return (
    <div>
        <p className="font-bold md:text-2xl text-xl text-black">
          JavaScript (oop)
        </p>
    </div>
  );
};
const NextJs = () => {
  return (
    <div>
        <p className="font-bold md:text-2xl text-xl text-black">
          Next.js (TypeScript)
        </p>
    </div>
  );
};


const cards = [
  {
    id: 5,
    content: <HTMLCSS1 />,
    className: "md:col-span-2",
    thumbnail:
      "/certifications/certificate4.png",
  },
  {
    id: 6,
    content: <JavaScriptPartOne/>,
    className: "col-span-2",
    thumbnail:
      "/certifications/certificate5.png",
  },
  {
    id: 7,
    content: <Javascript2 />,
    className: "col-span-2",
    thumbnail:
      "/certifications/certificate6.png",
  },
  {
    id: 8,
    content: <NextJs />,
    className: "md:col-span-2",
    thumbnail:
      "/certifications/certificate7.png",
  },
];
