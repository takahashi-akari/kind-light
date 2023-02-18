import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./css/index.scss";
import Header from "./Header";
import Footer from "./Footer";
import Enter from "./Enter";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/enter",
    element: <Enter />,
  }
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Header />
    <div className="container">
    <hr />
    <h1>Kind Light</h1>
    <p>Kind Lightはコンピューターサイエンス（CS）の動画リストを共有するサイトです。</p>
    <hr />
    <RouterProvider router={router} />
    <hr />
    <Footer />
    </div>
  </>
);
