import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { Component } from "react";

import Catalog from "./catalog/Catalog";
import Detailed from "./detailed/Detailed";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RotateMessage from "./common/RotateMessage";
import SocialNetworks from "./components/s-networks/SocialNetworks";

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
                  <Redirect from="/" exact to="/collection" />
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
                  <Route render={() => <div>Page Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <Footer
          mainPage={this.state.isMainPage}
          onChangePage={this.onChangePage}
        />
        <SocialNetworks />
        <RotateMessage />
      </div>
    );
  }
}

export default App;
