import { auth } from './Firebase';
import { useContext, useRef, useState } from 'react';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { TailSpin } from 'react-loader-spinner';
import { AuthContext } from './AuthProvider';
import { Modal } from 'bootstrap';
import './css/style.scss';

export const LoginElements = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { signInCheck } = useContext(AuthContext);
  const modalRef = useRef<HTMLDivElement>(null);
  let element: HTMLDivElement | null = null;
  let myModal: Modal | null = null;

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return isLoading && !signInCheck && !(auth && auth.currentUser) ? (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <TailSpin
        height="80"
        width="80"
        color="#0d6efd"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass=""
        visible={true}
      />
    </div>
  ) : (
    <>
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
              placeholder="メールアドレスを入力してください。"
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
                    url: window.location.protocol + '//' + window.location.host + '/enter',
                    handleCodeInApp: true,
                    dynamicLinkDomain: 'kind-light.me'
                  };
                  sendSignInLinkToEmail(auth, email, actionCodeSettings)
                    .then(() => {
                      window.localStorage.setItem('emailForSignIn', email);
                      element = modalRef.current;
                      myModal = new Modal(element as HTMLDivElement);
                      myModal.show();
                    })
                    .catch((error) => {
                      alert('認証メールの送信に失敗しました。');
                    });
                } catch (e: any) {
                  alert('認証メールの送信に失敗しました。');
                }
              }}
            >
              認証メールを利用して「ログイン」
            </button>
          </div>
        </div>
      </div>
      <div ref={modalRef} className="modal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">認証メールを送信しました。</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  myModal?.hide();
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>認証メールを送信しました。メール内のリンクをクリックしてログインしてください。</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => {
                  myModal?.hide();
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
