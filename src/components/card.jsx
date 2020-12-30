import React, { Component } from "react";

export default class card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="left">
          <h3>{this.props.sell}</h3>
        </div>
        <div className="center">
          <h2>{this.props.currency}</h2>
        </div>
        <div className="right">
          <h3>{this.props.buy}</h3>
        </div>
      </div>
    );
  }
}
