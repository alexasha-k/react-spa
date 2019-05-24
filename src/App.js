import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from './catalog/Catalog';
import Collection from './collection/Collection';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import SocialNetworks from './s-networks/SocialNetworks.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Catalog}/>
        <Route path='/collection' component={Collection}/>
      </Switch>
      <SocialNetworks />
      <Footer />
    </div>
  );
}

export default App;
