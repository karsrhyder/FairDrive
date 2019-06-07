import React, { useEffect } from "react";
import { Route, Redirect, match } from "react-router-dom";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import RowFile from "components/RowFile";
import PropTypes from "prop-types";
import { getDirectoryList } from "services/filebrowser/selectors";
import { fetchDirectoryList } from "services/filebrowser/actions";

function Files({ directoryList, fetchDirectoryList, match }) {
  const dirId = match.params.dirId;
  useEffect(() => {
    fetchDirectoryList(dirId);
  }, [dirId]);
  console.log(directoryList);
  let files = directoryList.files;
  let meta = directoryList.meta;
  console.log(files);
  console.log(meta);
  if (files) {
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
            <div className={styles.breadcrumb}>{meta.name} </div>
            <div className={styles.breadcrumbpath}>{meta.size}kb</div>
          </div>
        </div>
        <div className={styles.innercontainer}>
          {files.map(item => (
            <NavLink to={"/d/" + item.id} key={item.id}>
              <div className={styles.directoryrow}>
                <RowFile item={item} key={item.id} />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  } else {
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
            <div className={styles.breadcrumb}>Loading </div>
            <div className={styles.breadcrumbpath}>0 kb</div>
          </div>
        </div>
        <div className={styles.innercontainer}>
          <div className={styles.directoryrow}>Loading</div>
        </div>
      </div>
    );
  }
}

Files.propTypes = {
  files: PropTypes.array.isRequired
};

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
