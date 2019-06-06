import React from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Account extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.brand}>FairDrive / </div>
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.register}>
            <div className={styles.loginregistertitle}>Login</div>
            <input type="text" placeholder="Handle" />
            <input type="password" placeholder="Password" />
            <NavLink to="/f">
              <div className={styles.button}>Unlock</div>
            </NavLink>
            <NavLink to="/r" className={styles.createnew}>
              <div>Create new FairDrive</div>
            </NavLink>
            <a
              className={styles.createnew}
              href="https://api.put.io/v2/oauth2/authenticate?client_id=4051&response_type=token&redirect_uri=http://localhost:3000/t/"
            >
              Authenticate with Put.io
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Account);
