import { auth } from "./Firebase";
const Header = () => {
  let location = window.location.pathname;
  if (location === "/" && (!auth || !auth.currentUser)) {
    location = "/login";
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Kind Light
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {
          const navbar = document.getElementById("navbarSupportedContent");
          if (navbar) {
            navbar.classList.toggle("show");
          }
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className={`nav-link ${
                location === "/" ? "active" : ""
              }`}
              href="/"
            >
              ホーム画面
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                location === "/login" ? "active" : ""
              }`}
              href="/login"
            >
              ログイン画面
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                location === "/signup" ? "active" : ""
              }`}
              href="/signup"
            >
              ユーザー登録画面
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
