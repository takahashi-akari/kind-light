import { useParams } from "react-router-dom";
import { AuthProvider } from "../AuthProvider";

const ListNew = () => {
    return (
        <AuthProvider>
        <div>
            <h2>動画リストの作成</h2>
            <p>動画リストの作成です。</p>

            <form>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="title">タイトル</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="description">説明</label>
                        <textarea className="form-control" id="description" rows={3} />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="videoUrl">動画URL</label>
                        <input type="text" className="form-control" id="videoUrl" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="videoUrl">著者</label>
                        <input type="text" className="form-control" id="videoUrl" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="tags">タグ</label>
                        <input type="text" className="form-control" id="tags" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="category">カテゴリ</label>
                        <input type="text" className="form-control" id="category" />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="language">言語</label>
                        <input type="text" className="form-control" id="language" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="isPublic" checked />
                        <label className="form-check-label" htmlFor="isPublic">公開</label>
                    </div>

                    <button type="submit" className="btn btn-primary">作成</button>
                </div>
            </form>
        </div>
        </AuthProvider>
    );
};

export default ListNew;