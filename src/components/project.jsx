import { useState } from 'react'

export const Project = ({projects}) => {

    return <div id="project">
    {projects.map((project, index) => {
        const [display, setDisplay] = useState("none");
        return (
        <div key={index} onClick={() => setDisplay(display === "none" ? "block" : "none")}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>{project.name}</p>
                <p>{display === "none" ? "▶︎" : "▼"}</p>
            </div>
            <p style={{display: display}} className='project-message'>{project.description}</p>
            <p style={{display: display}} className='project-message'>{project.link}</p>
            <span className="span-line"></span>
        </div>)
    })}
    </div>
}