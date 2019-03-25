import { createStore } from "redux";
import PersonalInfoReducer from "../reducers/PersonalInfoReducer";
import skillsReducer from "../reducers/skillsReducer";
import EducationReducer from "../reducers/EducationReducer";
import { combineReducers } from "redux";

export default () =>
  createStore(
    combineReducers({
      personalInfo: PersonalInfoReducer,
      skills: skillsReducer,
      education: EducationReducer
    })
  );
