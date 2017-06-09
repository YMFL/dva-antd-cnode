import React from 'react';
import styles from './DetailsHead.css'
const DetailsHead = (props) => {
  return (
    <div className={styles.headContent}>
      <img src={props.author.avatar_url} alt={props.author.loginname}/>
      <div className={styles.loginname}>{props.author.loginname}</div>
      <div className={styles.date}>{props.create_at.slice(0,props.create_at.indexOf('T'))}</div>
      <div className={styles.read}>阅读：{props.visit_count}&nbsp;&nbsp;&nbsp;回复：{props.reply_count}</div>
    </div>
  );
};

DetailsHead.propTypes = {
};

export default DetailsHead;
