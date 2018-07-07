import React, { Component } from "react";
import bust from "../images/male-tears.png";
import Tears from "./Tears.js";

class Bust extends Component {
  state = {
    country: 0,
    countries: [
      ["Malasia", 1],
      ["Poland", 2],
      ["Iceland", 3],
      ["Switzerland", 4],
      ["UK", 5],
      ["Netherlands", 6],
      ["Lithiania", 7],
      ["Japan", 8],
      ["Israel", 9],
      ["Portugal", 10],
      ["Belgium", 11],
      ["Indonisia", 12],
      ["Greece", 13],
      ["Finland", 14],
      ["Jamaica", 15],
      ["Australia", 16],
      ["Romania", 17],
      ["India", 18],
      ["Spain", 19],
      ["China", 20],
      ["Chile", 21],
      ["Korea", 22],
      ["Nigeria", 23],
      ["NewZealand", 24],
      ["Nepal", 25],
      ["Bulgaria", 26],
      ["US", 27],
      ["Hungary", 28],
      ["Austria", 29],
      ["Ghana", 30],
      ["Kenya", 31],
      ["Sweden", 32],
      ["Germany", 33],
      ["Peru", 34],
      ["Brazil", 35],
      ["Turkey", 36],
      ["Italy", 37]
    ]
  };

  handleClick = event => {
    let newCountry;
    if (this.state.country === 36) {
      newCountry = 0;
    } else {
      newCountry = this.state.country + 1;
    }
    this.setState({ country: newCountry });
  };

  render() {
    return (
      <div className="container">
        <img
          className="bust"
          src={bust}
          onClick={event => {
            this.handleClick(event);
          }}
        />
        <div className="tear-container">
          <Tears tearQuantity={this.state.country + 10} />
        </div>
        <div className="countries">
          {this.state.countries[this.state.country][0]}
        </div>
      </div>
    );
  }
}

export default Bust;
