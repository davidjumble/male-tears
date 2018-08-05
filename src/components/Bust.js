import React, { Component } from "react";
import bust from "../images/male-tears.png";
import Tears from "./Tears.js";

class Bust extends Component {
  state = {
    country: 0,
    countries: [
      ["MALAYSIA", 1],
      ["POLAND", 2],
      ["ICELAND", 3],
      ["SWITZERLAND", 4],
      ["UK", 5],
      ["NETHERLANDS", 6],
      ["LITHUANIA", 7],
      ["JAPAN", 8],
      ["ISRAEL", 9],
      ["PORTUGAL", 10],
      ["BELGIUM", 11],
      ["INDONISIA", 12],
      ["GREECE", 13],
      ["FINLAND", 14],
      ["JAMAICA", 15],
      ["AUSTRALIA", 16],
      ["ROMANIA", 17],
      ["INDIA", 18],
      ["SPAIN", 19],
      ["CHINA", 20],
      ["CHILE", 21],
      ["KOREA", 22],
      ["NIGERIA", 23],
      ["NEWZEALAND", 24],
      ["NEPAL", 25],
      ["BULGARIA", 26],
      ["US", 27],
      ["HUNGARY", 28],
      ["AUSTRIA", 29],
      ["GHANA", 30],
      ["KENYA", 31],
      ["SWEDEN", 32],
      ["GERMANY", 33],
      ["PERU", 34],
      ["BRAZIL", 35],
      ["TURKEY", 36],
      ["ITALY", 37]
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
      <div
        className="container"
        onClick={event => {
          this.handleClick(event);
        }}
      >
        <div className="tear-container">
          <img
            className="bust"
            src={bust}
            alt="An illustration of a stone bust. The bust is a bearded man, with animated cyan tears running down his chest"
          />
          <Tears tearQuantity={this.state.country + 10} />
          <div className="countries">
            {this.state.countries[this.state.country][0]}
          </div>
        </div>
      </div>
    );
  }
}

export default Bust;
