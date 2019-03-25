import { createStore } from "redux";
import PersonalInfoReducer from "../reducers/PersonalInfoReducer";
import skillsReducer from "../reducers/skillsReducer";
import { combineReducers } from "redux";

export default () =>
  createStore(
    combineReducers({
      personalInfo: PersonalInfoReducer,
      skills: skillsReducer
    })
  );
