import { FiHeart } from "react-icons/fi";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input className="search-input" type="text" placeholder="Search" />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
