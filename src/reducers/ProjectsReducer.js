import initialState from "../store/initialState";
import {
  PROJECT_NAME,
  PROJECT_DESCRIPTION,
  PROJECT_END,
  PROJECT_GUIDE,
  PROJECT_START,
  PROJECT_TEAM,
  ADD_PROJECTS
} from "../constants/constants";

export default (state = initialState.projects, action) => {
  const index = action.index;

  switch (action.type) {
    case ADD_PROJECTS:
      const project = state.concat(action.newProject);
      return [...project];
    case PROJECT_NAME:
      state[index].companyName = action.name;
      return [...state];
    case PROJECT_DESCRIPTION:
      state[index].description = action.description;
      return [...state];
    case PROJECT_GUIDE:
      state[index].guide = action.guide;
      return [...state];
    case PROJECT_START:
      state[index].start = action.start;
      return [...state];
    case PROJECT_END:
      state[index].end = action.end;
      return [...state];
    case PROJECT_TEAM:
      state[index].teamSize = action.team;
      return [...state];

    default:
      return state;
  }
};
