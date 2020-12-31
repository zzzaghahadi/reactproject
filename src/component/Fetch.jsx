import React, { Component } from "react";
import Render from "./Render";
import Axios from "axios";

export default class Fetch extends Component {
  state = {
    data: [],
    Sellcurrency: [],
    Buycurrency: [],
  };
  componentDidMount() {
    const fetch = [];
    Axios.get(
      "https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
    ).then((res) => {
      console.log(res);
      for (let i in res.data.sana.data) {
        fetch.push({
          ...res.data.sana.data[i],
          id: i,
        });
      }
      this.setState({ data: fetch });
    });
  }
  render() {
    return <Render data={this.state.data} />;
  }
}
