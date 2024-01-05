import { Component } from "react";
import CardList from "./component/card-list/card-list.component.jsx";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }
  componentDidMount() {
    this.fetching();
  }
  fetching() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((userss) => {
        // console.log(userss);
        this.setState(
          () => {
            return { monsters: userss };
          },
          () => console.log(this.state)
        );
      });
  }
  render() {
    let { monsters, searchField } = this.state;
    let { _renderMonster } = this;

    let filteredArr = monsters.filter((x) => {
      return x.name.includes(searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Name your monster"
          onChange={this._renderMonster}
        />
        <CardList />
        {filteredArr.map((m) => {
          return <h1 key={m.id}> {m.name}</h1>;
        })}
      </div>
    );
  }
  _renderMonster = (event) => {
    let filter = event.target.value;
    this.setState({ searchField: filter });
  };
}

export default App;
