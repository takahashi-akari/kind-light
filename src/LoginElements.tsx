import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

export const LoginElements = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  return (
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
