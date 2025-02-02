
import { Link } from 'react-router-dom';

function CartButton() {
  return (
    <Link to="/cart">
      <a href="#" id="letters" className="nav-link nav-item">Cart</a>
    </Link>
  );
}

export default CartButton;

