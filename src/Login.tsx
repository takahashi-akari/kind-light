import React, { useState } from "react";
import { auth } from "./Firebase";
import { Button, FormControl, TextField } from "@material-ui/core";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  let navigate = useNavigate();

  auth.onAuthStateChanged((user) => {
    if (user) {
      return navigate("/");
    }
  });

  return (
    <div>
      <div>
        <div>ログイン画面</div>
        <FormControl>
          <TextField
            style={{ width: "300px" }}
            InputLabelProps={{
              shrink: true,
            }}
            name="email"
            label="メールアドレス"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </FormControl>
        <br />
        <br />
        <FormControl>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: "300px" }}
            name="pw"
            label="パスワード"
            value={pw}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPW(e.target.value)
            }
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={async () => {
            try {
              await signInWithEmailAndPassword(auth, email, pw);
              alert("ログイン処理が成功しました。");
              return navigate("/");
            } catch (e: any) {
              console.log(e);
              alert(e.message);
            }
          }}
        >
          ログイン
        </Button>
      </div>
      <br />
      <hr />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          return navigate("/signup");
        }}
      >
        アカウントの作成画面へ
      </Button>
    </div>
  );
};
export default Login;
