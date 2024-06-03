import React, { MouseEvent } from 'react'
import { cn } from '../utlits/cn'
import {  ProjectProps } from '../models/Projects'

const Card = ({name ,visited , url ,myProjects, setMyProject}:ProjectProps) => {
  const handleClick =(name:string)=>[
    setMyProject(myProjects?.map((p)=>p.name === name ?{ ...p,visited:true }:{...p}))
  ]
  return (
    <a 
        onClick={()=>handleClick(name)}
        className={cn('text-center p-20 bg-slate-200 text-black hover:scale-105  w-[300px] h-[170px] rounded-lg font-bold text-xl ', visited?' -skew-y-3 bg-violet-700 text-white':'')}
        href={url}  
        target="_blank">
        {name}
    </a>
  )
}

export default Card