import "./App.scss";
import { auth } from "./Firebase";
import { ExitToAppOutlined } from "@material-ui/icons";
import { useNavigate, Navigate } from "react-router-dom";
import { Delete } from "@material-ui/icons";

const App = () => {
  let navigate = useNavigate();
  if (!auth || !auth.currentUser) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <div className="row App">
      <div className="col-12">
        <h2>Welcome, KindLight!</h2>
        <div>
          <p>Welcome, KindLight!</p>
          <p>Kind Lightはコンピューターサイエンス（CS）の動画リストを共有するサイトです。</p>
        </div>
        <button
          onClick={async () => {
            try {
              await auth.signOut();
              return navigate("/login");
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
              return navigate("/login");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          ユーザーの削除<Delete />
        </button>
      </div>
    </div>
  );
};
export default App;
