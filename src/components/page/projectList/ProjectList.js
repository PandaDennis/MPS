import React, { Component } from 'react';
import {  Typography, Layout,Tabs,Divider,Avatar,Spin} from 'antd';
import axios from 'axios';
const { Title ,Text} = Typography;
const { Content ,Footer } = Layout;
const { TabPane } = Tabs;

export class projectList extends Component {
  constructor() {
    super();
    this.state = { project: [] };
  }

  componentDidMount() {
    // Simple GET request using axios
    axios.get('/project/findAll')
        .then(
          response => this.setState(
            { 
              project: response.data.message
            }),
            
          );
    }
 

  render() {

    // const { visible, loading } = this.state;
    return (
      <>
        
        <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>
          
        <Content className="site-layout" style={{ padding: "0 150px", marginTop: -3 }}>
            <div style={{ padding: 24, minHeight: 380, width: "100%", height: "100%" }}>
              <Title level={3}>Project</Title>
              <Divider />
              <Tabs defaultActiveKey="1" >
                <TabPane tab="My Project" key="1">
                {
                  this.state.project.length === 0
                    ? <Spin />
                    : this.state.project.map(project => (
                      <div key="{project}">
                        <table width='180' >
                          <tbody>
                          <tr>
                              <td rowSpan='2'>
                              <Avatar.Group>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <Avatar
                                  style={{
                                    backgroundColor: '#f56a00',
                                  }}
                                >
                                  K
                                </Avatar>
                              </Avatar.Group>
                              </td>
                              <td style={{verticalAlign:'top'}}>
                                <a style={{paddingLeft:15,color:'black'}} href='www.google.com'>
                                  {project.project_name}
                                </a>
                              </td>
                          </tr>
                          <tr>
                                <td style={{verticalAlign:'top',paddingLeft:15.5}}>
                                <Text type="secondary">Dis</Text>
                                </td>
                          </tr>
                          </tbody>
                        </table>
                  
                    </div>
                    ))
                }
                  {/* <div>
                    <table width='180'>
                      <tbody>
                      <tr>
                          <td rowSpan='2'>
                          <Avatar.Group>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            <Avatar
                              style={{
                                backgroundColor: '#f56a00',
                              }}
                            >
                              K
                            </Avatar>
                          </Avatar.Group>
                          </td>
                          <td style={{verticalAlign:'top'}}>
                            <a style={{paddingLeft:15}}>Project Name</a>
                          </td>
                      </tr>
                      <tr>
                            <td style={{verticalAlign:'top',paddingLeft:15.5}}>
                            <Text type="secondary">Dis</Text>
                            </td>
                      </tr>
                      </tbody>
                    </table>
               
                </div> */}
                
                </TabPane>
                <TabPane tab="Team Project" key="2">
                  apple
                </TabPane>
              </Tabs>
            </div>
          </Content>
         
        </Layout>

        <Footer style={{ textAlign: 'center' }}>MMPS ©2018 Created by Dennis,Power By </Footer>
      </>
    );
  }
}


export default projectList
