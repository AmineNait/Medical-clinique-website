import './App.css';

import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./pages";
import RendezvousPage from './pages/rendezvous';
import ServiceInfoPage from './pages/serviceinfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rendezvous" component={RendezvousPage} exact />
        <Route path="/serviceinfo" component={ServiceInfoPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
