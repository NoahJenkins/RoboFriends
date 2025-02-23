import React from "react";
import CardList from "../components/CardList.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/scroll.jsx";

class App extends React.Component {
    constructor() { 
        // The constructor is used for initializing the component's state
        super(); // Calls the constructor of the parent class (React.Component)
        this.state = {
            robots: [], // Initial state for the list of robots
            searchfield: "", // Initial state for the search field (empty string)
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(users => this.setState({ robots: users }));
    }

    // Event handler for updating searchfield state when user types in the search box
    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    render() {
        // Filters the robots list based on the search field input
        const filteredRobots = this.state.robots.filter(robot => 
            robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        );
        console.log(filteredRobots)

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>;
        } else {

        return (
            <div className="tc">
                <h1>RoboFriends</h1> {/* Page title */}
                <SearchBox searchChange={this.OnSearchChange} /> {/* Search input */}
                <Scroll>
                <CardList robots={filteredRobots} /> {/* Displays filtered robots */}
                </Scroll>
            </div>
        );
    }}
}

export default App;
