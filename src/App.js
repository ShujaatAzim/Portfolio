import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import { Switch, Route } from 'react-router-dom';
import ButtonAppBar from './Components/ButtonAppBar';

const App = () => {
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
      <footer>
        Made by Shu
      </footer>
    </div>
  );
}

export default App;
