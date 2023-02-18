import { auth } from './Firebase';
import { ExitToAppOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import { AuthProvider } from './AuthProvider';
import { useEffect, useState } from 'react';

const App = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState<any>(undefined);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);
  return (
    <AuthProvider>
    <div className="row App">
      <div className="col-12">
        <h2>Welcome, KindLight!</h2>
        <div>
          <p>
            {
              user?.email
            } 様
          </p>
          <p>Welcome, KindLight! ようこそ、KindLightへ！</p>
          <p>Kind Lightはコンピューターサイエンス（CS）の動画リストを共有するサイトです。</p>
          <p>Kind Lightを使って、CSの動画を共有し、学び、教え合うことができます。</p>
        </div>
        <button
          onClick={async () => {
            try {
              await auth.signOut();
              return navigate('/');
            } catch (e) {
              console.log(e);
            }
          }}
        >
          ログアウト
          <ExitToAppOutlined />
        </button>
        <button
          onClick={async () => {
            try {
              await auth.currentUser?.delete();
              alert('ユーザーを削除しました。');
              await auth.signOut();
              return navigate('/');
            } catch (e) {
              console.log(e);
            }
          }}
        >
          ユーザーの削除
          <Delete />
        </button>
      </div>
    </div>
    </AuthProvider>
  );
};
export default App;
