import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import RowFile from "components/RowFile";
import PropTypes from "prop-types";
import { getDirectoryList } from "services/filebrowser/selectors";
import { fetchDirectoryList } from "services/filebrowser/actions";

function Files({ directoryList, fetchDirectoryList, dirId, match, location }) {
  useEffect(
    match => {
      fetchDirectoryList(match);
      console.log({ location }, dirId);
    },
    [match]
  );
  return (
    <div className={styles.container}>
      <div className={styles.topbar}>
        <NavLink to="/w">
          <div className={styles.myaccount}>
            <div className={styles.handlebalance}>
              <div className={styles.handle}>Kars</div>
              <div className={styles.balance}>124.21 FDT</div>
            </div>
          </div>
        </NavLink>
        <div className={styles.location}>
          <div className={styles.breadcrumb}>FairDrive / </div>
          <div className={styles.breadcrumbpath}>~122GB {dirId}</div>
        </div>
      </div>
      <div className={styles.innercontainer}>
        {directoryList.map(item => (
          <div onClick={() => changeDirectoryList(item.id)} key={item.id}>
            <div className={styles.directoryrow}>
              <RowFile item={item} key={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Files.propTypes = {
  directoryList: PropTypes.array.isRequired
};

function changeDirectoryList(_dirId) {
  console.log(_dirId);
  fetchDirectoryList(_dirId);
  Redirect;
}

const mapStateToProps = (_, ownProps) => {
  const { dirId } = (ownProps.match || {}).params || {};
  return createStructuredSelector({
    dirId: () => dirId,
    directoryList: dirId => getDirectoryList(dirId)
  });
};

const mapDispatchToProps = {
  fetchDirectoryList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files);
