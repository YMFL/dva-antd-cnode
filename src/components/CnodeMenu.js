import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
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
      theme="dark"
    >
      <Menu.Item key="all" >
        <Icon type="appstore" />全部
      </Menu.Item>
      <Menu.Item key="good" >
        <Icon type="appstore" />精华
      </Menu.Item>
      <Menu.Item key="share" >
        <Icon type="appstore" />分享
      </Menu.Item>
      <Menu.Item key="ask" >
        <Icon type="appstore" />问答
      </Menu.Item>
      <Menu.Item key="job" >
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
