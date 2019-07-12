import React, { Component } from "react";
import CatalogItems from "./CatalogItems";

import "./Catalog.css";

class Catalog extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Right Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 2,
        name: "Nature Line",
        imageLink: "/images/catalog2.jpg"
      },
      {
        id: 3,
        name: "Storm Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 4,
        name: "Valley Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 5,
        name: "Mountain Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 6,
        name: "Desert Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 7,
        name: "Woods Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 8,
        name: "Beach Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 9,
        name: "Gold Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 10,
        name: "Silver Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 11,
        name: "Bronce Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 12,
        name: "Lion Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 13,
        name: "Bronce Line",
        imageLink: "/images/catalog1.jpg"
      },
      {
        id: 14,
        name: "Arch Line",
        imageLink: "/images/catalog14.jpg"
      },
      {
        id: 15,
        name: "Point Line",
        imageLink: "/images/catalog15.jpg"
      }
    ]
  };
  render() {
    return (
      <div>
        <main className="Catalog">
          <div className="main-page">
            <h1>Catalogue</h1>
            <div className="all-catalog">
              <div className="all-catalog__col">
                <div className="all-catalog__row all-catalog__row--card all-catalog__row--right">
                  <CatalogItems items={this.state.items.slice(0, 2)} />
                </div>
                <div className="all-catalog__row all-catalog__row--bottom">
                  <CatalogItems items={this.state.items.slice(2, 8)} />
                </div>
              </div>
              <div className="all-catalog__col">
                <div className="all-catalog__row">
                  <CatalogItems items={this.state.items.slice(8, 13)} />
                </div>
                <div className="all-catalog__row all-catalog__row--card">
                  <CatalogItems items={this.state.items.slice(13, 15)} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Catalog;
