import initialState from "../store/initialState";
import {
  SKILLS_EXPERTIES,
  SKILLS_PROGRAMMING_LANGUAGES,
  SKILLS_TECHNICAL_ELECTIVES,
  SKILLS_TOOLS_AND_TECHNOLOGIES
} from "../constants/constants";

export default (state = initialState.skills, action) => {
  switch (action.type) {
    case SKILLS_EXPERTIES:
      return {
        ...state,
        expertise: action.expertise
      };
    case SKILLS_PROGRAMMING_LANGUAGES:
      return {
        ...state,
        programmingLanguages: action.programmingLanguages
      };
    case SKILLS_TECHNICAL_ELECTIVES:
      return {
        ...state,
        technicalElectives: action.technicalElectives
      };

    case SKILLS_TOOLS_AND_TECHNOLOGIES:
      return {
        ...state,
        toolsAndTechnologies: action.toolsAndTechnologies
      };
    default:
      return state;
  }
};
