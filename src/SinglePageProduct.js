import React, { useEffect, useState } from "react";
import { useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Cartcontext } from "./context/Context.js";

function SinglePageProduct() {
  var [api, setApi] = useState({});

  var ans = useParams();
  console.log(ans);

  var id = ans["userid"];
  console.log(id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((apivalue) => {
        console.log(apivalue);
        setApi(apivalue);
      });
  }, []);

  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="container">
      <h1>Single Product Page </h1>
      <div className="row">
        <div className="col-xl-6">
          <img src={api.image} className="img-fluid" />
        </div>
        <div className="col-xl-6">
          <h2>&#8377; {api.price}</h2>
          <h1>{api.title}</h1>
          {/* <h2> Rating : {api.rating.rate}</h2>
                <h2> Count : {api.rating.count}</h2> */}
          <p>{api.description}</p>
          <h2>{api.category}</h2>

          {/* <p><Button variant="warning">Add to cart</Button></p> */}

          <div className="cart">
            {state.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                  <p>{item.quantity * item.price}</p>
                  <div className="quantity">
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: item });
                        } else {
                          dispatch({ type: "REMOVE", payload: item });
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  <h2
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    x
                  </h2>
                  <br />
                  <br />

                  <button>Proceed for Payment</button>
                </div>
              );
            })}
            {state.length > 0 && (
              <div className="total">
                <h2>{total}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePageProduct;
