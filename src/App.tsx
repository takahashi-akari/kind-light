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
        <hr />
        <h3>メニュー</h3>
        <ul>
          <li><a href="/lists">動画リスト</a></li>
          <li><a href="/authors">著者リスト</a></li>
          <li><a href="/tags">タグリスト</a></li>
          <li><a href="/about">このサイトについて</a></li>
          <li><a href="/contact">お問い合わせ</a></li>
          <li><a href="/privacy">プライバシーポリシー</a></li>
          <li><a href="/terms">利用規約</a></li>
          <li><a href="/account">アカウント</a></li>
        </ul>
        <hr />
        <h3>動画リスト</h3>
        <p>動画リストは、CSの動画を共有するためのリストです。</p>
        <p>動画リストは、ユーザーによって作成されます。</p>
        <p>動画リストは、著者、タグ、動画の情報を持っています。</p>
        <ul>
          <li><a href="/lists">動画リスト一覧</a></li>
          <li><a href="/lists/new">動画リストの作成</a></li>
        </ul>
        <hr />
        <h3>著者リスト</h3>
        <p>著者リストは、CSの著者を共有するためのリストです。</p>
        <p>著者リストは、ユーザーによって作成されます。</p>
        <p>著者リストは、著者の情報を持っています。</p>
        <ul>
          <li><a href="/authors">著者リスト一覧</a></li>
          <li><a href="/authors/new">著者リストの作成</a></li>
        </ul>
        <hr />
        <h3>タグリスト</h3>
        <p>タグリストは、CSのタグを共有するためのリストです。</p>
        <p>タグリストは、ユーザーによって作成されます。</p>
        <p>タグリストは、タグの情報を持っています。</p>
        <ul>
          <li><a href="/tags">タグリスト一覧</a></li>
          <li><a href="/tags/new">タグリストの作成</a></li>
        </ul>
        <hr />
        <h3>このサイトについて</h3>
        <p>このサイトは、KindLightが作成しました。</p>
        <p>このサイトは、KindLightが運営しています。</p>
        <p>このサイトは、KindLightが保有しています。</p>
        <hr />
        <h3>お問い合わせ</h3>
        <p>お問い合わせは、お問い合わせフォームから行うことができます。</p>
        <p>お問い合わせは、KindLightが対応します。</p>
        <p>お問い合わせは、KindLightが回答します。</p>
        <hr />
        <h3>プライバシーポリシー</h3>
        <p>プライバシーポリシーは、プライバシーポリシーページから確認することができます。</p>
        <p>プライバシーポリシーは、KindLightが作成しました。</p>
        <p>プライバシーポリシーは、KindLightが運営しています。</p>
        <p>プライバシーポリシーは、KindLightが保有しています。</p>
        <hr />
        <h3>利用規約</h3>
        <p>利用規約は、利用規約ページから確認することができます。</p>
        <p>利用規約は、KindLightが作成しました。</p>
        <p>利用規約は、KindLightが運営しています。</p>
        <p>利用規約は、KindLightが保有しています。</p>
        <hr />
        <h3>アカウント</h3>
        <p>アカウントの作成は、ログイン画面から行うことができます。</p>
        <p>アカウントの削除は、アカウント設定画面から行うことができます。</p>
        <hr />
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
