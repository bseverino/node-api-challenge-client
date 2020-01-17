import React from 'react'
import { Link } from 'react-router-dom'

const Projects = props => {
    return (
        <div>
            <h1>Projects</h1>
            {props.projects.map(project => (
                <div key={project.id}>
                    <Link to={`/${project.id}`}>{project.name}</Link>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Projects