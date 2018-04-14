import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RoomCard from "./components/RoomCard";
import * as Firebase from "./config/firebase";
var defaultDatabase = firebase.database();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RoomCard
          roomCode="S11_LECTURE_HALL"
          roomLocation="17 Rainforest Walk"
          roomPicture="https://www.monash.edu/__data/assets/image/0009/292365/science-lecture-theatre1.jpg"
        />
      </div>
    );
  }
}

export default App;
