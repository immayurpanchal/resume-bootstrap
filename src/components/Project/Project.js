import React from "react";
import { connect } from "react-redux";
import {
  PROJECT_NAME,
  PROJECT_DESCRIPTION,
  PROJECT_END,
  PROJECT_GUIDE,
  PROJECT_START,
  PROJECT_TEAM
} from "../../constants/constants";

const Project = props => {
  const index = props.index;
  const project = props.projectList[index];

  const companyNameChange = e => {
    props.newCompanyName(e.target.value, index);
  };

  const descriptionChange = e => {
    props.newDescription(e.target.value, index);
  };

  const guideChange = e => {
    props.newGuide(e.target.value, index);
  };

  const startChange = e => {
    props.newStart(e.target.value, index);
  };

  const endChange = e => {
    props.newEnd(e.target.value, index);
  };

  const teamChange = e => {
    props.newTeam(e.target.value, index);
  };

  return (
    <div className="form-group" key={props.index}>
      <input
        type="textbox"
        name="project"
        value={project.companyName}
        placeholder="Company Name"
        className="form-control mt-2"
        onChange={companyNameChange}
      />
      <input
        type="textbox"
        name="description"
        value={project.description}
        placeholder="Description"
        className="form-control mt-2"
        onChange={descriptionChange}
      />
      <input
        type="textbox"
        name="guide"
        value={project.guide}
        placeholder="Guide"
        className="form-control mt-2"
        onChange={guideChange}
      />
      <input
        type="textbox"
        name="start"
        value={project.start}
        placeholder="Start"
        className="form-control mt-2"
        onChange={startChange}
      />
      <input
        type="textbox"
        name="start"
        value={project.end}
        placeholder="End"
        className="form-control mt-2"
        onChange={endChange}
      />
      <input
        type="textbox"
        name="team"
        value={project.teamSize}
        placeholder="Team Size"
        className="form-control mt-2"
        onChange={teamChange}
      />
      <button>REMOVE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    projectList: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newCompanyName: (name, index) =>
      dispatch({ type: PROJECT_NAME, name, index }),
    newDescription: (description, index) =>
      dispatch({ type: PROJECT_DESCRIPTION, description, index }),
    newGuide: (guide, index) => dispatch({ type: PROJECT_GUIDE, guide, index }),
    newStart: (start, index) => dispatch({ type: PROJECT_START, start, index }),
    newEnd: (end, index) => dispatch({ type: PROJECT_END, end, index }),
    newTeam: (team, index) => dispatch({ type: PROJECT_TEAM, team, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
