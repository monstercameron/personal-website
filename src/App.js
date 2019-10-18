import React from 'react'
import Main from './layouts/main.jsx'
import Projects from './views/projects'
import About from './views/about'
import { HashRouter, Route } from 'react-router-dom'
function App() {
  return (
    <HashRouter>
      <Route exact path= {'/'} component={() => <Main view={<About/>} />} />
      <Route path= {'/portfolio'} component={() => <Main view={<Projects/>} />} />\
    </HashRouter>
  )
}
export default App
