import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Wallet extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.topbar}>

                </div>
                <div className={styles.innercontainer}>
                    <div className={styles.register}>
                        <div className={styles.breadcrumb}>132.33</div>
                        <div className={styles.breadcrumbpath}>Send</div>
                        <input type="text" placeholder="0x..."></input>
                        <input type="text" placeholder="Amount"></input>
                        <NavLink to="/f">
                            <div className={styles.button}>Send</div>
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
)(Wallet);

