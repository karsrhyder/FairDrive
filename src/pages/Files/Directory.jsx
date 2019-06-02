import React from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FileItem from "components/FileItem";
import PropTypes from "prop-types";


import { getItemsByDirectoryId, getDirNameByDirId } from "services/filebrowser/selectors";

class Directory extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topbar}>
          <NavLink to="/w">
            <div className={styles.myaccount}>
              <div className={styles.handlebalance}>
                <div className={styles.handle}>KarsRhyder</div>
                <div className={styles.balance}>124.21 FDT</div>
              </div>
            </div>
          </NavLink>
          <div className={styles.breadcrumb}>{this.props.dirName}</div>

          <NavLink to="/f">
            <div className={styles.breadcrumbpath}>Back to FairDrive /</div>
          </NavLink>
        </div>
        <div className={styles.innercontainer}>
          {this.props.files.map(item => (
            <NavLink to={"d/" + item.itemName} key={item.itemName}>
              <div className={styles.directoryrow}>
                <div className={styles.icons8folder} />
                <FileItem item={item} />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('mount', this.props.files);
  }
}

Directory.propTypes = {
  files: PropTypes.array.isRequired
};

const mapStateToProps = (_, ownProps) => {
  const { dirId } = (ownProps.match || {}).params || {};
  console.log(dirId);
  return createStructuredSelector({
    dirId: () => dirId,
    files: state => getItemsByDirectoryId(state, dirId),
    dirName: state => getDirNameByDirId(state, dirId)
  });
};

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
