import React, {createContext, useEffect, useState, useContext} from 'react';
import useFirebaseAuth from './hooks/useFirebaseAuth'; // Import your custom hook here
import useApi from './hooks/useApi';

const Context = createContext(null);

export const ContextProvider = ({children}) => {
  const {user} = useFirebaseAuth(); // Assuming useFirebaseAuth returns { user }
  const {userApi, carApi, communityApi} = useApi();

  const states = {
    user,
    userApi,
    carApi,
    communityApi,
  };

  return <Context.Provider value={states}>{children}</Context.Provider>;
};

function useAppContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
}

export default useAppContext;
