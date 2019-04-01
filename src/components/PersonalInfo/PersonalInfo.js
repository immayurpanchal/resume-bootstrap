import React from "react";
import { connect } from "react-redux";
import {
  PERSONAL_INFO_NAME,
  PERSONAL_INFO_ADDRESS,
  PERSONAL_INFO_DOB,
  PERSONAL_INFO_EMAIL
} from "../../constants/constants";

const PersonalInfo = props => {
  const nameChange = e => {
    props.newName(e.target.value.toUpperCase());
  };

  const emailChange = e => {
    props.newEmail(e.target.value);
  };

  const dateOfBirthChange = e => {
    props.newDateOfBirth(e.target.value);
  };

  const addressChange = e => {
    props.newAddress(e.target.value);
  };

  return (
    <div className="form-group">
      <input
        type="textbox"
        value={props.name}
        name="name"
        placeholder="Name"
        className="form-control mt-2"
        onChange={nameChange}
      />
      <input
        type="textbox"
        value={props.email}
        name="email"
        placeholder="Email"
        className="form-control mt-2"
        onChange={emailChange}
      />
      <input
        type="textbox"
        value={props.dateOfBirth}
        name="dateOfBirth"
        placeholder="Date of Birth (DD/MM/YYYY)"
        className="form-control mt-2"
        onChange={dateOfBirthChange}
      />
      <input
        type="textbox"
        value={props.address}
        name="address"
        placeholder="Address"
        className="form-control mt-2"
        onChange={addressChange}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    name: state.personalInfo.name,
    email: state.personalInfo.email,
    dateOfBirth: state.personalInfo.dateOfBirth,
    address: state.personalInfo.address
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newName: name => dispatch({ type: PERSONAL_INFO_NAME, name }),
    newEmail: email => dispatch({ type: PERSONAL_INFO_EMAIL, email }),
    newDateOfBirth: dateOfBirth =>
      dispatch({ type: PERSONAL_INFO_DOB, dateOfBirth }),
    newAddress: address => dispatch({ type: PERSONAL_INFO_ADDRESS, address })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);
