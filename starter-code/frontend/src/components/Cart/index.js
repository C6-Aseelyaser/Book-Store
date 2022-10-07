import "./style.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";

function Cart() {
  const user = useContext(usertoken);
  // console.log(user)
  const { id } = useParams();
  // -------------get User Cart by Id-------------
  // const [cart, setCart] = useState([]);
  // const getUserCartbyId = () => {
  //   axios
  //     .get(`http://localhost:5000/cart/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     })
  //     .then((results) => {

  //     user.setCart(results.data.cart)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // // console.log("cart2:",cart);
  // useEffect(() => {
  //   getUserCartbyId();
  // }, []);
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
        // getUserCartbyId();
        const newArray = user.cart.map((element, index) => {
          if (element._id === _id) {
            console.log(element);
            console.log(results);
            element.quantity = quantity;
          }
          return element;
        });
        user.setCart(newArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // -------------delete cart by id-------------
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
        // getUserCartbyId();
        const deletedBook = user.cart.filter((elem, i) => {
          return _id !== elem._id;
        });
        user.setCart(deletedBook);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // -------------return-------------
  // console.log(cart);
  const totalCart = user.cart.reduce((acc, cur) => {
    // console.log(acc);
    // console.log(cur);
    return acc + cur.book.price * cur.quantity;
  }, 0);
  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {user.cart?.map((cartElem, i) => {
            //destructering ~~>{book,quantitiy}
            // console.log("cartElem:", cartElem);
            return (
              <div key={cartElem._id} className="cart-item">
                <img
                  className="cart-item-img"
                  src={`${cartElem.book && cartElem.book.image}`}
                  alt="img not found"
                ></img>
                <div className="cart-item-info">
                  <div className="cart-item-book-title">
                    <b>Title: </b>
                    {cartElem.book && cartElem.book.title}
                  </div>
                  <div>
                    {" "}
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => {
                          let quantity = cartElem.quantity + 1;
                          console.log(quantity);
                          updateCartById(cartElem._id, quantity);
                        }}
                      >
                        <i className="bi bi-plus-lg"></i>
                      </button>
                      <b> {cartElem.quantity} </b>
                      <button
                        disabled={cartElem.quantity <= 1}
                        onClick={() => {
                          let quantity = cartElem.quantity - 1;
                          console.log(quantity);
                          updateCartById(cartElem._id, quantity);
                        }}
                      >
                        <i className="bi bi-dash-lg"></i>
                      </button>
                    </div>
                    <div className="cart-items-price">
                      ${cartElem.book.price * cartElem.quantity}
                    </div>
                    <div>
                      {" "}
                      <i
                        onClick={() => {
                          deleteCartById(cartElem._id);
                        }}
                        className="bi bi-trash-fill"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-order-summery">
          <div className="order-summery-title"> YOUR ORDER </div>
          <div className="your-order-item">
            <span> SubTotal </span>
            <span>${totalCart}</span>
          </div>
          <div className="your-order-item">
            <span> Cost </span>
            <span>$2.5</span>
          </div>
          <div className="your-order-item">
            <span> Discount </span>
            <span>%10</span>
          </div>
          <div className="your-order-item">
            <span> Total </span>
            <span>$ {totalCart + 2.5 * 0.1}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;

