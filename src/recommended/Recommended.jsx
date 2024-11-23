import "./recommended.css";
import PropTypes from "prop-types";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" onClick={handleClick} value="">
            All Products
          </button>
          <button className="btns" onClick={handleClick} value="Nike">
            Nike
          </button>
          <button className="btns" onClick={handleClick} value="Puma">
            Puma
          </button>
          <button className="btns" onClick={handleClick} value="Vans">
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

Recommended.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Recommended;
