import React from 'react';
import { Link } from 'react-router-dom';

import './Catalog.css';

// Colors:
// pink background: #ede0df
// blue background: #e5eaeb
// pink text: #f6efef;
// gray text: rgba(0,0,0,0.4)

const items = [
  {
    id: 1,
    name: 'Right Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 2,
    name: 'Nature Line',
    imageLink: '/images/catalog2.jpg'
  },
  {
    id: 3,
    name: 'Storm Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 4,
    name: 'Valley Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 5,
    name: 'Mountain Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 6,
    name: 'Desert Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 7,
    name: 'Woods Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 8,
    name: 'Beach Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 9,
    name: 'Gold Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 10,
    name: 'Silver Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 11,
    name: 'Bronce Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 12,
    name: 'Lion Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 13,
    name: 'Bronce Line',
    imageLink: '/images/catalog1.jpg'
  },
  {
    id: 14,
    name: 'Arch Line',
    imageLink: '/images/catalog14.jpg'
  },
  {
    id: 15,
    name: 'Point Line',
    imageLink: '/images/catalog15.jpg'
  }
]
function renderCatalogItems(start, end) {
  const reducedArr = items.slice(start, start+end);
  return reducedArr.map((item) => <div className="all-catalog__item" key={item.id}>
    <div className="item-number">Coll. N°{item.id}</div>
    <div className="item-title">{item.name}</div>
    <Link className="link arrow-link" to={{pathname: `collection/${item.id}` }}>→</Link>
    <img className="item-image" src={item.imageLink} alt={item.name}/>
  </div>)
}

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10
    };
  }

  render() {
    return (
      <div>
          <main className="Catalog">
            <div className="main-page">
              <h1>Catalogue</h1>
              <div className="all-catalog">
                <div className="all-catalog__col">
                  <div className="all-catalog__row all-catalog__row--card all-catalog__row--right">
                    {renderCatalogItems(0,2)}
                  </div>
                  <div className="all-catalog__row all-catalog__row--bottom">
                    {renderCatalogItems(2,6)}
                  </div>
                </div>
                <div className="all-catalog__col">
                  <div className="all-catalog__row">
                    {renderCatalogItems(8,5)}
                  </div>
                  <div className="all-catalog__row all-catalog__row--card">
                    {renderCatalogItems(13,2)}
                  </div>
                </div>
              </div>
            </div>
          </main>          
      </div>
    )
  }
}

export default Catalog;
