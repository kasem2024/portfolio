"use client";
import { LayoutGrid } from "./ui/layout-grid";


export function Demo1() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const GitHub = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-black">
       Git & GitHub
      </p>
    </div>
  );
};

const React = () => {
  return (
    <div>
        <p className="font-bold md:text-2xl text-xl text-black">
        React 
        </p>
    </div>
  );
};
const HTMLCSS2 = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-black">
       HTML5 & CSS3 2
      </p>
    </div>
  );
};
const HTMLCSS3 = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-black">
       HTML5 & CSS3 3
      </p>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <GitHub />,
    className: "md:col-span-2",
    thumbnail:
      "/certifications/certificate1.png",
  },
  {
    id: 2,
    content: <React />,
    className: "col-span-2",
    thumbnail:
      "/certifications/certificate.png",
  },
  {
    id: 3,
    content: <HTMLCSS2 />,
    className: "col-span-2",
    thumbnail:
      "/certifications/certificate2.png",
  },
  {
    id: 4,
    content: <HTMLCSS3 />,
    className: "md:col-span-2",
    thumbnail:
      "/certifications/certificate3.png",
  },
];
