import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Accordion from "../Accordion/Accordion";
import Hobbies from "../Hobbies/Hobbies";
import Education from "../Education/Education";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-4">
        <Accordion component={PersonalInfo} title="Personal Info" />
        <Accordion component={Hobbies} title="Interests and Hobbies" />
        <Accordion component={Education} title="Education" />
      </div>
    );
  }
}

export default Sidebar;
