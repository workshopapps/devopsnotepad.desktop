import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
import data from "./Data";


// Database
const allPasswords = data.passwords;

// const currentUser = data.currentUser;

const AppContext = React.createContext();

export function AppProvider({ children }){

    AppProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};
 
  const [passwords, setPasswords] = useState(() => {
    const localData = localStorage.getItem("passwords");
    return localData ? JSON.parse(localData) : allPasswords;
  });

//   const [replyEdit, setReplyEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwords));
  }, [passwords]);


  // methods and functions
  const addPassword = (password) => {
    const newPassword = password;
    setPasswords([...passwords, newPassword]);
  };

  const removePassword = (id) => {
    const newPassword = passwords.filter((password) => password.id !== id);
    setPasswords(newPassword);
  };

  const editPassword = (editedPassword) => {
    const updatedPasswords = passwords.map((c) =>
      c.id === editedPassword.id ? editedPassword : c
    );
    setPasswords(updatedPasswords);
  };


  return (
    <AppContext.Provider
      value={{
        passwords,
        addPassword,
        removePassword,
        editPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};