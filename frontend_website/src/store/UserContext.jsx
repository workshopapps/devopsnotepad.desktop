import React, { useState } from 'react';
import { useCallback } from 'react';

// Creating an app wide state store using the context API
export const UserContext = React.createContext({
  user: {},
  addUserHandler: () => {},
});

// Creating a component that will provide the context.
const UserContextProvider = (props) => {
  // Managing states
  const [user, setUser] = useState(null);

  // Functions to updates states. useCallback ensures that the functions are memoized
  const addUserHandler = useCallback((data) => {
    setUser(data);
  }, []);

  // Data that is available in app wide state
  const data = {
    user,
    addUserHandler,
  };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
