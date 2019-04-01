import React from "react";
import { connect } from "react-redux";
import { AWARDS_ACHIEVEMENTS } from "../../constants/constants";

const Achievement = props => {
  const index = props.index;
  const achievement = props.achievementList[index];

  const achievementNameChange = e => {
    props.newachievement(e.target.value, index);
  };

  return (
    <div className="form-group" key={props.key}>
      <input
        type="textbox"
        key={props.key}
        name="hobby"
        value={achievement}
        placeholder="Enter Achievement"
        className="form-control mt-2"
        onChange={achievementNameChange}
      />
      <button>REMOVE</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    achievementList: state.achievements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newachievement: (achievement, index) =>
      dispatch({ type: AWARDS_ACHIEVEMENTS, achievement, index })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Achievement);
