import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Button, FormControl, TextField } from "@material-ui/core";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const navigate = useNavigate();
  if (auth && auth.currentUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="row">
      <div className="col-12">
        <h2>ユーザー登録画面</h2>
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
        </Button>
      </div>
      <br />
      <hr />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
            return navigate("/login");
        }}
      >
        ログイン画面へ
      </Button>
    </div>
  );
};
export default Signup;
