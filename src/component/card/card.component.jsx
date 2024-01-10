// import { Component } from "react";

const Card = (props) => {
  let { robot } = props;
  return (
    <div key={robot.id} className="card-container">
      <img
        alt={`robot + ${robot.name}`}
        src={`https://robohash.org/${robot.id}?set=set1&size=100x100`}
      />
      <h2> {robot.name}</h2>
      <p> {robot.email}</p>
    </div>
  );
};

export default Card;
