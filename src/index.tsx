import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./App.scss";
import Login from "./Login";
import Signup from "./Signup";
import Header from "./Header";
import Footer from "./Footer";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Header />
    <h1>Kind Light</h1>
    <p>Kind Lightはコンピューターサイエンス（CS）の動画リストを共有するサイトです。</p>
    <hr />
    <RouterProvider router={router} />
    <Footer />
  </>
);
