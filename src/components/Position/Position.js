import React from "react";
import { connect } from "react-redux";
import { ADD_POSITION_RESPONSIBILITY } from "../../constants/constants";

const Position = props => {
  const index = props.index;
  const position = props.positionList[index];

  const positionNameChange = e => {
    props.newposition(e.target.value, index);
  };

  return (
    <div className="form-group" key={props.key}>
      <input
        type="textbox"
        key={props.key}
        name="position"
        value={position}
        placeholder="Enter position"
        className="form-control mt-2"
        onChange={positionNameChange}
      />
      <button>REMOVE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    positionList: state.position
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newposition: (position, index) =>
      dispatch({ type: ADD_POSITION_RESPONSIBILITY, position, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Position);
