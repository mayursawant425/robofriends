import React from "react";
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundry'
import CardList from "../components/CardList";
// import { robots } from "../robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobotList = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobotList} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;