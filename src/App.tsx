import React from "react";
import "./App.css";
import { auth } from "./Firebase";
import { ExitToAppOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { Delete } from "@material-ui/icons";

const App: React.FC = (props: any) => {
  let navigate = useNavigate();
  auth.onAuthStateChanged((user) => {
    if (!user) {
      return navigate("/login");
    }
  });
  return (
    <div className="App">
      <h1>KindLightへようこそ</h1>
      <div>
        <p>ようこそ、KindLightへ！</p>
        <p>KindLightは、あなたのオープンソースの作品を共有するためのサービスです。</p>
      </div>
      <button
        onClick={async () => {
          try {
            await auth.signOut();
            navigate("/login");
          } catch (e) {
            console.log(e);
          }
        }}
      >
        ログアウト<ExitToAppOutlined />
      </button>
      <button
        onClick={async () => {
          try {
            await auth.currentUser?.delete();
            alert("ユーザーを削除しました。");
            await auth.signOut();
            navigate("/login");
          } catch (e) {
            console.log(e);
          }
        }}
      >
        ユーザーの削除<Delete />
      </button>
    </div>
  );
};
export default App;
