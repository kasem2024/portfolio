export interface Project{
    url:string,
    name:string,
    id:number,
    visited:boolean
}

export interface ProjectProps{
    name:string, 
    visited:boolean,
     url:string ,
     myProjects:Project[], 
     setMyProject:(p:Project[]
    )=>void
}

