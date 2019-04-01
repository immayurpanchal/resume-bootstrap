import React from "react";
import { connect } from "react-redux";
import {
  EDUCATION_CPI,
  EDUCATION_DEGREE_NAME,
  EDUCATION_INSTITUTE,
  EDUCATION_YEAR
} from "../../constants/constants";

const Degree = props => {
  const index = props.index;
  const degree = props.degreeList[index];

  const degreeNameChange = e => {
    props.newDegreeName(e.target.value, index);
  };

  const cpiChange = e => {
    props.newCpi(e.target.value, index);
  };

  const yearChange = e => {
    props.newYear(e.target.value, index);
  };

  const instituteChange = e => {
    props.newInstitute(e.target.value, index);
  };

  return (
    <div className="form-group" key={props.index}>
    {console.log(degree)}
      <input
        type="textbox"
        name="degree"
        value={degree.degree}
        placeholder="Degree Name"
        className="form-control mt-2"
        onChange={degreeNameChange}
      />
      <input
        type="textbox"
        name="institute"
        value={degree.institute}
        placeholder="Institute / University"
        className="form-control mt-2"
        onChange={instituteChange}
      />
      <input
        type="textbox"
        name="year"
        value={degree.year}
        placeholder="Year"
        className="form-control mt-2"
        onChange={yearChange}
      />
      <input
        type="textbox"
        name="cpi"
        value={degree.cpi}
        placeholder="CPI / Aggregate"
        className="form-control mt-2"
        onChange={cpiChange}
      />
      <button>REMOVE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    degreeList: state.education
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newCpi: (cpi, index) => dispatch({ type: EDUCATION_CPI, cpi, index }),
    newDegreeName: (degree, index) =>
      dispatch({ type: EDUCATION_DEGREE_NAME, degree, index }),
    newYear: (year, index) => dispatch({ type: EDUCATION_YEAR, year, index }),
    newInstitute: (institute, index) =>
      dispatch({ type: EDUCATION_INSTITUTE, institute, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Degree);
