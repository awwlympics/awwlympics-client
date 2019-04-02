import React, { Component } from "react";
import SignUp from "./components/SignUp";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <SignUp />
        <Footer />
      </div>
    );
  }
}

export default App;
