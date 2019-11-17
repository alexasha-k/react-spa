import "./Catalog.css";

import React, { Component } from "react";

import CatalogItems from "./CatalogItems";
import catalogItems from "../assets/data/beaches-catalog.json";

class Catalog extends Component {
  state = {
    items: null
  };

  componentDidMount() {
    this.setState({ items: catalogItems });
    this.props.onChangePage();
  }
  render() {
    return (
      <div>
        <main className="Catalog">
          <div className="main-page">
            <h1>Place to Visit</h1>
            {this.state.items && (
              <div className="catalog">
                <div className="catalog__col">
                  <div className="catalog__row catalog__row--card catalog__row--right">
                    <CatalogItems
                      grid="cards"
                      items={this.state.items.slice(0, 2)}
                    />
                  </div>
                  <div className="catalog__row catalog__row--bottom">
                    <CatalogItems
                      grid="list"
                      items={this.state.items.slice(2, 8)}
                    />
                  </div>
                </div>
                <div className="catalog__col">
                  <div className="catalog__row">
                    <CatalogItems
                      grid="list"
                      items={this.state.items.slice(8, 13)}
                    />
                  </div>
                  <div className="catalog__row catalog__row--card">
                    <CatalogItems
                      grid="cards"
                      items={this.state.items.slice(13, 15)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default Catalog;
