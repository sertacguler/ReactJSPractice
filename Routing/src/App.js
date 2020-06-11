import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/about/:id" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    Home Page
  </div>
);

export default App;
