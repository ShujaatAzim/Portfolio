import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import { Switch, Route } from 'react-router-dom';

const App = () => {

  // Making app serve as an "entry" and only handle the routing as a separation of concerns. 
  // Might add the navbar here though, so the same navbar is served for each page/component.

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
}

export default App;
