import React from 'react';
import {Spin, Alert,Card} from 'antd';
import {connect} from 'dva';
import styles from './App.css';
import CnodeMenu  from '../components/CnodeMenu';
import { Link } from 'dva/router';

function App({dispatch,topics,details}) {
  const {
    data,loading
  } = topics;
  const item=data.map(function (item,index) {
    return (
    <div className={styles.cardBox} key={index}>
      <div className={styles.cardAuthor}>
        <a href="">
          <img className={styles.cardImg} src={item.author.avatar_url} alt="item.author.loginname"/>
        </a>
      </div>
      <div className={styles.content}>
        <Link to={`/topic/${item.id}`} className={styles.cardTitle}>{item.title}</Link>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
    )
  })
  return (
    <div className={styles.appContent}>
      <CnodeMenu />
      {loading?
        <Spin className='ant-spin' tip='正在玩命的加载中...'/>
        :
        <div>
          {item}
        </div>
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
