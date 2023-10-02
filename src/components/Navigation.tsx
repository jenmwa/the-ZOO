import { Link } from "react-router-dom";
import "../style/navigation.scss";
import logo from "/PNG/logo_light.png";

export const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="the zoo logo" width={80} />
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/about">Om</Link>
            </li>
            <li>
              <Link to="/animals">
                <div>Våra djur</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
