import React from "react";
import { connect } from "react-redux";
import Position from "../Position/Position";
import { POSITION_RESPONSIBILITY } from "../../constants/constants";

class Positions extends React.Component {
  state = {
    accordionList: []
  };

  componentDidMount() {
    this.setState({
      accordionList: this.props.positionslist.map((object, index) => {
        return <Position key={index} index={index} />;
      })
    });
  }

  addNewAccordion() {
    this.props.newPosition("");

    this.setState(() => ({
      accordionList: this.state.accordionList.concat(
        <Position key={Math.random()} index={this.state.accordionList.length} />
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
    positionslist: state.position
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newPosition: newposition =>
      dispatch({ type: POSITION_RESPONSIBILITY, newposition })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Positions);
