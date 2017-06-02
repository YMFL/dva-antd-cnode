import React from 'react';
import {Spin, Alert} from 'antd';
import {connect} from 'dva';
import styles from './App.css';
import  isEmptyObject  from '../utils/utils'
import CnodeMenu  from '../components/CnodeMenu'

function App({topics}) {
  const {
    data
  } = topics;
  return (
    <div className={styles.appContent}>
      <CnodeMenu />
      {!isEmptyObject(data) ?
        <div>
          {}
        </div>
        :
        <Spin className='ant-spin' tip='正在玩命的加载中...'/>
      }
    </div>

  );

}

App.propTypes = {};
const mapStateToProps = (state) => {
  const topics = state.topics;
  return {topics};
};
export default connect(mapStateToProps)(App);
