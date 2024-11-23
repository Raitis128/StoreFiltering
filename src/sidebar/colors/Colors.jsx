import Input from "../../components/Input";
import "./colors.css";
import PropTypes from "prop-types";

const Colors = ({ handleChange }) => {
  return (
    <div className="color-title">
      <label className="sidebar-label-container">
        <input type="radio" name="test3" value="" onChange={handleChange} />
        <span className="checkmark all"></span>
        All
      </label>

      <Input
        title="Black"
        color="black"
        value={"black"}
        handleChange={handleChange}
        name={"test3"}
      />
      <Input
        title="Blue"
        color="blue"
        value={"blue"}
        handleChange={handleChange}
        name={"test3"}
      />
      <Input
        title="Red"
        color="red"
        value={"red"}
        handleChange={handleChange}
        name={"test3"}
      />
      <Input
        title="Green"
        color="green"
        value={"green"}
        handleChange={handleChange}
        name={"test3"}
      />
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

Colors.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Colors;
