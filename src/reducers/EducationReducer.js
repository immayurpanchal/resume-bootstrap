import initialState from "../store/initialState";
import {
  EDUCATION_CPI,
  EDUCATION_DEGREE_NAME,
  EDUCATION_INSTITUTE,
  EDUCATION_YEAR,
  EDUCATION_ADD_DEGREE
} from "../constants/constants";

export default (state = initialState.education, action) => {
  const index = action.index;

  switch (action.type) {
    case EDUCATION_ADD_DEGREE:
      const education = state.concat(action.newDegree);
      return [...education];
    case EDUCATION_CPI:
      state[index].cpi = action.cpi;
      return [...state];
    case EDUCATION_DEGREE_NAME:
      state[index].degree = action.degree;
      return [...state];
    case EDUCATION_INSTITUTE:
      state[index].institute = action.institute;
      return [...state];
    case EDUCATION_YEAR:
      state[index].year = action.year;
      return [...state];
    default:
      return state;
  }
};
