import React, { Component } from "react";
import ImageCard from "./components/imageCard/ImageCard";
import ImageSearch from "./components/imageSearch/ImageSearch";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <ImageSearch />
        <div className="grid grid-cols-3 gap-4">
          <ImageCard />
        </div>
      </div>
    );
  }
}
