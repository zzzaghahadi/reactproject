import React, { Component } from "react";
import Card from "./card";

export default class Render extends Component {
  state = {
    buy: [],
    sell: [],
  };
  componentDidMount() {
    let fetchBuy = [];
    for (let i = 0; i < 15; i++) {
      fetchBuy.push({
        ...this.props.data[i],
        id: i,
      });
    }
    let fetchSell = [];
    for (let j = 16; j < 30; j++) {
      fetchSell.push({
        ...this.props.data[j],
        id: j,
      });
    }
    this.setState({
      buy: fetchBuy,
      sell: fetchSell,
    });
  }
  render() {
    return (
      <div>
      
  {this.props.data.map((data) => {
          return (
            <div key={data.id}>
              <Card
                sell={data.p}
                buy={data.l}
                currency={String(data.slug).substr(9).toUpperCase()}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
