import React, { Component } from "react";

import "./App.css";
import Form from "./components/Form.js";
import Bust from "./components/Bust.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/info">
            <div href className="info-button">
              <span className="question-mark">?</span>
            </div>
          </Link>
          <Route exact path="/" component={Bust} />
          <Route exact path="/info" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
