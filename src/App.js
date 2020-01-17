import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Container, Navbar, NavbarBrand } from 'reactstrap'

import ProjectList from './components/ProjectList'
import ProjectDetails from './components/ProjectDetails'

function App() {
  const history = useHistory()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/projects')
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Navbar color='light'>
        <NavbarBrand onClick={() => history.push('/')}>Projects</NavbarBrand>
      </Navbar>
      <Container>
        <Switch>
          <Route path='/:id' render={() => <ProjectDetails />} />
          <Route path='/' render={() => <ProjectList projects={projects} />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App
