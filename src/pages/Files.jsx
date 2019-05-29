import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import RowFile from "../components/RowFile";

import {
  getDirectories
} from "../services/filebrowser/selectors";

class Files extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topbar}>
          <div className={styles.breadcrumb}>SwarmDrive / </div>
          <div className={styles.breadcrumbpath}>
            ~122GB - 11.23 SWT
        </div>
        </div>
        <div className={styles.innercontainer}>

          {this.props.directories.map(item => (
            <NavLink to={"d/" + item}>
              <div className={styles.directoryrow}>
                <div className={styles.icons8folder}></div>
                <RowFile name={item} />
              </div>
            </NavLink>

          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  directories: getDirectories
});

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files);

