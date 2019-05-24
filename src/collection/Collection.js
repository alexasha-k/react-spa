import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Catalog from '../catalog/Catalog';
import Detailed from '../detailed/Detailed';
import items from '../collections.json';

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
  }

  render() {
    const item = items.find((el) => +el.id === 1)
    return (
      <div className="Collection">
        {item.name}
        Hello Collection!
        <Switch>
          <Route exact path='/collection' component={Catalog}/>
          <Route path='/collection/:number' component={Detailed}/>
        </Switch>
      </div>
    )
  }
}

export default Collection;
