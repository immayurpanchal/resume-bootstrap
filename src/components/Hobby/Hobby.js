import React from "react";
import { connect } from "react-redux";
import { INTERESTS_HOBBIES } from "../../constants/constants";

const Hobby = props => {
  const index = props.index;
  const hobby = props.hobbyList[index];

  const hobbyNameChange = e => {
    props.newHobby(e.target.value, index);
  };

  return (
    <div className="form-group" key={props.key}>
      <input
        type="textbox"
        name="hobby"
        value={hobby || ''}
        placeholder="Hobby Name"
        className="form-control mt-2"
        onChange={hobbyNameChange}
      />
      <button>REMOVE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hobbyList: state.hobbies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newHobby: (hobby, index) =>
      dispatch({ type: INTERESTS_HOBBIES, hobby, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hobby);
