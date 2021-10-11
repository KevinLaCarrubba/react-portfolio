import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
