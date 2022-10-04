import { Link } from "react-router-dom";

const Navbar =({toggle,setToggle})=>{
    return ( <nav style={{left: toggle && "0"}} className="navbar">
        <ul className="navbar-links">
        <Link to="/category/:id" onClick={()=>setToggle(false)} className="navbar-link">Home</Link>  
        <li onClick={()=>setToggle(false)}  className="navbar-link">Category</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">Authors</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">About us</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">contact us</li>
        <li onClick={()=>setToggle(false)}  className="navbar-link">Register</li>
        </ul>
    </nav>);
}

export default Navbar