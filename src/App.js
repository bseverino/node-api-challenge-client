import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'

import ProjectList from './components/ProjectList'

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
      <Route exact path='/' render={() =><ProjectList projects={projects} />} />
    </div>
  );
}

export default App
