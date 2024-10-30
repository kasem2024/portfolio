"use client";
import React, {  ReactNode, useState } from "react";


import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";




import { SiHyperskill } from "react-icons/si";

import { IoHomeOutline } from "react-icons/io5"

import { CgWebsite } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { BiCertification  } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import {  FaGithubSquare} from "react-icons/fa";

export function SidebarLayout({children}:{children:ReactNode}) {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IoHomeOutline className="text-teal-500 h-5 w-5 flex-shrink-0  " />
      ),
    },
    {
      label: "Projects",
      href: "projects",
      icon: (
        <CgWebsite className="text-teal-500 h-5 w-5  flex-shrink-0   "  />
      ),
    },
    {
        label: "Education",
        href: "education",
        icon: (
          <LuGraduationCap className="text-teal-500   h-5 w-5 flex-shrink-0" />
        ),
      },
    {
      label: "Certifications",
      href: "certifications",
      icon: (
         <BiCertification 
           className=" text-teal-500 h-5 w-5  flex-shrink-0" />
      ),
    },
    {
      label: "Skills",
      href: "skills",
      icon: (
        <SiHyperskill className=" text-teal-500 h-5 w-5  flex-shrink-0" />
      ),
    },
    {
      label: "Services",
      href: "services",
      icon: (
        <RiServiceLine className="text-teal-500  h-5 w-5   flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "contact",
      icon: (
        <GrContact className=" text-teal-500 h-5 w-5  flex-shrink-0" />
      ),
    },
  ];
  const socialLinks = [
    {
      label: "LinkedIn",
      href: "/",
      icon: (
        <FaLinkedin className="text-blue-500 h-5 w-5 flex-shrink-0  "  />
      ),
    },
     {
      label: "GitHub",
      href: "/",
      icon: (
        <FaGithubSquare className="text-white h-5 w-5  flex-shrink-0  " />
      ),
      },
   
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 mx-auto w-full flex-1   border border-neutral-200  overflow-hidden",
        "h-[100vh]"
      )}
    >
        <Sidebar open={open} setOpen={setOpen} animate={true}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <div className="flex justify-start items-center pl-[3px]">
                <Image src={"/logos/kasemlogo.png"} alt="image" width={40} height={40}/>
                <div className="font-bold text-lg first-letter:text-cyan-600 first-letter:text-2xl text-pink-900">
                   Kasem
                </div>
                </div>
                <div className="mt-8 flex flex-col gap-1">
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link}  />
                  ))}
                </div>
            </div>
            <div>
              <div className="mt-8 flex flex-col gap-2">
              {socialLinks.map((link, idx) => (
                    <SidebarLink key={idx} link={link}  />
                  ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
       {children}
    </div>
  );
}