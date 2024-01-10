// import { Component } from "react";
import Card from "../card/card.component.jsx";

import "./card.styles.css";

const CardList = (props) => {
  let { robots } = props;
  // console.log("card list", robots);
  return (
    <div className="card-list">
      {robots.map((m) => {
        return <Card robot={m} key={m.id} />;
      })}
    </div>
  );
};
export default CardList;
