import "./card.css";
import { useContext } from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data }) {
  console.log(data, "card");

  const { loading, setLoading, cartCount, setCartCount, error } =
    useContext(AppContext);

   
  const arr = new Array(20).fill(1);

  const navigate = useNavigate();
  const handelSinglePage = (id) => {
    navigate(`/product/${id}`);
  };
  const handelAddtoCart = (elm) => {
    elm = { ...elm, qty: 1 };

    setCartCount([...cartCount, elm]);
    console.log(cartCount, "check");
  };
  return (
    <div className="card-container">
      {
        error?<div>
          error while fetching please try again later
        </div>:null
      }
      {loading ? (
        <div className="card-grid" style={{ opacity: "0.9" }}>
          {arr.map((elm, i) => {
            return (
              <div key={i} className="skeleton">
                ...
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card-grid">
          {data.map((elm) => {
            return (
              <div key={elm.id}>
                <div
                  onClick={() => handelSinglePage(elm.id)}
                  className="card-div"
                >
                  <img
                    src={elm.image}
                    alt="product-image"
                    height={"130px"}
                    width={"130px"}
                  />
                  <p>{elm.title.substring(0, 20)}....</p>
                  <h2>{elm.price}₹</h2>
                </div>
                <button onClick={() => handelAddtoCart(elm)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
