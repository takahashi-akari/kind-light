import { useContext, useState } from 'react';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';
import { TailSpin } from 'react-loader-spinner';
import { AuthContext } from './AuthProvider';
export const LoginElements = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { signInCheck } = useContext(AuthContext);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return isLoading && !signInCheck ? (
    <div style={{width: '100%', textAlign: 'center'}}>
    <TailSpin
      height="80"
      width="80"
      color="#0d6efd"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{margin: '0 auto'}}
      wrapperClass=""
      visible={true}
    />
    </div>
  ) : (
    <div className="row">
      <div className="col-12">
        <h2>ログイン画面</h2>
        <p>
          ログインすると、Kind Lightの機能を使うことができます。
          メールアドレスを入力して、届いたメールのリンクで認証を行ってログインしてください。
        </p>
        <hr />
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ width: '300px' }}>
            メールアドレス
          </label>
          <input
            className="form-control"
            style={{ width: '300px' }}
            id="email"
            name="email"
            value={email}
            placeholder='メールアドレスを入力してください。'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={async () => {
              try {
                const actionCodeSettings = {
                  url: 'https://kind-light.me/enter',
                  handleCodeInApp: true,
                  dynamicLinkDomain: 'kind-light.me'
                };
                const auth = getAuth();
                sendSignInLinkToEmail(auth, email, actionCodeSettings)
                  .then(() => {
                    window.localStorage.setItem('emailForSignIn', email);
                    alert('認証メールを送信しました。メールを確認してください。');
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                  });
              } catch (e: any) {
                console.log(e);
                alert(e.message);
              }
            }}
          >
            認証メールを利用して「ログイン」
          </button>
        </div>
      </div>
    </div>
  );
};
