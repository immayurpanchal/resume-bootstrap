import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Preview from "./components/Preview/Preview";

class App extends Component {
  state = {
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="clearfix">
          <Topbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="App-height">
                  <Sidebar />
                </div>
              </div>
              <div className="col-8">
                <div className="App-height">
                  <Preview />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
