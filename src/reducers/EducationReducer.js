import initialState from "../store/initialState";
import {
  EDUCATION_CPI,
  EDUCATION_DEGREE_NAME,
  EDUCATION_INSTITUTE,
  EDUCATION_YEAR
} from "../constants/constants";

export default (state = initialState.education, action) => {
  switch (action.type) {
    case EDUCATION_CPI:
      return {
        ...state,
        education: {
          ...state.education,
          cpi: action.cpi
        }
      };
      case EDUCATION_DEGREE_NAME:
      return {
        ...state,
        education: {
          ...state.education,
          degreeName: action.degreeName
        }
      };
      case EDUCATION_INSTITUTE:
      return {
        ...state,
        education: {
          ...state.education,
          institute: action.institute
        }
      };
      case EDUCATION_YEAR:
      return {
        ...state,
        education: {
          ...state.education,
          year: action.year
        }
      };
    default:
      return state;
  }
};
