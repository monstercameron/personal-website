import React from 'react';
import About from './views/about'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/about" component={About} />
    </Switch>
  )
}

export default App;
