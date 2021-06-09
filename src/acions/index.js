import axios from 'axios';
export const actionTypes = {
  COREECT_GUESS: 'CREECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};
// export function correctGuess() {
//   return {
//     type: actionTypes.COREECT_GUESS,
//   };
// }

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {};
};
export const getSecretWord = () => {
  // placeholder action
  return axios.get('http://localhost:3030').then((response) => response.data);
};
