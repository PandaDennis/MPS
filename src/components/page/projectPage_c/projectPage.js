import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './projectPage.css'
import { Layout, Menu, Avatar, Button } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import P_tree from "./projectTree"


const { Sider } = Layout;



function ProjectPage() {
  const { projectId } = useParams();
  const [projectDetail, setprojectDetail] = useState([]);
  const [collapsed, setpcollapsed] = useState([true])

  useEffect(() => {
    axios
      .get('/project/findByID/' + projectId)
      .then(res => {
        setprojectDetail(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  })

  
  const toggle = () => {
    setpcollapsed(!collapsed);
  };
 
  function getFirstDig(a) {
    if (typeof a !== 'undefined') {
      return a.charAt(0);
    } else {
      return null;
    }
  }

  return (
    <>

      <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>
        
        {/* <Sider trigger={null} collapsible collapsed={this.state.collapsed}></Sider> */}
        <Sider className="site-layout-background" trigger={null} collapsible collapsed={collapsed}>
          <Avatar
            key="1"
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              margin: "25px"
            }}
          >
            {getFirstDig(projectDetail.project_name)}
          </Avatar>
          { !collapsed ? projectDetail.project_name : null }
          
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            
          //   style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Button type="primary" onClick={toggle} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
          {/* <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <P_tree/>
          <br/>{projectId}
        </Content> */}

        </Layout>
      </Layout>



    </>
  );




}
export default ProjectPage
