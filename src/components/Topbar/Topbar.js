import React from "react";
import { connect } from "react-redux";
import { database } from "../../firebase/firebase";

const Topbar = props => {
  const saveData = () => {
    database
      .ref()
      .set(props.resumeData)
      .then(() => {
        console.log("data saved successfully");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <span className="navbar-brand text-light">Resume</span>
        <div>
          <button className="btn btn-light mr-3" onClick={saveData}>
            Save
          </button>
          <button className="btn btn-light mr-3">Download PDF</button>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    resumeData: state
  };
};

export default connect(mapStateToProps)(Topbar);
