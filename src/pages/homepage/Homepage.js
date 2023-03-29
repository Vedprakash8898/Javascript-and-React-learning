
import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <Link to = {"/single-product/"+item.id} >
            <img src={item.image} alt="img" />
            </Link>
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
