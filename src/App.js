import React, { Component } from "react";
import { Footer, NavigationBar, SignUp } from "./components";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Route path="/signup" exact render={props => <SignUp {...props} />} />
        <Footer />
      </div>
    );
  }
}

export default App;
