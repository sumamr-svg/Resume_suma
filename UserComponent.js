import React, { createContext, useState } from 'react';

export const newContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <newContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </newContext.Provider>
  );
};
