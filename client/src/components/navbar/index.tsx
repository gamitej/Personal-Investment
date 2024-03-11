import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const navLink = [
  { to: "/", name: "Home" },
  { to: "/stocks", name: "Stocks" },
  { to: "/expenses", name: "Expenses" },
  { to: "/savings", name: "Savings" },
];

const Navbar = () => {
  const { pathname: activeLink } = useLocation();

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
            <Link
              className={`link ${to === activeLink && "active"}`}
              to={to}
              key={`${name}-${idx}`}
            >
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
