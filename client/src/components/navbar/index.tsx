import "./navbar.scss";

const Navbar = () => {
  /**
   * TSX
   */
  return (
    <div className="navbar">
      <div className="nav-left">Personal</div>
      <div className="nav-right">
        <ul>
          <li>Home</li>
          <li>Entry</li>
          <li>Charts</li>
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
