import Category from "./category/Category";
import Colors from "./colors/Colors";
import Price from "./price/Price";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
