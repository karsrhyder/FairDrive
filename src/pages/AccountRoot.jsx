import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Account extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <div className={styles.breadcrumb}>FairDrive / </div>
                    {/* <div className={styles.breadcrumbpath}>
        by Fair Data Society
        </div> */}

                </div>
                <div className={styles.innercontainer}>
                    <div className={styles.register}>
                        <div className={styles.breadcrumbpath}>Unlock</div>
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <div className={styles.button}>Unlock</div>
                    </div>
                    <div className={styles.register}>
                        <div className={styles.breadcrumbpath}>Register</div>
                        <input type="text" placeholder="Email"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="password" placeholder="Password again"></input>
                        <div className={styles.button}>Register</div>
                    </div>
                </div>
            </div>
        )
    }
};

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
)(Account);

