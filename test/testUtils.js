import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/configureStore';
import rootReducer from '../src/reducers';
export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
export const checkProps = (component, comformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    comformingProps,
    'props',
    component.name
  );
  expect(propError).toBeUndefined();
};
