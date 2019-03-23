import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Accordion from "../Accordion/Accordion";
import Hobbies from '../Hobbies/Hobbies';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-4">
        <Accordion component={PersonalInfo} title="Personal Info"/>
        <Accordion component={Hobbies} title="Interests and Hobbies"/>
      </div>
    );
  }
}

export default Sidebar;
