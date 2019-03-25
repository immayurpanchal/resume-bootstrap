import React from "react";
import { connect } from "react-redux";
import {
  EDUCATION_CPI,
  EDUCATION_DEGREE_NAME,
  EDUCATION_INSTITUTE,
  EDUCATION_YEAR
} from "../../constants/constants";

const Degree = props => {
  const degreeNameChange = e => {
    props.newDegreeName(e.target.value);
  };

  const cpiChange = e => {
    props.newCpi(e.target.value);
  };

  const yearChange = e => {
    props.newYear(e.target.value);
  };

  const instituteChange = e => {
    props.newInstitute(e.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="textbox"
        name="props.degreeName"
        value={props.degreeName}
        placeholder="Degree Name"
        className="form-control mt-2"
        onChange={degreeNameChange}
      />
      <input
        type="textbox"
        name="props.institute"
        value={props.institute}
        placeholder="Institute / University"
        className="form-control mt-2"
        onChange={instituteChange}
      />
      <input
        type="textbox"
        name="props.year"
        value={props.year}
        placeholder="Year"
        className="form-control mt-2"
        onChange={yearChange}
      />
      <input
        type="textbox"
        name="props.cpi"
        value={props.cpi}
        placeholder="CPI / Aggregate"
        className="form-control mt-2"
        onChange={cpiChange}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cpi: state.education.cpi,
    degreeName: state.education.degreeName,
    year: state.education.year,
    institute: state.education.institute
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newCpi: cpi => dispatch({ type: EDUCATION_CPI, cpi }),
    newDegreeName: degreeName =>
      dispatch({ type: EDUCATION_DEGREE_NAME, degreeName }),
    newYear: year => dispatch({ type: EDUCATION_YEAR, year }),
    newInstitute: institute =>
      dispatch({ type: EDUCATION_INSTITUTE, institute })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Degree);
