import React from 'react';
import  { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const CnodeMenu = () => {
  const handleClick=(e)=>{
    console.log(e)
    localStorage.setItem('item',[e.key])
  }
  return (
    <Menu
      onClick={handleClick}
      mode="horizontal"
      selectedKeys={[localStorage.getItem('item')]}
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

CnodeMenu .propTypes = {
};

export default CnodeMenu ;
