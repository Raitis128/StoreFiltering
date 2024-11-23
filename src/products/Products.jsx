import "./products.css";
import PropTypes from "prop-types";

const Products = ({ filteredProducts }) => {
  return <section className="card-container">{filteredProducts}</section>;
};

Products.propTypes = {
  filteredProducts: PropTypes.func.isRequired,
};

export default Products;
