import { actionTypes } from '../acions';
import successReducer from './successReducer';
test('when previous state is undefined , return false', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('return previuos state when unknown action type', () => {
  const newState = successReducer(false, { type: 'unkown' });
  expect(newState).toBe(false);
});
test("return 'true' for actions CORRECT_GUESS", () => {
  const newState = successReducer(false, { type: actionTypes.COREECT_GUESS });
  expect(newState).toBe(true);
});
