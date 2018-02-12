import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Skills from './components/Skills/Skills';
import Projects from './components/Portfolio/Projects';
import About from './components/About/About';

export default (
  <Switch>
    <Route exact path="/skills" component={ Skills } />
    <Route exact path="/projects" component={ Projects } />
    <Route exact path="/about" component={ About } />
  </Switch>
)