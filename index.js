import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/Auth";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AuthContext.Provider value={false}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/admin">Admin Page</Link>
              </li>
            </ul>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/admin" component={Admin} />
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
