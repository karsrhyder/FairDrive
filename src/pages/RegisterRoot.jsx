import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Register extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <div className={styles.breadcrumb}>SwarmDrive / </div>
                    {/* <div className={styles.breadcrumbpath}>
        by Fair Data Society
        </div> */}

                </div>
                <div className={styles.innercontainer}>
                    <div className={styles.register}>
                        <div className={styles.breadcrumbpath}>Register</div>
                        <input type="text" placeholder="Handle"></input>
                        <input type="password" placeholder="Password"></input>
                        <input type="password" placeholder="Password check"></input>
                        <NavLink to="/f">
                            <div className={styles.button}>Register</div>
                        </NavLink>
                        <NavLink to="/" className={styles.createnew}>
                            <div>Unlock SwarmDrive</div>
                        </NavLink>
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
)(Register);

