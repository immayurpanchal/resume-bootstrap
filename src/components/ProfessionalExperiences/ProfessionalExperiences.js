import React from "react";
import { connect } from "react-redux";
import Accordion from "../Accordion/Accordion";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import { ADD_PROFESSIONAL } from "../../constants/constants";

class ProfessionalExperiences extends React.Component {
  state = {
    accordionList: []
  };

  componentDidMount() {
    this.setState({
      accordionList: this.props.professionalExperiencesList.map(
        (object, index) => {
          return (
            <Accordion
              component={ProfessionalExperience}
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
        }
      )
    });
  }

  addNewAccordion() {
    this.props.newprofessionalExperience({
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
          component={ProfessionalExperience}
          key={Math.random()}
          title={`ProfessionalExperience #${this.state.accordionList.length}`}
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
    professionalExperiencesList: state.professionalExperience
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newprofessionalExperience: newprofessionalExperience =>
      dispatch({ type: ADD_PROFESSIONAL, newprofessionalExperience })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfessionalExperiences);
