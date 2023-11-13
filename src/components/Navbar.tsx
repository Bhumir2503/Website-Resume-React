import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 ">
      <a className="navbar-brand " href="#education">
        Bhumir Patel
      </a>
      <ul className="nav nav-pills d-none d-lg-flex">
        <li className="nav-item">
          <a className="nav-link" href="#card">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#project">
            Project
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
