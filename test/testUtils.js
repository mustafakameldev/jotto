import checkPropTypes from "check-prop-types";
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
export const checkProps = (component, comformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    comformingProps,
    "props",
    component.name
  );
  expect(propError).toBeUndefined();
};
