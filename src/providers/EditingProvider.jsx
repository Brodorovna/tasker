import React, { useState } from "react";
const DEFAULT_VALUE = {
  isEditing: false,
  setEditing: () => undefined,
};

export const EditingContext = React.createContext(DEFAULT_VALUE); //В данном случае дефолтное значение - это заглушка

export const EditingProvider = ({ children }) => {
  const [isEditing, setEditing] = useState(false);
  return (
    <EditingContext.Provider value={{ isEditing, setEditing }}>
      {children}
    </EditingContext.Provider>
  );
};
