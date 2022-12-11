import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

const Header = ({ user, setUser, setGoals }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Goals</Link>
      </div>
      {!user ? (
        <div className="link-cont">
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/register">
            <FaUserAlt /> Register
          </Link>
        </div>
      ) : (
        <div className="loggedLinks">
          <p>
            <FaUserAlt /> {user.userName}
          </p>
          <button
            onClick={() => {
              setUser(null);
              setGoals(null);
              localStorage.setItem("user", null);
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
