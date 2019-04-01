import initialState from "../store/initialState";
import {
  POSITION_RESPONSIBILITY,
  ADD_POSITION_RESPONSIBILITY
} from "../constants/constants";

export default (state = initialState.position, action) => {
  const index = action.index;

  switch (action.type) {
    case POSITION_RESPONSIBILITY:
      const position = state.concat(action.newposition);
      return [...position];
    case ADD_POSITION_RESPONSIBILITY:
      state[index] = action.position;
      return [...state];
    default:
      return state;
  }
};
