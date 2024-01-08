import { Component } from "react";
import Card from "../card/card.component.jsx";

import "./card.styles.css";
class CardList extends Component {
  render() {
    let { robots } = this.props;
    // console.log("card list", robots);
    return (
      <div className="card-list">
        {robots.map((m) => {
          return <Card robot={m} key={m.id} />;
        })}
      </div>
    );
  }
}
export default CardList;
