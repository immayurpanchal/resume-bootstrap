import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Preview from "./components/Preview/Preview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className="row">
          <Sidebar />
          <Preview />
        </div>
      </div>
    );
  }
}

export default App;
