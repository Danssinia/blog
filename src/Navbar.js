import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Danssinia Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    background:"#f1356f",
                    borderRadius:"8px",
                    padding:"4px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;