import { createContext, useEffect, useState, ReactNode } from "react";
import { LoginElements } from "./LoginElements";
import { auth } from "./Firebase";
import { User } from "firebase/auth";

type AuthContextProps = {
  currentUser: User | undefined;
  signInCheck: boolean;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  signInCheck: false,
});


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] =
    useState<any>(undefined);

  const [signInCheck, setSignInCheck] = useState(false);

   // ログイン状態を確認する
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setSignInCheck(true);
      } else {
        setSignInCheck(false);
      }
    });
  });

  if (signInCheck && currentUser) {
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