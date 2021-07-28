import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="services">Services</Link>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
    </>
  );
}

export default App;
