import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Accordion from "../Accordion/Accordion";

const Sidebar = () => (
  <div className="col-6">
    <Accordion />
    <PersonalInfo />
  </div>
);

export default Sidebar;
