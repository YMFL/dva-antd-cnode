import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import styles from './CnodeMenu.css'
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const CnodeMenu = ({ dispatch, topics }) => {
  const { item } = topics;
  const handleClick = (e) => {
    dispatch({
      type: 'topics/fetch',
      payload: {
        tab: e.key,
        page: ' ',
        limit: ' ',
        mdrender: true,
      },
    });
  };
  return (
    <Menu
      onClick={handleClick}
      mode="horizontal"
      selectedKeys={[item ? item : 'all']}
    >
      <Menu.Item key="all" className={styles.item}>
        <Icon type="appstore" />全部
      </Menu.Item>
      <Menu.Item key="good" className={styles.item}>
        <Icon type="appstore" />精华
      </Menu.Item>
      <Menu.Item key="share" className={styles.item}>
        <Icon type="appstore" />分享
      </Menu.Item>
      <Menu.Item key="ask" className={styles.item}>
        <Icon type="appstore" />问答
      </Menu.Item>
      <Menu.Item key="job" className={styles.item}>
        <Icon type="appstore" />招聘
      </Menu.Item>
    </Menu>
  );
};


const mapStateToProps = (state) => {
  const topics = state.topics;
  return { topics };
};
// const mapDispatchToProps=
export default connect(mapStateToProps)(CnodeMenu);
