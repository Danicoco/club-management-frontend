import React from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = ({ current }) => {
    return (
        <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="dashboard" icon={<MailOutlined />}>
            <Link to="/dashboard">
                Dashboard
            </Link>
        </Menu.Item>
      </Menu>
    )
}

export default Navbar;