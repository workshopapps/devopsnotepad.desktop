import React, { useState } from 'react';
import { useCallback } from 'react';

// Creating an app wide state store using the context API
export const UserContext = React.createContext({
  isLoggedIn: false,
  user: {},
  simpleNotifications: [],
  availabilityNotifications: null,
  addUserHandler: () => {},
  addSimpleNotifications: () => {},
  addAvailabilityNotifications: () => {},
});

// Creating a component that will provide the context.
const UserContextProvider = (props) => {
  // Managing states
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [simpleNotifications, setSimpleNotifications] = useState([]);
  const [availabilityNotifications, setAvailabilityNotifications] =
    useState(null);

  // Functions to updates states. useCallback ensures that the functions are memoized
  const addUserHandler = useCallback((data) => {
    setUser(data);
    if (data.message || data.success === true) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const addAvailabilityNotifications = useCallback((nots) => {
    setAvailabilityNotifications(nots);
  }, []);

  const addSimpleNotifications = useCallback((nots) => {
    setSimpleNotifications(nots);
  }, []);

  // Data that is available in app wide state
  const data = {
    user,
    isLoggedIn,
    simpleNotifications,
    availabilityNotifications,
    addUserHandler,
    addAvailabilityNotifications,
    addSimpleNotifications,
  };

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};
export default UserContextProvider;
