import "./NavBar.css";
import Logo from "../../assets/android-chrome-144x144.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="nav-logo">
        <img src={Logo} alt="" width="80%" />
      </div>
      <ul className="nav-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#qualifications">Qualifications</a>
        </li>
        <li className="nav-contact">
          <a href="mailto:tristantpillay@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
