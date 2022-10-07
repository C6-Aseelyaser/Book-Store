import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { usertoken } from "../../App";

const Navbar = ({ toggle, setToggle  }) => {
  const user = useContext(usertoken);
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
        // console.log(results.data.userId);
        setCategory(results.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllcategory();
  }, []);
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        {category.map((categoryElem, index) => {
          // console.log(categoryElem);
          // to go to other component must use  LINK or useNavigate hook
          //to be able to use hook or Link must be imported
          return (
            <Link
              to={`/category/${categoryElem._id}`}
              className="navbar-link"
              onClick={() => setToggle(false)}
            >
              {categoryElem.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
