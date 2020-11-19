import React, { createContext, useState } from 'react';

export const BarkContext = createContext();
export const BarkProvider = (props) => {
  const [bark, setBark] = useState([]);

  return (
    <BarkContext.Provider value={[bark, setBark]}>
      {props.children}
    </BarkContext.Provider>
  );
};
