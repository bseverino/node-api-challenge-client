import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const ProjectDetails = props => {
    const { id } = useParams()
    const [project, setProject] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:4000/api/projects/${id}`)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            {project && (
                <div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <p>Completed: {project.completed ? '✔' : '❌'}</p>

                    <h3>Actions</h3>
                    {project.actions.map(action => (
                    <div key={action.id}>
                        <p>Description: {action.description}</p>
                        <p>Notes: {action.notes}</p>
                        <p>Completed: {action.completed ? '✔' : '❌'}</p>
                    </div> 
                    ))}
                </div>
            )}

            <Link to='/'>Return</Link>
        </div>
    )
}

export default ProjectDetails