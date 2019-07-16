import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, Redirect } from "react-router-dom";
import Catalog from "./catalog/Catalog";
import Detailed from "./detailed/Detailed";
import Header from "./header/Header.js";
import Footer from "./footer/Footer.js";
import SocialNetworks from "./s-networks/SocialNetworks.js";

import "./App.css";

class App extends Component {
  state = {
    isMainPage: !window.location.href.match("collection/"),
    currentCollection: 1,
    collectionLength: 15
  };
  onChangeDetailedPage = id => {
    this.setState({ currentCollection: id, isMainPage: false });
  };
  onChangePage = () => {
    this.setState({ isMainPage: true });
  };
  render() {
    return (
      <div className="App">
        <Header
          mainPage={this.state.isMainPage}
          currentCollection={this.state.currentCollection}
        />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={400}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/collection"
                    render={props => (
                      <Catalog {...props} onChangePage={this.onChangePage} />
                    )}
                  />
                  <Route
                    path="/collection/:id"
                    exact
                    render={props => (
                      <Detailed
                        {...props}
                        onChangePage={this.onChangeDetailedPage}
                      />
                    )}
                  />
                  <Route
                    path="/collection/:id/:slide"
                    render={props => (
                      <Detailed
                        {...props}
                        collectionLength={this.state.collectionLength}
                        onChangePage={this.onChangeDetailedPage}
                      />
                    )}
                  />
                  <Redirect from="/" exact to="/collection" />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <SocialNetworks />
        <Footer
          mainPage={this.state.isMainPage}
          onChangePage={this.onChangePage}
        />
      </div>
    );
  }
}

export default App;
