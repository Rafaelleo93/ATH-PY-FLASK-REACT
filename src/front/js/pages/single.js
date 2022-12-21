import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="jumbotron">
      {store.token && store.token != "" && store.token != undefined ? (
        <h1>Aunthenticaded</h1>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
