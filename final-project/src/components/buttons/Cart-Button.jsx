
import { Link } from 'react-router-dom';
import '../styles/Cart-Button.css';


function CartButton() {
  return (
    <Link to="/cart">
      <a href="#" id="hidden" className="nav-link nav-item">Cart</a>
    </Link>
  );
}

export default CartButton;

