import { createStore } from "redux";
import {
  PERSONAL_INFO_NAME,
  PERSONAL_INFO_EMAIL,
  PERSONAL_INFO_DOB,
  PERSONAL_INFO_ADDRESS
} from "../constants/constants";

const initialState = {
  personalInfo: {
    name: "",
    email: "",
    dateOfBirth: "",
    address: ""
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
      case PERSONAL_INFO_NAME:
        return {
          ...state,
          personalInfo: {
            ...state.personalInfo,
            name: action.name
          }
        };
      case PERSONAL_INFO_EMAIL:
        return {
          ...state,
          personalInfo: {
            ...state.personalInfo,
            email: action.email
          }
        };
      case PERSONAL_INFO_DOB:
        return {
          ...state,
          personalInfo: {
            ...state.personalInfo,
            dateOfBirth: action.dateOfBirth
          }
        };
      case PERSONAL_INFO_ADDRESS:
        return {
          ...state,
          personalInfo: {
            ...state.personalInfo,
            address: action.address
          }
        };
      default:
        return state;
    }
  });
