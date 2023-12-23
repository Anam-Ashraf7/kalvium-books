
import { Link } from "react-router-dom";
import { navbarContext } from "../App";
import logo from "../assets/logo.svg"
import { useContext, useRef, useState } from "react";
import { connect } from "react-redux";
import {RegisterUser} from "../redux/Action"

const mapStatetoProps = state => {

    return {
        userDetails: state.registrationData
    }

}

const mapDispatchtoProps = dispatch => {

    
    return {
        registerUser: () => {
            dispatch(RegisterUser({}));
        }
    }

}

function Navbar(props) {

    const {handleChange,searchInput,handleSearch} = useContext(navbarContext)
    const [toggle,setToggle] = useState(false)

    const logoutRef = useRef()

    console.log(props.userDetails)

    const showLogout = () => {
        setToggle(!toggle)
        if(toggle){
            logoutRef.current.classList.remove("display")
        }else {
            logoutRef.current.classList.add("display")
        }
    }

    return (
          <nav id="navbar">
            <Link to="/">
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
           { props.userDetails.name ? 
           <>
            <div id="user" onClick={showLogout} >{props.userDetails.name[0].toUpperCase()}</div>
            <div id="user-details" className="display" ref={logoutRef}>
                <p>{props.userDetails.email}</p>
                <button id="log-out" onClick={props.registerUser} >Log Out</button>
            </div>
            </> :
            <>
            <Link to="/sign-up">
                <button id="register">Register</button>
            </Link>
           </>
            }
          </nav>
        


      );
    
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Navbar);
