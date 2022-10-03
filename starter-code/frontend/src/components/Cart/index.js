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
        // getUserCartbyId.map((element, index) => {
        //   return (getUserCartbyId())
        // });
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
        // getUserCartbyId.filter((element, index) => {
        //   return (getUserCartbyId())
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // -------------return-------------

  return (
    <div className="cart">
      <div className="cart-title">Your Shopping Cart</div>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cart.map((cartElem, i) => {
            //destructering ~~>{book,quantitiy}
            // console.log("cartElem:", cartElem);
            return (
              <div key={cartElem.id} className="cart-item">
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
                  {/* <div className="cart-item-book-author">
                    <b>Author: </b>
                    {cartElem.author && cartElem.book.author}
                  </div> */}
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
                  <button
                    onClick={() => {
                      deleteCartById(cartElem._id);
                    }}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
                {/* <h2>{cartElem.book && cartElem.book.title}</h2>
                <h2>{cartElem.book && cartElem.book.price}</h2>
                <h2>{cartElem.quantity}</h2> */}
              </div>
            );
          })}
        </div>
     {/* {cart.reduce((acc,cur)=>{
    return (
      acc +cur.cartElem.book.price  * cur.cartElem.quantity , 0
    )
  })} */}
        <div className="cart-order-summery">
          <div className="order-summery-title"> YOUR ORDER </div>
          <div className="your-order-item">
            <span> SubTotal </span>
            {/* console.log("cartElem:", cartElem); */}

            <span>0?
              </span> 
          </div>
          <div className="your-order-item">
            <span> Cost </span>
            <span>0</span>
          </div>
          <div className="your-order-item">
            <span> Discount </span>
            <span>0</span>
          </div>
          <div className="your-order-item" >
            <span> Total </span>
            <span> 0?
              </span> 
            </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
{
  /* <div className="update-cart-by-id"></div> */
}

{
  /* <input
                type="text"
                onChange={(e) => {
                  setupdatequantity(e.target.value);
                }}
              /> */
}
