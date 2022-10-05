import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { usertoken } from "../../App";

const Navbar = ({ toggle, setToggle }) => {
  const user = useContext(usertoken);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [category, setCategory] = useState([]);

  //-------------get All Category-------------
  const getAllcategory = () => {
    axios
      .get("http://localhost:5000/catogory", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        // console.log(results.data);
        setCategory(results.data.title);
        // console.log(results.data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //filter
  useEffect(() => {
    getAllcategory();
    // getAllBooks();
  }, []);
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">

      <ul className="navbar-links">
          {category.map((categoryElem, index) => {
            // console.log(categoryElem);
            // to go to other component must use  LINK or useNavigate hook
            //to be able to use hook or Link must be imported
            return (
             
                <Link to={`/category/${categoryElem._id}` } className="navbar-link" onClick={()=>setToggle(false)}>
                  {categoryElem.title}
                </Link>
              
            );
          })}
 </ul> 
      {/* <Link to="/category/:id" onClick={()=>setToggle(false)} className="navbar-link">Home</Link> */}
      {/* <Link to={`/category/${id}`} onClick={()=>setToggle(false)} className="navbar-link">history</Link>
        <Link to="/category/:id" onClick={()=>setToggle(false)} className="navbar-link">business</Link>
        <Link to="/category/:id" onClick={()=>setToggle(false)} className="navbar-link">religion</Link>
        <Link to="/category/:id" onClick={()=>setToggle(false)} className="navbar-link">science</Link>
        <Link to="/category/:id" onClick={()=>setToggle(false)} className="navbar-link">math</Link>*/}
       
    </nav>
  );
};

export default Navbar;

{
  /* <Link to={`/category/${categoryElem._id}`}>{categoryElem.title}ma</Link> */
}
{
  /* <li onClick={()=>setToggle(false)}  className="navbar-link">Category</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">Authors</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">About us</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">contact us</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">Register</li> */
}
