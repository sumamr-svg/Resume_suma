import React, { useContext } from 'react';
import { InputContext as newContext } from '../context/InputContext';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
  const { setInputValue } = useContext(newContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    navigate('/display');
  };

  return (
    <div>
      <h2>Input Page</h2>
      <input type="text" placeholder="Enter something" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputPage;
