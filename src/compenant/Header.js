import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../context/themedark.css";

import { useContext } from "react";
import ThemeContexttt from "../context/themeContext";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../FireBase/Config";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const { theme, changeMode } = useContext(ThemeContexttt);
  const setDataThme = () => {
    changeMode(theme === "Light" ? "Dark" : "Light");
    localStorage.setItem(
      "modeTheme",
      `${theme === "Light" ? "Dark" : "Light"}`
    );
  };
  const navigate = useNavigate();
  return (
    <div className="youness">
    

      <header className="hide-when-mobile">
        <h1>
          <Link to="/">ExtraMilk</Link>
        </h1>

        <i
          onClick={() => {
            setDataThme();
          }}
          class="fa-solid fa-sun"
        ></i>
        <i
          onClick={() => {
            setDataThme();
          }}
          class="fa-solid fa-moon"
        ></i>
        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/SignIn">
                SignIn
              </NavLink>
            </li>
          )}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/SignUp">
                SignUp
              </NavLink>
            </li>
          )}

          {user && (
            <li
              onClick={(eo) => {
                signOut(auth)
                  .then(() => {
                    navigate("/SignIn");

                    console.log("  // Sign-out successful.");
                  })
                  .catch((error) => {
                    console.log("  // An error happened.");
                    //
                  });
              }}
              className="main-list"
            >
              <NavLink className="main-link">SignOut</NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Vaches">
                Vaches
              </NavLink>
            </li>
          )}
          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Genisses">
                Genisses
              </NavLink>
              {/* <ul className="sub-ul">
    <li>
      <a href="">Full Course</a>
    </li>
    <li>
      <a href="">CSS Examples</a>
    </li>
    <li className="mini-projects">
      <a href="">mini projects&nbsp; + </a>
      <ul className="sub-sub-ul">
        <li>
          <a href="">project 1</a>
        </li>
        <li>
          <a href="">project 2</a>
        </li>
        <li>
          <a href="">project 3</a>
        </li>
      </ul>
    </li>
  </ul> */}
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Veaux">
                Veaux
              </NavLink>
              {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
            </li>
          )}

          {user && (
            <li className="main-list">
              <NavLink className="main-link" to="/Collect">
                Collect
              </NavLink>
              {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
            </li>
          )}
        </ul>
      </header>
      <header className="show-when-mobile">
        <h1>Courses 4 Arab</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />{" "}
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />{" "}
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />{" "}
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
