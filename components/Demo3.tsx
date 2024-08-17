"use client";
import { LayoutGrid } from "./ui/layout-grid";


export function Demo3() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />

    </div>
  );
}

const ReactIntermediate = () => {
  return (
    <div>
        <p className="font-bold md:text-2xl text-xl text-black">
       React (Intermediate)
        </p>
    </div>
  );
};

const InnovEgypt = () => {
  return (
    <div>
      <p className="font-bold md:text-2xl text-xl text-white">
       Potential Startup
      </p>
    </div>
  );
};

const cards = [
  {
    id: 8,
    content: <ReactIntermediate />,
    className: "md:col-span-4",
    thumbnail:
      "/certifications/certificate8.png",
  },
  {
    id: 9,
    content: <InnovEgypt />,
    className: "col-span-4",
    thumbnail:
      "/certifications/certificate9.png",
  },

];
