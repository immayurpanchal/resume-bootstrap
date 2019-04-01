import initialState from "../store/initialState";
import { INTERESTS_HOBBIES, ADD_HOBBIES } from "../constants/constants";

export default (state = initialState.hobbies, action) => {
  const index = action.index;

  switch (action.type) {
    case ADD_HOBBIES:
      const hobby = state.concat(action.newHobby);
      return [...hobby];
    case INTERESTS_HOBBIES:
      state[index] = action.hobby;
      return [...state];
    default:
      return state;
  }
};
