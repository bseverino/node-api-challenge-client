import React from 'react'
import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'
import { Row, Col, Card as ReactCard, CardBody, CardText } from 'reactstrap'

const Link = styled(ReactLink)`
    font-size: 1.3rem;
`

const Card = styled(ReactCard)`
    margin: 50px 0;
`

const Projects = props => {
    return (
        <Row>
            {props.projects.map(project => (
                <Col key={project.id}>
                    <Card>
                        <CardBody>
                            <Link to={`/${project.id}`}>{project.name}</Link>
                            <CardText>
                                {project.completed ? '✔' : '❌'}{' '}
                                {project.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Projects