import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        axios
          .post("/jwt", { email: currentUser.email })
          .then((res) => console.log(res.data))
          .catch((err) => {
            console.log("An error has happened", err.code, err.message);
          });
      } else {
        setUser(null);
        axios
          .post("/clear-token")
          .then(() => console.log("Successfully Logged Out"))
          .catch((err) => {
            console.log("An error has happened", err.code, err.message);
          });
      }
      console.log(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    signupUser,
    loginUser,
    googleLogin,
    logoutUser,
    loading,
    user,
    setUser,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;
