import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const signInUsingEmail = (email, password, setError) =>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      setError(error.message)
    })
    .finally(()=>setIsLoading(false))
  }

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));

  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    })
    return () => unsubscribed;
  }, [])

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
    signInUsingEmail
  }
}

export default useFirebase;

