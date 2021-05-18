import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import DetailPage from "./pages/Result";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = {
    locationInput: "",
    positionInput: "",
    searchResults: [],
    selectedJob: null,
    isLoading: false,
  };

  handleInput = (e) => {
    let name = e.target.name;
    console.log("id of this input field is", name);

    this.setState({
      ...this.state,
      [name]: e.target.value,
    });
  };

  submitQuery = async (e) => {
    e.preventDefault();
    let baseUrl = "https://jobs.github.com/positions.json";
    let locationQ = `location=${this.state.locationInput}`;
    let positionQ = `description=${this.state.positionInput}`;

    try {
      let response = await fetch(`${baseUrl}?${locationQ}&${positionQ}`);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          ...this.state,
          searchResults: data,
        });
      } else {
        console.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Router>
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <Home
              {...routerProps}
              handleInput={this.handleInput}
              locationInput={this.state.locationInput}
              positionInput={this.state.positionInput}
              handleSubmit={this.submitQuery}
            />
          )}
        />
        <Route
          path="/results"
          exact
          render={(routerProps) => (
            <Result {...routerProps} jobs={this.state.searchResults} />
          )}
        />
        <Route
          path="/results/id"
          exact
          render={(routerProps) => (
            <DetailPage
              {...routerProps}
              selecetedJob={this.state.selectedJob}
            />
          )}
        />
      </Router>
    );
  }
}

export default App;
