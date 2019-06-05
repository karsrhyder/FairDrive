import React, { useEffect } from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

function PutioToken({ tokenId }) {
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.brand}>Hello - {tokenId} - </div>
      </div>
    </div>
  );
}

const mapStateToProps = (_, ownProps) => {
  const { tokenId } = (ownProps.match || {}).params || {};
  return createStructuredSelector({
    tokenId: () => tokenId
  });
};

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PutioToken);
