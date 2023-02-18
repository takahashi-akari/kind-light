import { auth } from './Firebase';
import { ExitToAppOutlined } from '@material-ui/icons';
import { useNavigate, Navigate } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { AuthContext, AuthProvider } from './AuthProvider';
import { useContext } from 'react';
const Enter = () => {
  let navigate = useNavigate();

  const signIn = async () => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      const result = await signInWithEmailLink(auth, email || '', window.location.href)
      if (result.user) {
        window.localStorage.removeItem('emailForSignIn');
        return <Navigate to="/" replace={true} />;
      } else {
        return <Navigate to="/login" replace={true} />;
      }
    } else {
      if (auth && auth.currentUser) {
        return <Navigate to="/" replace={true} />;
      }
      return <Navigate to="/login" replace={true} />;
    }
  }
  signIn();
  return <Navigate to="/" replace={true} />;
}
export default Enter;
