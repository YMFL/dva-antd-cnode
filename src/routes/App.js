import React from 'react';
import {Spin, Alert,Card} from 'antd';
import {connect} from 'dva';
import styles from './App.css';
import CnodeMenu  from '../components/CnodeMenu';

function App({topics}) {
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
      <div className={styles.cardItem}>
        <a href="https://www.facebook.com/" className={styles.cardTitle}>{item.title}</a>
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
