import React from 'react'
import Main from './layouts/main.jsx'
import Projects from './views/projects'
import About from './views/about'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={() => <Main view={<About/>} />} />
      <Route exact path="/portfolio" component={() => <Main view={<Projects/>} />} />
      <Route exact path="/github" component={() => {
        window.location.href = 'https://github.com/monstercameron';
        return null;
      }} />
      <Route exact path="/linkedin" component={() => {
        window.location.href = 'https://www.linkedin.com/in/earl-cameron-9211a058/';
        return null;
      }} />
      <Route exact path="/twitter" component={() => {
        window.location.href = 'https://twitter.com/monstercameron';
        return null;
      }} />
    </Switch>
  )
}
export default App;
