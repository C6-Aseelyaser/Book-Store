import "./style.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";

function Cart() {
  const user = useContext(usertoken);
  const { id } = useParams(); //~~>id

  // const {quantity}=
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
        // console.log("resultsCart", results.data.cart);
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
  // -------------update cart by id------------- //fillter + total
  const [updatequantity, setupdatequantity] = useState(1); //?
  //console.log(37);
  const updateCartById = (_id, quantity) => {
    // console.log(39);
    console.log(_id);
    axios
      .put(
        `http://localhost:5000/cart/${_id}`,
        {
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((results) => {
        console.log(results);
        getUserCartbyId();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // -------------delete cart by id------------- //delete book from cart
  // const [deleted , setDelete] = useState([])
  const deleteCartById = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:5000/cart/${_id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        console.log(results);
        getUserCartbyId();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // -------------return-------------
  return (
    <div>
      <div>
        {cart.map((cartElem, i) => {
          //destructering ~~>{book,quantitiy}
          // console.log("cartElem:", cartElem);
          return (
            <div>
              <img
                className="img"
                src={`${cartElem.book && cartElem.book.image}`}
                alt="img not found"
              ></img>
              <h2>{cartElem.book && cartElem.book.title}</h2>
              <h2>{cartElem.book && cartElem.book.price}</h2>
              <h2>{cartElem.quantity}</h2>
              {/* <input
                type="text"
                onChange={(e) => {
                  setupdatequantity(e.target.value);
                }}
              /> */}
              <button

                onClick={() => {
                 let quantity=cartElem.quantity+1
                 console.log(quantity)
                  updateCartById(cartElem._id ,quantity);
                }}
              >
                {" "}
                +{" "}
              </button>
              <button
                onClick={() => {
                  updateCartById(cartElem._id );
                }}
              >
                {" "}
                -{" "}
              </button>
              <button
                onClick={() => {
                  deleteCartById(cartElem._id);
                }}
              >
                {" "}
                remove{" "}
              </button>
            </div>
          );
        })}
        {/*----------return update ----------*/}
        <div className="update-cart-by-id"></div>
      </div>
    </div>
  );
}
export default Cart;
