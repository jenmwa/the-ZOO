import { Link } from "react-router-dom";
import "../style/home.scss";
import logo from "/logo_light.png";

export const Home = () => {
  return (
    <>
      <div className="hero-img">
        <div className="hero-info">
          <p>Välkomna till</p>
          <div className="logo-container">
            <img src={logo} alt="the zoo logo" width={375} />
          </div>
          <p>
            AKA<br></br>Djuren behöver mat!
          </p>
          <Link to="/animals">
            <button>Våra djur</button>
          </Link>
        </div>
      </div>
    </>
  );
};
