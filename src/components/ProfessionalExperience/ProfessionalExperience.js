import React from "react";
import { connect } from "react-redux";
import {
  PROFESSIONAL_EXP_COMPANY,
  PROFESSIONAL_EXP_DESCRIPTION,
  PROFESSIONAL_EXP_GUIDE,
  PROFESSIONAL_EXP_END,
  PROFESSIONAL_EXP_START,
  PROFESSIONAL_EXP_TEAM
} from "../../constants/constants";

const ProfessionalExperience = props => {
  const index = props.index;
  const professionalExperience = props.professionalExperienceList[index];

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
      {console.log(professionalExperience)}
      <input
        type="textbox"
        name="ProfessionalExperience"
        value={professionalExperience.companyName}
        placeholder="ProfessionalExperience Name"
        className="form-control mt-2"
        onChange={companyNameChange}
      />
      <input
        type="textbox"
        name="description"
        value={professionalExperience.description}
        placeholder="Description"
        className="form-control mt-2"
        onChange={descriptionChange}
      />
      <input
        type="textbox"
        name="guide"
        value={professionalExperience.guide}
        placeholder="Guide"
        className="form-control mt-2"
        onChange={guideChange}
      />
      <input
        type="textbox"
        name="start"
        value={professionalExperience.start}
        placeholder="Start"
        className="form-control mt-2"
        onChange={startChange}
      />
      <input
        type="textbox"
        name="end"
        value={professionalExperience.end}
        placeholder="End"
        className="form-control mt-2"
        onChange={endChange}
      />
      <input
        type="textbox"
        name="team"
        value={professionalExperience.teamSize}
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
    professionalExperienceList: state.professionalExperience
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newCompanyName: (name, index) =>
      dispatch({ type: PROFESSIONAL_EXP_COMPANY, name, index }),
    newDescription: (description, index) =>
      dispatch({ type: PROFESSIONAL_EXP_DESCRIPTION, description, index }),
    newGuide: (guide, index) =>
      dispatch({ type: PROFESSIONAL_EXP_GUIDE, guide, index }),
    newStart: (start, index) =>
      dispatch({ type: PROFESSIONAL_EXP_START, start, index }),
    newEnd: (end, index) =>
      dispatch({ type: PROFESSIONAL_EXP_END, end, index }),
    newTeam: (team, index) =>
      dispatch({ type: PROFESSIONAL_EXP_TEAM, team, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessionalExperience);
