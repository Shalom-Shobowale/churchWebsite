import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Event from './Pages/Event';
import Mission from './Pages/Mission';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/event" component={Event} />
        <Route path="/mission" component={Mission} />
        <Route path="/contact" component={Contact} />
        {/* Optional: Add a 404 Not Found route */}
        <Route path="*">
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </Router>
  );
}
