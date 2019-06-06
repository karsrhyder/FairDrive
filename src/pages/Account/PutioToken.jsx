import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

function PutioToken({ tokenId, match, location }) {
  let token = location.hash.slice(14, 34);
  localStorage.setItem("putiotoken", token);
  return (
    <Redirect
      to={{
        pathname: "/f"
      }}
    />
  );
}

export default connect()(PutioToken);
