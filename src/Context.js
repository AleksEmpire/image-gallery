import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();
const API_KEY = "16782910-b499a688bbab8bdd7226c5928";
// const API_LINK_BASE = "https://pixabay.com/api/";
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_IMAGE":
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    images: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${API_KEY}&image_type=photo&pretty=true`
      )
      .then((res) => {
        const imageData = res.data.hits;
        this.setState({ images: imageData });
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
