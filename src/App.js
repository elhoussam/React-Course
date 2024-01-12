// import { Component } from "react";
import CardList from "./component/card-list/card-list.component.jsx";
import SearchBox from "./component/search-box/search-box.component.jsx";
import { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // console.log("render");
  const [searchField, setsearchField] = useState("");
  const [title, settitle] = useState("");
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setfilteredRobots] = useState(robots);
  // console.log({ searchField });

  let _renderrobots = (event) => {
    let filter = event.target.value;
    setsearchField(filter);
    // this.setState({ searchField: filter });
  };
  let _onChangeTitle = (event) => {
    let filter = event.target.value;
    settitle(filter);
    // this.setState({ searchField: filter });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((userss) => {
        setRobots(userss);
      });
  }, []);

  useEffect(() => {
    const newfilteredRobots = robots.filter((x) => {
      return x.name.includes(searchField);
    });
    setfilteredRobots(newfilteredRobots);
    console.log(" render ");
  }, [robots, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox onSearchChange={_renderrobots} placeholder="search robots" />
      <SearchBox onSearchChange={_onChangeTitle} placeholder="" />

      <CardList robots={filteredRobots} />
    </div>
  );
};
/* 
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

*/
export default App;
