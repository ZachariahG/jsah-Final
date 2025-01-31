
import { Link } from 'react-router-dom';

function SavedItemsButton() {
  return (
    <Link to="/saved-items">
      <button>SavedItemsButton</button>
    </Link>
  );
}

export default SavedItemsButton;