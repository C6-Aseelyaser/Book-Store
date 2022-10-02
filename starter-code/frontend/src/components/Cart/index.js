import "./style.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";

function Cart() {
  const user = useContext(usertoken);
  const { id } = useParams(); //~~>id
  // console.log(id);
  // -------------get User Cart by Id-------------
  const [cart, setCart] = useState([]);
  const getUserCartbyId = () => {
    axios
      .get(`http://localhost:5000/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        console.log("resultsCart", results.data.cart);
        setCart(results.data.cart);
        // console.log("cart:",cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("cart2:",cart);
  useEffect(() => {
    getUserCartbyId();
  }, []);
  //update & delete
  // -------------return-------------
  return (
    <div>
      <div>
        {cart.map((cartElem, i) => {
          console.log("cartElem:",cartElem);
          return (
            <div>
              <img
                className="img"
                src={`${cartElem.book && cartElem.book.image}`}
                alt="img not found"
              ></img>
              <h2>{cartElem.book && cartElem.book.title}</h2>
              {/* <h2>{cartElem.book.price}</h2> */}
              {/* <h2>{cartElem.quantity}</h2> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cart;
