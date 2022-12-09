import { Link } from "react-router-dom";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Goals</Link>
      </div>
      <div className="link-cont">
        <Link to="/login">
          <FaSignInAlt /> Login
        </Link>
        <Link to="/register">
          <FaUserAlt /> Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
