import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

import ProjectList from './components/ProjectList'
import ProjectDetails from './components/ProjectDetails'

function App() {
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
      <Switch>
        <Route path='/:id' render={() => <ProjectDetails />} />
        <Route path='/' render={() => <ProjectList projects={projects} />} />
      </Switch>
    </div>
  );
}

export default App
