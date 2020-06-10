import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";
const API_KEY = "16782910-b499a688bbab8bdd7226c5928";
export default class ImageSearch extends Component {
  state = {
    imgTitle: "",
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  searchImage = (dispatch, e) => {
    e.preventDefault();
    const { imgTitle } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${API_KEY}&q=${imgTitle}&image_type=photo&pretty=true`
      )

      .then(
        (res) =>
          dispatch({
            type: "SEARCH_IMAGE",
            payload: res.data.hits,
          }),
        this.setState({
          imgTitle: "",
        })
      )

      .catch(console.error());
  };
  render() {
    const { imgTitle } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
              <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                  <input
                    name="imgTitle"
                    value={imgTitle}
                    onChange={this.onChangeHandler.bind(this)}
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Search Image Term..."
                  />
                  <button
                    onClick={this.searchImage.bind(this, dispatch)}
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
