import "./nav.css";
import { Link } from "react-router-dom";
import img from "../assets/Icon.png";
import { AppContext } from "../context/Context";
import { useContext } from "react";
export default function Navbar() {
  const linkArr = [
    {
      path: "/",
      name: "Home",
      id: 1,
    },
    {
      path: "/about",
      name: "About",
      id: 2,
    },
    {
      path: "/contact",
      name: "Contact",
      id: 3,
    },
    {
      path: "/todo",
      name: "Todo",
      id: 4,
    },
    {
      path: "/product",
      name: "Product",
      id: 6,
    },
    {
      path: "/cart",
      name: "Cart",
      id: 5,
    },
  ];
  const { cartCount, setCartCount } = useContext(AppContext);

  console.log(cartCount, "cart");

  return (
    <div className="main-nav-container">
      <div style={{ objectFit: "cover" }}>
        <img height={"50px"} width={"50px"} src={img} alt="ambula-icon" />
      </div>
      <div className="nav-links">
        {linkArr.map((elm) => {
          return (
            <div key={elm.id}>
              <Link to={`${elm.path}`}>{elm.name}</Link>
              {elm.id === 5 && cartCount.length > 0 ? (
                <p className="cart-count" > {cartCount.length}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
