import React from 'react';
import { Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={ Principal } />
      <Route path="/favorites" component={ Favorites } />
      <Route path="/details/:id" component={ Details } />
    </div>
  );
}

export default App;
