import { Component } from "react";
import CardList from "./component/card-list/card-list.component.jsx";
import SearchBox from "./component/search-box/search-box.component.jsx";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [], searchField: "" };
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
            return { robots: userss };
          },
          () => console.log(this.state)
        );
      });
  }
  render() {
    let { robots, searchField } = this.state;
    let { _renderrobots } = this;

    let filteredrobots = robots.filter((x) => {
      return x.name.includes(searchField);
    });
    return (
      <div className="App">
        <SearchBox
          onSearchChange={_renderrobots}
          placeholder="search robotss"
        />
        <CardList robots={filteredrobots} />
      </div>
    );
  }
  _renderrobots = (event) => {
    let filter = event.target.value;
    this.setState({ searchField: filter });
  };
}

export default App;
