import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from '../catalog/Catalog';
import Detailed from '../detailed/Detailed';

import './Collection.css';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
  }

  render() {
    return (
      <div className="Collection">
        <Switch>
          <Route exact path='/collection' component={Catalog}/>
          <Route path='/collection/:number' component={Detailed}/>
        </Switch>
      </div>
    )
  }
}

export default Collection;
