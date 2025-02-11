
import { Link } from 'react-router-dom';
import '../styles/Saved-Items.css';

function SavedItemsButton() {
  return (
    <Link to="/saved-items">
      {/* Zach can you take a look at line 9? */}
      <a href="#" id="hidden" className="nav-link nav-item">Saved</a>
    </Link>
  );
}

export default SavedItemsButton;