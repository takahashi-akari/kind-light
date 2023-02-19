import { useParams } from "react-router-dom";
import { AuthProvider } from "../AuthProvider";

const Lists = () => {
    return (
        <AuthProvider>
        <div>
            <h2>動画リストの一覧</h2>
            <p>動画リストの一覧です。</p>
        </div>
        </AuthProvider>
    );
};

export default Lists;