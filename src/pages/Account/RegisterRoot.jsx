import React from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


//const putiourl = 'https://api.put.io/v2/oauth2/authenticate?client_id=4051&response_type=token&redirect_uri=https://fairdrive.netlify.com/putio';

const putiourl = 'https://api.put.io/v2/oauth2/authenticate?client_id=4051&response_type=token&redirect_uri=http://localhost:3000/t/';

class Register extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.brand}>FairDrive / </div>
          {/* <div className={styles.breadcrumbpath}>
        by Fair Data Society
        </div> */}
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.register}>
            <div className={styles.loginregistertitle}>Register</div>
            <input type="text" placeholder="Handle" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password check" />
            <a href={putiourl}>
              <div className={styles.button}>Register</div>
            </a>
            <NavLink to="/" className={styles.createnew}>
              <div>Unlock FairDrive</div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (_, ownProps) => {
  const { directory } = (ownProps.match || {}).params || {};
  // return createStructuredSelector({
  //   directory: () => directory,
  //   directories: state => getDirectories(state, directory),
  // });
};

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);



