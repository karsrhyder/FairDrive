import React from "react";
import styles from "styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import RowFile from "components/RowFile";
import PropTypes from "prop-types";
import { getDirectoryList } from "services/filebrowser/selectors";

class Files extends React.Component {
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
          <div className={styles.breadcrumb}>FairDrive / </div>
          <div className={styles.breadcrumbpath}>~122GB</div>
        </div>
        <div className={styles.innercontainer}>
          {this.props.directoryList.map(item => (
            <NavLink to={"d/" + item.dirId}>
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

  componentDidMount() {
    console.log('mount', this.props.directories);
  }
}

Files.propTypes = {
  directories: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  directoryList: getDirectoryList
});

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files);
