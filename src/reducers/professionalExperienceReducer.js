import initialState from "../store/initialState";
import {
  PROFESSIONAL_EXP_COMPANY,
  PROFESSIONAL_EXP_DESCRIPTION,
  PROFESSIONAL_EXP_END,
  PROFESSIONAL_EXP_GUIDE,
  PROFESSIONAL_EXP_START,
  PROFESSIONAL_EXP_TEAM,
  ADD_PROFESSIONAL
} from "../constants/constants";

export default (state = initialState.professionalExperience, action) => {
  const index = action.index;

  switch (action.type) {
    case ADD_PROFESSIONAL:
      const professionalExperience = state.concat(
        action.newprofessionalExperience
      );
      return [...professionalExperience];
    case PROFESSIONAL_EXP_COMPANY:
      state[index].companyName = action.name;
      return [...state];
    case PROFESSIONAL_EXP_DESCRIPTION:
      state[index].description = action.description;
      return [...state];
    case PROFESSIONAL_EXP_GUIDE:
      state[index].guide = action.guide;
      return [...state];
    case PROFESSIONAL_EXP_START:
      state[index].start = action.start;
      return [...state];
    case PROFESSIONAL_EXP_END:
      state[index].end = action.end;
      return [...state];
    case PROFESSIONAL_EXP_TEAM:
      state[index].teamSize = action.team;
      return [...state];

    default:
      return state;
  }
};
