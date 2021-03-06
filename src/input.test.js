import { mount } from 'enzyme';
import React, { useState } from 'react';
import Input from './input';
import { checkProps, findByTestAttr, storeFactory } from '../test/testUtils';
import { Provider } from 'react-redux';
// mock entire module for distructuring use state om import
const mockSetCurrentGuess = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));
const setup = (initialState = {}, secretWord = 'party') => {
  const store = storeFactory(initialState);
  return mount(
    <Provider store={store}>
      <Input secretWord={secretWord} />
    </Provider>
  );
};
describe('render', () => {
  describe('success is true ', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test('render without errors', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'submit-button');
      expect(inputBox.exists()).toBe(false);
    });
    test('input button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });
});
describe('success if false ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ success: false });
  });
  test('render without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });
  test('input box shows', () => {
    const inputBox = findByTestAttr(wrapper, 'submit-button');
    expect(inputBox.exists()).toBe(true);
  });
  test('input button shows', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(true);
  });
});

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' });
});
describe('state  controlled input field', () => {
  let wrapper = setup({ success: false });
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    wrapper = setup();
  });
  afterEach(() => {});

  test('state updates with value of input box upon change', () => {
    const inputbox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputbox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('test is cleared upon submit buttton clicked', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
