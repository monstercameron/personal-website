import React from 'react'
import Main from './layouts/main.jsx'
import Projects from './views/projects'
import About from './views/about'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Main view={<About/>} />} />
      <Route exact path="/portfolio" component={() => <Main view={<Projects/>} />} />\
    </Switch>
  )
}
export default App;
