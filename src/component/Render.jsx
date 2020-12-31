import React, { Component } from "react";
import Card from "./Card";

export default class Render extends Component {
  state = {
    buycurrency: [],
    sellcurrency: [],
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
      buycurrency: fetchBuy,
      sellcurrency: fetchSell,
    });
  }
  render() {
    return (
      <div>
      
  {this.props.data.map((data) => {
          return (
            <div key={data.id}>
              <Card
                sellcurrency={data.p}
                buycurrency={data.l}
                currency={String(data.slug).substr(9).toUpperCase()}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
