import React from "react";

import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../pages/config/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firebaseContext = React.createContext();

export default function FirebaseProvider(props) {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <h1>loading Auth State....</h1>;
  }
  return (
    <firebaseContext.Provider
      value={{
        user
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
}
