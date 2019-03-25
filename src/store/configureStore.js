import { createStore } from "redux";
import { PERSONAL_INFO as P_INFO } from "../actions/actions";
import { PERSONAL_INFO } from "../constants/constants";

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    dateOfBirth: ""
  },
  education: [
    {
      degree: "",
      institute: "",
      year: "",
      cpi: 0
    }
  ],
  skills: {
    experties: "",
    programmingLanguage: "",
    toolsAndTechnologies: "",
    technicalElectives: ""
  },
  professionalExperience: [
    {
      companyName: "",
      description: "",
      guide: "",
      start: "",
      end: "",
      teamSize: 0
    }
  ],
  projects: [
    {
      companyName: "",
      description: "",
      guide: "",
      start: "",
      end: "",
      teamSize: 0
    }
  ],
  position: ["member of anything"],
  achievements: ["1st rank in cs iq test"],
  hobbies: ["chess"]
};

export default () =>
  createStore((state = initialState, action) => {
    switch (action.type) {
      case PERSONAL_INFO:
        return {
          personalInfo: {
            name: "Mayur Panchal",
            email: "immayurpanchal@gmail.com",
            dateOfBirth: "16/05/1997"
          }
        };
      default:
        return state;
    }
  });
