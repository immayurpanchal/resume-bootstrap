import React from "react";
import { connect } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Degree from "../Degree/Degree";
import { EDUCATION_ADD_DEGREE } from "../../constants/constants";

class Education extends React.Component {
  state = {
    accordionList: []
  };

  componentDidMount() {
    this.setState({
      accordionList: this.props.degreeList.map((object, index) => {
        return (
          <Accordion
            component={Degree}
            key={index}
            title={object.degree}
            degreeName={object.degree}
            year={object.year}
            institute={object.institute}
            cpi={object.cpi}
            index={index}
          />
        );
      })
    });
  }

  addNewAccordion() {
    this.props.newDegree({ degree: "", cpi: "", year: "", institute: "" });

    this.setState(() => ({
      accordionList: this.state.accordionList.concat(
        <Accordion
          component={Degree}
          key={Math.random()}
          title={`Degree #${this.state.accordionList.length}`}
          degreeName=""
          year=""
          institute=""
          cpi=""
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
    degreeList: state.education
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newDegree: newDegree => dispatch({ type: EDUCATION_ADD_DEGREE, newDegree })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Education);
