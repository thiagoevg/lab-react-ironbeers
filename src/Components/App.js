import React from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import HeaderTag from './HeaderTag';
import Beers from './Beers';
import BeerDetails from './BeerDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/:beers" component={HeaderTag} />
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:beerId" component={BeerDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
