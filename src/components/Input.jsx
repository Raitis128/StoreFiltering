import PropTypes from "prop-types";

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" name={name} value={value} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Input;
