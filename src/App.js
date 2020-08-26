import React from 'react'
import Main from './layouts/main.jsx'
import Projects from './views/projects'
import About from './views/about'
import Resume from './views/resume'
import { HashRouter, Route } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <Route exact path= {'/'} component={() => <Main view={<About/>} />} />
      <Route path= {'/portfolio'} component={() => <Main view={<Projects/>} />} />
      <Route path= {'/resume'} component={Resume} />
    </HashRouter>
  )
}
export default App
