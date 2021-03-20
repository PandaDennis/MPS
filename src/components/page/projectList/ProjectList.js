import React, { Component } from 'react';
import {  Typography, Layout,PageHeader, Button, Descriptions} from 'antd';
import axios from 'axios';
const { Title } = Typography;
const { Content ,Footer } = Layout;


export class uploadBTN extends Component {


  render() {

    // const { visible, loading } = this.state;
    return (
      <>
        
        <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>
          
          <Content className="site-layout " style={{ padding: '0 50px', marginTop: 64 }}>
          <Title level={3}>Project</Title>
            <PageHeader
              ghost={false}
              title="Title"
              subTitle="This is a subtitle"
              extra={[
                <Button key="3">Action</Button>,
                <Button key="2">Edit</Button>,
                <Button key="1" type="primary">
                  Preview
                </Button>,
              ]}
            >
              <Descriptions size="small" column={3}>
                <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
                <Descriptions.Item label="Association">
                  421421
                </Descriptions.Item>
                <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
                <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
                <Descriptions.Item label="Remarks">
                  Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </Content>
         
        </Layout>

        <Footer style={{ textAlign: 'center' }}>MMPS ©2018 Created by Dennis,Power By </Footer>
      </>
    );
  }
}


export default uploadBTN
