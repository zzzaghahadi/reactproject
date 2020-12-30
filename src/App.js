import React, { Component } from "react";
import "./App.css";
import Card from "./components/card";
import FetchData from "./components/FetchData";
import Axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <FetchData />
      </div>
    );
  }
}
