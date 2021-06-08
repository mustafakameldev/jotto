import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState('');
  if (success) {
    return <div data-test="component-input" />;
  }
  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          onChange={(event) => {
            setCurrentGuess(event.target?.value ? event.target.value : 'train');
          }}
          value={currentGuess}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};
export default Input;