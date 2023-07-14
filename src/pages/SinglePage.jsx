import "../css/single.css";
import "../components/card.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Context";

export default function GetSinglePage() {
  const { id } = useParams();
  const { loading, setLoading, cartCount, setCartCount } =
    useContext(AppContext);
  const [data, setData] = useState({});
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = () => {
    setData({...data,qty:1})
    setCartCount([...cartCount, data]);
  };

  return (
    <div className="single-container">
      {loading ? (
        <div
          className="skeleton"
          style={{ width: "80%", margin: "auto", height: "500px" }}
        >
          .
        </div>
      ) : (
        <div className="single-product">
          <div>
            <img
              src={data.image}
              alt="pro-image"
              height={"420px"}
              width={"400px"}
            />
            <p>{data.title}</p>
          </div>
          <div style={{ width: "50%" }}>
            <h4 style={{ fontFamily: "monospace", lineHeight: "40px" }}>
              {data.description}
            </h4>
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
