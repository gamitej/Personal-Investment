import "./navbar.scss";
import { Link } from "react-router-dom";

const navLink = [
  { to: "/", name: "Home" },
  { to: "/stocks", name: "Stocks" },
  { to: "/expenses", name: "Expenses" },
  { to: "/savings", name: "Savings" },
];

const Navbar = () => {
  /**
   * TSX
   */
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to="/">Personal</Link>
      </div>
      <div className="nav-right">
        <ul>
          {navLink.map(({ to, name }, idx) => (
            <Link className="link" to={to} key={`${name}-${idx}`}>
              {name}
            </Link>
          ))}
        </ul>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
