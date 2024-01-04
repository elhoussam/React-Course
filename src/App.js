import { Component } from "react";
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
    let filteredArr = this.state.monsters.filter((x) => {
      return x.name.includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Name your monster"
          onChange={(event) => this._renderMonster(event.target.value)}
        />
        <main className="box">
          {filteredArr.map((m) => {
            return <h1 key={m.id}> {m.name}</h1>;
          })}
        </main>
      </div>
    );
  }
  _renderMonster(filter = "") {
    this.setState({ searchField: filter });
  }
}

export default App;
