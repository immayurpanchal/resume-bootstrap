import React from "react";
import { connect } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Achievement from "../Achievement/Achievement";
import { ADD_AWARDS_ACHIEVEMENTS } from "../../constants/constants";

class Achievements extends React.Component {
  state = {
    accordionList: []
  };

  componentDidMount() {
    this.setState({
      accordionList: this.props.achievementslist.map((object, index) => {
        return <Achievement key={index} index={index} />;
      })
    });
  }

  addNewAccordion() {
    this.props.newAchievement("");

    this.setState(() => ({
      accordionList: this.state.accordionList.concat(
        <Achievement
          key={Math.random()}
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
    achievementslist: state.achievements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newAchievement: newachievement =>
      dispatch({ type: ADD_AWARDS_ACHIEVEMENTS, newachievement })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Achievements);
