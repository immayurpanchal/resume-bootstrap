import { createStore } from "redux";
import PersonalInfoReducer from "../reducers/PersonalInfoReducer";
import skillsReducer from "../reducers/skillsReducer";
import EducationReducer from "../reducers/EducationReducer";
import HobbiesReducer from "../reducers/HobbiesReducer";
import AchievementsReducer from "../reducers/AchievementsReducer";
import PositionsReducer from "../reducers/positionsReducer";
import ProjectsReducer from "../reducers/ProjectsReducer";
import professionalExperienceReducer from "../reducers/professionalExperienceReducer";
import { combineReducers } from "redux";

export default initialState => {
  return createStore(
    combineReducers({
      personalInfo: PersonalInfoReducer,
      skills: skillsReducer,
      education: EducationReducer,
      hobbies: HobbiesReducer,
      achievements: AchievementsReducer,
      position: PositionsReducer,
      projects: ProjectsReducer,
      professionalExperience: professionalExperienceReducer
    }),
    initialState
  );
};
