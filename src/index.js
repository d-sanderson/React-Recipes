import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites';
import NotFound from './components/NotFound';
import styles from './styles/index.css';

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

const MOUNT_ELEMENT = document.getElementById('root');
ReactDOM.render(routing, MOUNT_ELEMENT);
