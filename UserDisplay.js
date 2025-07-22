import React, { useContext } from 'react';
import { InputContext as newContext } from '../context/InputContext';

const DisplayPage = () => {
  const { inputValue } = useContext(newContext);

  return (
    <div>
      <h2>Display Page</h2>
      <p>User Input: {inputValue}</p>
    </div>
  );
};

export default DisplayPage;
