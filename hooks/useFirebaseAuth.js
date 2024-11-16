import { useState, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId: '1042699148368-m4j2rhstl62pdr7pl613uhiksme13110.apps.googleusercontent.com',
  offlineAccess: true,
});

function useFirebaseAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already logged in
    const unsubscribe = auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        console.log('No user is logged in');
        setUser(null);
      }
    });

    // Cleanup the listener
    return unsubscribe;
  }, []);

  async function googleSignIn() {
    try {
      // Check if Google Play services are available
      await GoogleSignin.hasPlayServices();
      // Sign in the user
      const userInfo = await GoogleSignin.signIn();

      if (userInfo?.data?.idToken) {
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo?.data?.idToken);
        // Sign in to Firebase with the Google credential
        const firebaseUser = await auth().signInWithCredential(googleCredential);
        setUser(firebaseUser);
        return firebaseUser;
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  }

  async function signOut() {
    try {
      await auth().signOut();
      await GoogleSignin.signOut();
      setUser(null);
      console.log('User signed out');
    } catch (error) {
      console.error('Sign-Out Error:', error);
      throw error;
    }
  }

  return {
    user,
    googleSignIn,
    signOut,
  };
}

export default useFirebaseAuth;
