import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Accordion from "../Accordion/Accordion";
import Hobbies from "../Hobbies/Hobbies";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import ProfessionalExperiences from "../ProfessionalExperiences/ProfessionalExperiences";
import Achievements from "../Achievements/Achievements";
import Positions from "../Positions/Positions";
import Projects from "../Projects/Projects";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Accordion component={PersonalInfo} title="Personal Info" />
        <Accordion component={Education} title="Education" />
        <Accordion component={Skills} title="Skills" />
        <Accordion
          component={ProfessionalExperiences}
          title="Professional Experience/Internships"
        />
        <Accordion component={Projects} title="Projects" />
        <Accordion component={Positions} title="Positions of Responsibility" />
        <Accordion component={Achievements} title="Awards and Achievements" />
        <Accordion component={Hobbies} title="Interests and Hobbies" />
      </div>
    );
  }
}

export default Sidebar;
