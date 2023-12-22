
import { Link } from "react-router-dom";
import { navbarContext } from "../App";
import logo from "../assets/logo.svg"
import { useContext } from "react";

function Navbar() {

    const {handleChange,searchInput,handleSearch} = useContext(navbarContext)

  return (
    <nav id="navbar">
      <Link>
        <div id="logo-container">
            <img id="logo" src={logo} alt="" />
            <h1>Kalvium Books</h1>
        </div>
      </Link>
      <div>
        <input
          id="search-bar"
          type="text"
          value={searchInput}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleSearch(e)}
          placeholder="Search Books"
        />
      </div>
      <Link to="/sign-up">
        <button id="register">Register</button>
      </Link>
    </nav>
  );
}

export default Navbar;
