import { useState } from 'react'

export const Project = ({projects}) => {

    return <div id="project">
    {projects.map((project) => {
        const [display, setDisplay] = useState("none");
        return<div onClick={() => setDisplay(display === "none" ? "block" : "none")}>
            <div style={{display:"flex", justifyContent:"space-between"}}><p>{project.name}</p><p>{display === "none" ? "▶︎" : "▼"}</p></div>
            <p style={{display: display}}>{project.description}</p>
            <p style={{display: display}}>{project.link}</p>
            <span class="span-line"></span>
        </div>
    })}
    </div>
}