import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ClassName="c">
        <div cClassName="le">
          <h3>{this.props.sell}</h3>
        </div>
        <div ClassName="ce">
          <h2>{this.props.currency}</h2>
        </div>
        <div ClassName="ri">
          <h3>{this.props.buy}</h3>
        </div>
      </div>
    );
  }
}
