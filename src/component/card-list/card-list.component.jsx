import { Component } from "react";

class CardList extends Component {
  render() {
    let { monster } = this.props;
    return (
      <div>
        {monster.map((m) => {
          return <h1 key={m.id}> {m.name}</h1>;
        })}
      </div>
    );
  }
}
export default CardList;
