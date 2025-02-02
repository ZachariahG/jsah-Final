
import { Link } from 'react-router-dom';
import '../styles/Saved-Items.css';

function SavedItemsButton() {
  return (
    <Link to="/saved-items">
      <a href="#" id="numbers" className="nav-link nav-item">Saved</a>
    </Link>
  );
}

export default SavedItemsButton;