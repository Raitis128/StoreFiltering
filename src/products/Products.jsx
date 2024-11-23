import { AiFillStar } from "react-icons/ai";
import "./products.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import data from "../db/data";

const Products = () => {
  return (
    <section className="card-container">
      {data.map((item, index) => (
        <section className="card" key={index}>
          <img src={item.img} alt={item.title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{item.title}</h3>
            <section className="card-reviews">
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <AiFillStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{item.prevPrice}</del> {item.newPrice}
              </div>

              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Products;
