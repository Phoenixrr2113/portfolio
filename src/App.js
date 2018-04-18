import React, { Component } from 'react';
import fontawesome from 'fontawesome';
import { Route, Switch } from 'react-router-dom';
import FontAwesomeIcon from 'react-fontawesome';
import About from './components/navigation/about';
import Contact from './components/navigation/contact';
import Navigation from './components/navigation/navigation';
// import Projects from './components/navigation/projects';
import Home from './components/navigation/home';

class App extends Component {
  render() {
    return (
      <div className="container pt-3">
        <div className="container">
          <Navigation />
          <div>
            <Switch>
              <Route path="/contact" component={Contact} />
              {/* <Route path="/projects" component={Projects} /> */}
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
