import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(' ');

  const auth = getAuth();

  //register email login 
  const signInUsingEmail = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const newUser = { email: email, displayName: name };
        setUser(newUser);
        //update user profile
        updateProfile(auth.currentUser, {
          displayName: name, email: email
        }).then(() => {
          setError('');
        })
          .catch(error => {
            setError(error.message)
          });
        //..... update ses......
        history.replace('/home');
      })
      .finally(() => setIsLoading(false))
  }

  //login using google
  const signInUsingGoogle = (history, location) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError('')
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));

  }

  const processLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(()=>setIsLoading(false))
  }


  //observe state change 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth])

  //handle logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false))
  }

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    signInUsingEmail,
    processLogin,
    setError,
    error
  }
}

export default useFirebase;

