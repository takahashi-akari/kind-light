const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{padding: "10px 20px"}}>
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
            <a className="nav-link" href="/">
              ホーム
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              ログイン
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              ユーザー登録
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
