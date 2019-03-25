import React from "react";
import Accordion from "../Accordion/Accordion";
import Degree from "../Degree/Degree";

class Education extends React.Component {
  state = {
    degreeList: []
  };

  addNewAccordion() {
    const number = this.state.degreeList.length;
    this.setState({
      degreeList: this.state.degreeList.concat(
        <Accordion
          component={Degree}
          key={number}
          title={`Degree #${number}`}
        />
      )
    });
  }

  render() {
    return (
      <div>
        {this.state.degreeList}
        <button
          className="btn btn-primary mt-2"
          onClick={this.addNewAccordion.bind(this)}
        >
          ADD
        </button>
      </div>
    );
  }
}


export default Education;
