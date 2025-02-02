
import { Link } from 'react-router-dom';
import Logo from "../../images/Logo.png";
import '../styles/Home-Button.css';

function HomeButton() {
  return (
    <Link to="/">
      <a href="#"><img src={Logo} /></a>
    </Link>
  );
}

export default HomeButton;