import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { loading, setLoading, error, setError } = useContext(AppContext);
  const [data, setData] = useState([]);

  const getData = () => {
    return axios.get("https://fakestoreapi.com/products");
  };

  useEffect(() => {
    setLoading(true)
    getData()
      .then((res) => {
        setData(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      <ProductCard data={data} />
    </div>
  );
}
