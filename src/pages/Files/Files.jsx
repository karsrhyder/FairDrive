import React from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import RowFile from "components/RowFile";
import DefaultAvatar from "images/defaultAvatar.png";
import { getDirectories } from "services/filebrowser/selectors";

class Files extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topbar}>
          <NavLink to="/">
            <div className={styles.myaccount}>
              <img className={styles.avatar} src={DefaultAvatar} />
              <div className={styles.handlebalance}>
                <div className={styles.handle}>KarsRhyder</div>
                <div className={styles.balance}>124.21 SWT</div>
              </div>
            </div>
          </NavLink>
          <div className={styles.breadcrumb}>FairDrive / </div>
          <div className={styles.breadcrumbpath}>~122GB</div>
        </div>
        <div className={styles.innercontainer}>
          {this.props.directories.map(item => (
            <NavLink to={"d/" + item.name}>
              <div className={styles.directoryrow}>
                <div className={styles.icons8folder} />
                <RowFile item={item} />
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
