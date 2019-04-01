import initialState from "../store/initialState";
import {
  AWARDS_ACHIEVEMENTS,
  ADD_AWARDS_ACHIEVEMENTS
} from "../constants/constants";

export default (state = initialState.achievements, action) => {
  const index = action.index;

  switch (action.type) {
    case ADD_AWARDS_ACHIEVEMENTS:
      const achievement = state.concat(action.newachievement);
      return [...achievement];
    case AWARDS_ACHIEVEMENTS:
      state[index] = action.achievement;
      return [...state];
    default:
      return state;
  }
};
