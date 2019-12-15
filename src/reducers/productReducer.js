import { INTIALIZE_STATE } from "../actions/initializeState";

export default (state = {}, action) => {
  switch (action.type) {
    case INTIALIZE_STATE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
