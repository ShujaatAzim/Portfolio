import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { HiHeart } from 'react-icons/hi';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <NavBar />
      </div>
      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
      <footer className="footer">
        <hr />
        Made with React and <HiHeart /> by Shujaat Azim
      </footer>
    </div>
  );
}

export default App;
