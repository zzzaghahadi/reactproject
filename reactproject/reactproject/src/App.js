import React, { Component } from "react";
import "./App.css";
import Card from "./component/Card";
import Fetch from "./component/FetchData";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card/>
        <Fetch />
      </div>
    );
  }
}
