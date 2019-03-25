import initialState from "../store/initialState";
import {
  PERSONAL_INFO_ADDRESS,
  PERSONAL_INFO_DOB,
  PERSONAL_INFO_EMAIL,
  PERSONAL_INFO_NAME
} from "../constants/constants";

export default (state = initialState.personalInfo, action) => {
  switch (action.type) {
    case PERSONAL_INFO_NAME:
      return {
        ...state,
        name: action.name
      };
    case PERSONAL_INFO_EMAIL:
      return {
        ...state,
        email: action.email
      };
    case PERSONAL_INFO_DOB:
      return {
        ...state,
        dateOfBirth: action.dateOfBirth
      };
    case PERSONAL_INFO_ADDRESS:
      return {
        ...state,
        address: action.address
      };
    default:
      return state;
  }
};
