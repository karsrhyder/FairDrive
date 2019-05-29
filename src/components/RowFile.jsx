import React from "react";
import styles from "../styles.module.css";

export default class RowFile extends React.Component {
  componentWillMount() { }
  componentHasMounted() { }
  render() {
    return <div className={styles.rowfile}>{this.props.item.name}</div>;
  }
}
