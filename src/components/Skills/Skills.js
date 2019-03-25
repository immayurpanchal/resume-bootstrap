import React from "react";
import { connect } from "react-redux";
import {
  SKILLS_EXPERTIES,
  SKILLS_PROGRAMMING_LANGUAGES,
  SKILLS_TECHNICAL_ELECTIVES,
  SKILLS_TOOLS_AND_TECHNOLOGIES
} from "../../constants/constants";

const Skills = props => {
  const expertiseChange = e => {
    props.newExpertiseChange(e.target.value);
  };

  const programmingLanguages = e => {
    props.newProgrammingLanguages(e.target.value);
  };

  const toolsAndTechnologies = e => {
    props.newToolsAndTechnologies(e.target.value);
  };

  const technicalElectives = e => {
    props.newTechnicalElectives(e.target.value);
  };

  return (
    <div>
      <input
        type="textbox"
        value={props.expertise}
        name="expertise"
        placeholder="Expertise Area / Area(s) of Interest"
        className="form-control mt-2"
        onChange={expertiseChange}
      />

      <input
        type="textbox"
        value={props.programmingLanguages}
        name="programmingLanguages"
        placeholder="Programming Languages"
        className="form-control mt-2"
        onChange={programmingLanguages}
      />

      <input
        type="textbox"
        value={props.toolsAndTechnologies}
        name="ToolsAndTechnologies"
        placeholder="Tools and Technologies"
        className="form-control mt-2"
        onChange={toolsAndTechnologies}
      />

      <input
        type="textbox"
        value={props.technicalElectives}
        name="TechnicalElectives"
        placeholder="Technical Electives"
        className="form-control mt-2"
        onChange={technicalElectives}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expertise: state.skills.expertise,
    programmingLanguages: state.skills.programmingLanguages,
    toolsAndTechnologies: state.skills.toolsAndTechnologies,
    technicalElectives: state.skills.technicalElectives
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newExpertiseChange: expertise =>
      dispatch({ type: SKILLS_EXPERTIES, expertise }),
    newProgrammingLanguages: programmingLanguages =>
      dispatch({ type: SKILLS_PROGRAMMING_LANGUAGES, programmingLanguages }),
    newToolsAndTechnologies: toolsAndTechnologies =>
      dispatch({ type: SKILLS_TOOLS_AND_TECHNOLOGIES, toolsAndTechnologies }),
    newTechnicalElectives: technicalElectives =>
      dispatch({ type: SKILLS_TECHNICAL_ELECTIVES, technicalElectives })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skills);
