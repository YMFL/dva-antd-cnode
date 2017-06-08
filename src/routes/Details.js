import React from 'react';
import { connect } from 'dva';
import {Spin} from 'antd';
import styles from './Details.css';

function Details({details}) {
  const {loading,data} =details;
  console.log(details)
  // console.log(content)
  return (
    <div className={styles.normal}>
      <div>
        {loading?
          <Spin className='ant-spin' tip='正在玩命的加载中...'/>
          :
          <div dangerouslySetInnerHTML={{__html:data.content}} />
        }
      </div>
    </div>
  );
}

Details.propTypes = {
};
const mapStateToProps = (state) => {
  const details = state.details;
  return {details};
};
export default connect(mapStateToProps)(Details);
