import { FiHeart } from "react-icons/fi";
import "./nav.css";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import PropTypes from "prop-types";

const Nav = ({ handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          className="search-input"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default Nav;
