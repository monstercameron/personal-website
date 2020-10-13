import React from "react";
import Main from "./layouts/main.jsx";
import Projects from "./views/projects";
import About from "./views/about";
import Resume from "./views/resume";
import Blog from "./views/blogs";
import NewBlog from "./views/newBlog";
import Vic from "./views/CrownVic";
import { HashRouter, Route } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Route exact path={"/"} component={() => <Main view={<About />} />} />
      <Route path={"/vic"} component={() => <Main view={<Vic />} />} />
      <Route
        path={"/portfolio"}
        component={() => <Main view={<Projects />} />}
      />
      <Route path={"/blog"} component={() => <Main view={<Blog />} />} />
      <Route path={"/new"} component={() => <Main view={<NewBlog />} />} />
      <Route path={"/resume"} component={Resume} />
    </HashRouter>
  );
}
export default App;
