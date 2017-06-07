import React from 'react';
import { connect } from 'dva';
import styles from './Details.css';

function Details({}) {
  return (
    <div className={styles.normal}>
      <div>details</div>
    </div>
  );
}

Details.propTypes = {
};

export default connect()(Details);
