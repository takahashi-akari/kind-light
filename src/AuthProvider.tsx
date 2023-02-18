import firebase from "firebase/compat/app";
import { createContext, useEffect, useState, VFC, ReactNode } from "react";
import { auth } from "./Firebase";
import { LoginElements } from "./LoginElements";
export type User = firebase.User;

type AuthContextProps = {
  currentUser: User | null | undefined;
  signInCheck: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] =
    useState<User | null | undefined>(undefined);

  const [signInCheck, setSignInCheck] = useState(false);

   // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(false);
      }
    });
  });

  if (signInCheck) {
    return (
      <AuthContext.Provider value={{ currentUser, signInCheck }}>
        {children}
      </AuthContext.Provider>
    );
  } else {
    return <LoginElements />
  }
};

export { AuthContext, AuthProvider };