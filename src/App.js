import { Component } from "react";
import CardList from "./component/card-list/card-list.component.jsx";
import SearchBox from "./component/search-box/search-box.component.jsx";
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

    let filteredMonster = monsters.filter((x) => {
      return x.name.includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          onSearchChange={_renderMonster}
          placeholder="search monsters"
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
  _renderMonster = (event) => {
    let filter = event.target.value;
    this.setState({ searchField: filter });
  };
}

export default App;
