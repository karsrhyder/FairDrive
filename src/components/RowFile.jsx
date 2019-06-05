import React from "react";
import styles from "../styles.module.css";

export default class RowFile extends React.Component {
  componentWillMount() { }
  componentHasMounted() { }
  render() {
    return <div className={styles.rowfile}>
      <img src={this.props.item.icon}></img>

      <div className={styles.dirName}>{this.props.item.name}</div>


    </div>
  }
}
