import React, { useState } from "react";
import { auth } from "./Firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();
  if (auth && auth.currentUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="row">
      <div className="col-12">
        <h2>ログイン画面</h2>
        <p>
          ログインすると、Kind Lightの機能を使うことができます。
          メールアドレスとパスワードを入力して、ログインしてください。
        </p>
        <hr />
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ width: "300px" }}
          >
            メールアドレス
          </label>
          <input
            className="form-control"
            style={{ width: "300px" }}
            id="email"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label
            htmlFor="password"
            className="form-label"
            style={{ width: "300px" }}
          >
            パスワード
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            style={{ width: "300px" }}
            name="pw"
            value={pw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPW(e.target.value)
            }
          />
        </div>
        <br />
        <div className="mb-3">
          <button
            className="btn btn-primary"
            onClick={async () => {
              try {
                await signInWithEmailAndPassword(auth, email, pw);
                alert("ログインしました");
                return navigate("/");
              } catch (e: any) {
                console.log(e);
                alert(e.message);
              }
            }}
          >
            ログイン
          </button>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="col-12">
        <button
          className="btn btn-primary"
          onClick={() => {
              return navigate("/signup");
          }}
        >
          ユーザー登録画面へ
        </button>
      </div>
    </div>
  );
};
export default Login;
