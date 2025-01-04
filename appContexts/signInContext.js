import * as React from 'react';

const SignInContext = React.createContext();

function useIsSignedIn() {
  const isSignedIn = React.useContext(SignInContext);
  return isSignedIn;
}

function useIsSignedOut() {
  const isSignedIn = React.useContext(SignInContext);
  return !isSignedIn;
}
