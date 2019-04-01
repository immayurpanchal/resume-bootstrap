import React from "react";
import { connect } from "react-redux";
import Accordion from "../Accordion/Accordion";
import Hobby from "../Hobby/Hobby";
import { ADD_HOBBIES } from "../../constants/constants";

class Hobbies extends React.Component {
  state = {
    accordionList: []
  };

  componentDidMount() {
    this.setState({
      accordionList: this.props.hobbylist.map((object, index) => {
        return (
          <Accordion
            component={Hobby}
            key={index}
            title={object.hobby}
            index={index}
          />
        );
      })
    });
  }

  addNewAccordion() {
    this.props.newHobby({ hobby: "" });

    this.setState(() => ({
      accordionList: this.state.accordionList.concat(
        <Hobby key={Math.random()} index={this.state.accordionList.length} />
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
    hobbylist: state.hobbies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newHobby: newhobby => dispatch({ type: ADD_HOBBIES, newhobby })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hobbies);
