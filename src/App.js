import React from "react";
import SearchBox from './SearchBox'
import CardList from "./CardList";
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobotList = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobotList} />
      </div>
    );
  }
}

export default App;