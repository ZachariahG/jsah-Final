
import { Link } from 'react-router-dom';
import Logo from "../../images/Logo.png";
import '../styles/Home-Button.css';

function HomeButton() {
  return (
    <Link to="/">
      <img className="logo" src={Logo} />
    </Link>
  );
}

export default HomeButton;