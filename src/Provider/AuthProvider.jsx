import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState({});
  // Loading State
  const [loading, setLoading] = useState(true);
  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //   Github Login
  const gitLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  // Sign up with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign in with email and password
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Update user profile
  const handleUpdateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser,{
        displayName: name,photoURL: photo
    })
  }
  //   Log out
  const logOut = () => {
    return signOut(auth);
  };
  // !! User observer - OnAuthChange
  //   useEffect(() => {
  //     onAuthStateChanged(auth, (user) => {
  //       setUser(user);
  //     });
  //   }, []);
  //   console.log(user);
  // Way 2 *Recommended
  useEffect(() => {
    const observer = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      observer();
    };
  }, []);

  const authentications = {
    googleLogin,
    createUser,
    userSignIn,
    logOut,
    user,
    loading,
    gitLogin,
    handleUpdateUserProfile
  };

  return (
    <div>
      <AuthContext.Provider value={authentications}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
