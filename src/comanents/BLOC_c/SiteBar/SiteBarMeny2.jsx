import React from "react";
import { Menu } from 'antd';
import { AppstoreOutlined, SettingOutlined, OrderedListOutlined } from '@ant-design/icons';
import clases from "./SiteBarMenu.module.scss";
import { NavLink } from "react-router-dom";
import imgName5 from '../../../assets/img/img5.png';
import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import imgName3 from '../../../assets/img/img3.png';
import imgName4 from '../../../assets/img/img4.png';
import imgName6 from '../../../assets/img/img6.jpg';
import imgL from './../../../assets/img/len.jpg';
import imgS from '../../../assets/img/S1.png';
import { FormOutlined,  } from '@ant-design/icons';


const SiteBarMeny2 = () => {

  const { SubMenu } = Menu;

  let handleClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<OrderedListOutlined />} title="Главная">
        <Menu.ItemGroup >
          <Menu.Item key="1">
            <NavLink className={clases.SiteBarMenyT} to='/'>
              <div className={clases.siteBarIcon}>
                <img src={imgName5} className={clases.imgIcon} alt='' />
                <span>главная</span>
              </div>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to='/Grum' className={clases.SiteBarMenyT}>
              <div className={clases.siteBarIcon}>
                <img src={imgName} className={clases.imgIcon} alt='' />
                <span>груминг</span> </div>
            </NavLink>

          </Menu.Item>

          <Menu.Item key="3">
            <NavLink to="/Price" className={clases.SiteBarMenyT}>
              <div className={clases.siteBarIcon}>
                <img src={imgName2} className={clases.imgIcon} alt='' />
                <span>прайс</span>
              </div>
            </NavLink>

          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="практика">
        <Menu.Item key="5">
          <NavLink className={clases.SiteBarMenyT} to="/Galereya" >
            <div className={clases.siteBarIcon}>
              <img src={imgName3} className={clases.imgIcon} />
              <span>галерея</span>
            </div>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="6">
          <NavLink className={clases.SiteBarMenyT} to="/Dialogs">
            <div className={clases.siteBarIcon}>
              <img src={imgName6} className={clases.imgIcon} />
              <span>ЧАТ</span>
            </div>
          </NavLink>
        </Menu.Item>




        <Menu.Item key="7">
          <NavLink className={clases.SiteBarMenyT} to="/Test1">
            <div className={clases.siteBarIcon}>
              <img src={imgName6} className={clases.imgIcon} />
              <span>test</span>
            </div>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="8">
          <NavLink className={clases.SiteBarMenyT} to="/findUser">
            <div className={clases.siteBarIcon}>
              <img src={imgS} className={clases.imgIcon} />
              <span>findUser</span>
            </div>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="9">
          <NavLink className={clases.SiteBarMenyT} to='/Users'>
            <div className={clases.siteBarIcon}>
              <img
                src={imgL} className={clases.imgIcon} />
              <span>Users</span>
            </div>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="10">
          <NavLink className={clases.SiteBarMenyT} to='/login'>
            <div className={clases.siteBarIcon}>
              {/* <img src={imgL} className={clases.imgIcon} /> */}
              <FormOutlined style={{ fontSize: '20px', color: 'rgb(253 52 52 / 85%)' }}/>
              <span>регистрация</span>

            </div>
          </NavLink>
        </Menu.Item>


        {/* <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu> */}
      </SubMenu>
      {/* <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu> */}
    </Menu>


  );
};
export default SiteBarMeny2;
