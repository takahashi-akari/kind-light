import { auth } from './Firebase';
import { Navigate } from 'react-router-dom';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
const Enter = () => {

  const signIn = async () => {
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
