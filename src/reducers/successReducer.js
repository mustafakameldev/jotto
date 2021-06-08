import { actionTypes } from '../acions';
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.COREECT_GUESS:
      return true;
    default:
      return state;
  }
};
