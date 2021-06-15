import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import NotFound from './Pages/NotFound';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <NavBar />
      </div>
      <div className="body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </div>
      {/* damned footer still overlaps site content when screen is resized... */}
      <footer className="footer">
        <hr />
        Built from scratch with React by Shujaat Azim
      </footer>
    </div>
  );
}

export default App;
