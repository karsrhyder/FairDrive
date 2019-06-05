import React from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class PutioToken extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.brand}>{token}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (_, ownProps) => {
  const { token } = (ownProps.match || {}).params || {};
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
)(PutioToken);
