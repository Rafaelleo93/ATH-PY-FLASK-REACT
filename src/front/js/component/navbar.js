import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <Link to="/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          ) : (
            <Link to="/">
              <button
                onClick={() => actions.logout()}
                className="btn btn-primary"
              >
                Log out
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
