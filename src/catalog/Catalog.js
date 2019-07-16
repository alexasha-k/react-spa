import React, { Component } from "react";
import CatalogItems from "./CatalogItems";

import "./Catalog.css";

class Catalog extends Component {
  state = {
    items: [
      {
        id: 1,
        name: "Surfers Paradise",
        imageLink: "/images/beaches/beach1.jpg"
      },
      {
        id: 2,
        name: "Wineglass Bay",
        imageLink: "/images/beaches/beach2.jpg"
      },
      {
        id: 3,
        name: "Whitehaven Beach"
      },
      {
        id: 4,
        name: "Wategos Beach"
      },
      {
        id: 5,
        name: "Turquoise Bay"
      },
      {
        id: 6,
        name: "Shelly Beach"
      },
      {
        id: 7,
        name: "Second Valley Beach"
      },
      {
        id: 8,
        name: "Seal Rocks"
      },
      {
        id: 9,
        name: "Nudey Beach"
      },
      {
        id: 10,
        name: "Noosa Heads"
      },
      {
        id: 11,
        name: "Manly Beach"
      },
      {
        id: 12,
        name: "Lake Hillier"
      },
      {
        id: 13,
        name: "Hyams Beach"
      },
      {
        id: 14,
        name: "Horrocks Beach",
        imageLink: "/images/beaches/beach14.jpg"
      },
      {
        id: 15,
        name: "Byron Bay",
        imageLink: "/images/beaches/beach15.jpg"
      }
    ]
  };

  componentDidMount() {
    this.props.onChangePage();
  }
  render() {
    return (
      <div>
        <main className="Catalog">
          <div className="main-page">
            <h1>Place to Visit</h1>
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
