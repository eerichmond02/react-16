import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContextAPI from "./ContextApi";
import LifecycleMethods from "./LifecycleMethods";
import Refs from "./Refs";
import Fragments from "./Fragments";
import { BrowserRouter, Route, Link } from "react-router-dom";

const CustomLink = ({ label, to, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? "active navItem" : "navItem"}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React 16.3</h1>
            <ul className="nav">
              <CustomLink label="Context API" to="/" exact={true}/>
              <CustomLink label="Lifecycle Methods" to="/lifecycle" />
              <CustomLink label="Refs" to="/refs" />
              <CustomLink label="Fragments" to="/fragments" />
            </ul>
          </header>
          <div className="content">
          <Route path="/" exact component={ContextAPI} />
          <Route path="/lifecycle" component={LifecycleMethods} />
          <Route path="/refs" component={Refs} />
          <Route path="/fragments" component={Fragments} />
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
