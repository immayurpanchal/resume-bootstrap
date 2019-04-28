import React, { Component } from "react";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { database } from "./firebase/firebase";
import "./App.css";
import loading from "./assets/loading.gif";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Preview from "./components/Preview/Preview";

class App extends Component {
  state = {
    isLoading: true,
    store: null
  };

  componentDidMount() {
    database
      .ref()
      .once("value")
      .then(snapshot => {
        const myStore = configureStore(snapshot.val());
        this.setState(() => ({
          store: myStore,
          isLoading: false
        }));
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div className="container">
          <img src={loading} alt="loading" className="img-loading" />
        </div>
      );
    } else {
      return (
        <Provider store={this.state.store}>
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
        </Provider>
      );
    }
  }
}

export default App;
