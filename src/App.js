import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import { Switch, Route } from 'react-router-dom';
import ButtonAppBar from './Components/ButtonAppBar';

const App = () => {

  // Making app serve as an "entry" and only handle the routing as a separation of concerns.
  // Might add the navbar here though, so the same navbar is served for each page/component.
  // This will require a whole separate div, but might work better than adding nav to every page.

  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
