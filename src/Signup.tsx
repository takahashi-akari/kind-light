import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();
  if (auth && auth.currentUser) {
    return <Navigate to="/"  replace={true} />;
  }
  return (
    <div className="row">
      <div className="col-12">
        <h2>ユーザー登録画面</h2>
        <p>
          ユーザー登録すると、Kind Lightの機能を使うことができます。
          メールアドレスとパスワードを入力して、ユーザー登録してください。
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
                await createUserWithEmailAndPassword(auth, email, pw);
                alert("ユーザー登録処理が完了しました。ログイン処理を行います。");
                return navigate("/");
              } catch (e: any) {
                console.log(e);
                alert(e.message);
              }
            }}
          >
            ユーザー登録
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
              return navigate("/login");
          }}
        >
          ログイン画面へ
        </button>
      </div>
    </div>
  );
};
export default Signup;
