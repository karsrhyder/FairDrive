import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import RowFile from "../components/RowFile";

import {
  getDirectories
} from "../services/filebrowser/selectors";

class Directory extends React.Component {
  render() {
    return (
  <div className={styles.container}>
    <div className={styles.topbar}>
      <div className={styles.breadcrumb}> {this.props.directory}</div>
      <div className={styles.breadcrumbpath}>
        Back to 
        FairDrive /</div>
        <i className={styles.flaticon}>abcdefg</i>
    </div>
    <div className={styles.innercontainer}>
            {this.props.directories.map(item => (
               <NavLink to={item} key={item}>
                 <div className={styles.directoryrow}>
                 <div className={styles.icons8folder}></div>
                 <RowFile name={item} />
                 </div>
               </NavLink>
            ))}
    </div> 
    </div>
    );
  }}

const mapStateToProps = (_, ownProps) => {
  const { directory } = (ownProps.match || {}).params || {};
  return createStructuredSelector({
    directory: () => directory,
    directories: state => getDirectories(state, directory),
  });
};

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);

