import React from "react";
import { connect } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Project from "../Project/Project";
import { ADD_PROJECTS } from "../../constants/constants";

class Projects extends React.Component {
  state = {
    accordionList: []
  };

  componentDidMount() {
    this.setState({
      accordionList: this.props.projectsList.map((object, index) => {
        return (
          <Accordion
            component={Project}
            key={index}
            title={object.companyName}
            companyName={object.companyName}
            description={object.description}
            guide={object.guide}
            start={object.start}
            end={object.end}
            teamSize={object.teamSize}
            index={index}
          />
        );
      })
    });
  }

  addNewAccordion() {
    this.props.newProject({
      companyName: "",
      description: "",
      guide: "",
      start: "",
      end: "",
      teamSize: ""
    });

    this.setState(() => ({
      accordionList: this.state.accordionList.concat(
        <Accordion
          component={Project}
          key={Math.random()}
          title={`Project #${this.state.accordionList.length}`}
          companyName=""
          description=""
          guide=""
          start=""
          end=""
          teamSize=""
          index={this.state.accordionList.length}
        />
      )
    }));
  }

  render() {
    return (
      <div>
        {this.state.accordionList}
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

const mapStateToProps = state => {
  return {
    projectsList: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newProject: newProject => dispatch({ type: ADD_PROJECTS, newProject })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
