'use client'
import  { useState } from 'react'
import Card from './Card'

const Projects = () => {

    const [myProjects , setMyProject] = useState(
      [
        {name:'Games', id:1 , url:'https://games-three-teal.vercel.app/' , visited:false},
        {name:'Gloud Graze', id:2 , url:'https://cloudcraze-v2.vercel.app/',visited:false},
        {name:'Movie Application', id:3 , url:'https://movie-application-hazel.vercel.app/',visited:false},
        {name:'Youtube Clone', id:4 ,url:'https://youtubeclone-bay-rho.vercel.app/',visited:false},
    ]
    ) 
  return (
    <div className='mt-[10vh] md:mt-[25vh] flex items-center justify-center space-x-3 space-y-3 flex-wrap'>
        {myProjects?.map((project)=><Card  myProjects={myProjects} visited={project.visited}  setMyProject={setMyProject} name={project.name} url={project.url!} key={project.id}/>)}
    </div>
  )
}

export default Projects