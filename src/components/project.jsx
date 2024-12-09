import { useState } from 'react'
import { Title } from './title';

export const Project = ({projects}) => {

    return <> 
    <div id='linkProject'></div>
    <Title message="Parlons peu, parlons projets..." id="project"/>
    <div id="divProject">
    {projects.map((project, index) => {
        const [display, setDisplay] = useState("none");
        return (
        <div key={index} onClick={() => setDisplay(display === "none" ? "block" : "none")}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>{project.name}</p>
                <p>{display === "none" ? <i class="arrow right"></i> : <i class="arrow down"></i> }</p>
            </div>
            <p style={{display: display}} className='project-message'>{project.description}</p>
            <p style={{display: display}} className='project-message'>Languages utilisés : {project.language}</p>
            <a href={project.link} style={{display: display}} className='project-message'><i>Lien vers le github</i></a>
            <span className="span-line"></span>
        </div>)
    })}
    </div>
    </>
}