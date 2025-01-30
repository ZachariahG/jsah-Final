
import { Link } from "react-router-dom"

const NavBar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/saved-items">Saved Items</Link></li>
        </ul>
    </nav>
);

export default NavBar;


