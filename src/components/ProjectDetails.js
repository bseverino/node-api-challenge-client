import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { Row as ReactRow, Col, Card as ReactCard, CardBody, CardText } from 'reactstrap'

const Row = styled(ReactRow)`
    margin: 50px 0;
`
const Card = styled(ReactCard)`
    margin-top: 25px;
`

const ActionHeading = styled.h4`
    margin: 25px 0 0;
`

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
                <Row>
                    <Col xs='12'>
                        <h2>{project.completed ? '✔ ' : '❌ '}{project.name}</h2>
                        <p>{project.description}</p>
    
                        <ActionHeading>Actions:</ActionHeading>
                    </Col>
                    {project.actions.map(action => (
                    <Col key={action.id} xs='12'>
                        <Card>
                            <CardBody>
                                <h5>{action.description}</h5>
                                <CardText>Notes: {action.notes}</CardText>
                                <CardText>Completed: {action.completed ? '✔' : '❌'}</CardText>
                            </CardBody>
                        </Card>
                    </Col> 
                    ))}
                </Row>
            )}

            <Link to='/'>Return</Link>
        </div>
    )
}

export default ProjectDetails