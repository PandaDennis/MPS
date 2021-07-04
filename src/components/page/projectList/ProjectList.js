import React, { Component } from 'react';
import { Button, Typography, Layout, Tabs, Avatar, Spin, Row, Col, Empty } from 'antd';
import axios from 'axios';
const { Title, Text } = Typography;
const { Content, Footer } = Layout;
const { TabPane } = Tabs;

export class projectList extends Component {
  constructor() {
    super();
    this.state = ({
      project: [],
      my_dataDisplay: false
    });
  }

  componentDidMount() {
    // Simple GET request using axios
    axios.get('/project/findAll')
      .then(
        response => {
          // console.log(response.data.message.length)
          // console.log(response.data)
          if (response.data.status === 1) {

            this.setState({
              my_dataDisplay: false
            })
          } else {
            this.setState({
              project: response.data,
              my_dataDisplay: true
            })
          }
          // this.setState(
          //   { 
          //     project: response.data.message
          //   }),
        })



  }



  render() {

    const { project } = this.state;
    if (this.state.my_dataDisplay) {
      return (
        <>
          <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>

            <Content className="site-layout" style={{ padding: "0 150px", marginTop: -3 }}>
              <div style={{ padding: 24, minHeight: 380, width: "100%", height: "100%" }}>
                {/* <Title level={3}>Project</Title> */}
                <div>
                  <Row>
                    <Col span={8}><Title level={4}>Project</Title></Col>
                    <Col span={8} style={{ textAlign: "right" }} offset={8}>
                      <Button type="dashed" href='/project/create'>
                        Create
                      </Button>
                    </Col>
                  </Row>
                </div>
                <hr />
                {/* <Divider /> */}
                <Tabs defaultActiveKey="1" >
                  <TabPane tab="My Project" key="1">
                    <div>
                      <table width='300'>
                        <tbody>
                          {
                            project.length === 0 && project.status !== 0
                              ? <Spin />
                              : project.message.map(function (project,index){
                                return ([
                                <tr key={index}>
                                  <td rowSpan='2' style={{width:'80px'}}>
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
                                     <a href={'/project/main/' + project.project_id}>
                                     {project.project_name}
                                     </a>
                                   </td>
                              </tr>,
                              <tr key={index+1}>
                                    <td style={{verticalAlign:'top'}}>
                                     <Text type="secondary">Dis</Text>
                                     </td>
                               </tr>
                               ]);
                              }

                              )

                          }
                        
                        </tbody>
                      </table>

                    </div>
                    {

                      // project.length === 0 && project.status !== 0
                      //   ? <Spin />
                      //   : project.message.map(project => (
                      //     <div key={project.project_id.toString()}>
                      //       <table width='180' >
                      //         <tbody>
                      //         <tr>
                      //             <td rowSpan='2'>
                      //             <Avatar.Group>
                      //               <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      //               <Avatar
                      //                 style={{
                      //                   backgroundColor: '#f56a00',
                      //                 }}
                      //               >
                      //                 K
                      //               </Avatar>
                      //             </Avatar.Group>
                      //             </td>
                      //             <td style={{verticalAlign:'top',paddingLeft:15.5 }}>
                      //               <a  href='www.google.com'>
                      //                 {project.project_name}
                      //               </a>
                      //             </td>
                      //         </tr>
                      //         <tr>
                      //               <td style={{verticalAlign:'top',paddingLeft:15.5}}>
                      //               <Text type="secondary">Dis</Text>
                      //               </td>
                      //         </tr>
                      //         </tbody>
                      //       </table>

                      //   </div>
                      //   )) 



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
    } else {
      return (
        <>
          <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>

            <Content className="site-layout" style={{ padding: "0 150px", marginTop: -3 }}>
              <div style={{ padding: 24, minHeight: 380, width: "100%", height: "100%" }}>
                {/* <Title level={3}>Project</Title> */}
                <div>
                  <Row>
                    <Col span={8}><Title level={4}>Project</Title></Col>
                    <Col span={8} style={{ textAlign: "right" }} offset={8}>
                      <Button type="primary" href='/project/create'>
                        New Project
                      </Button>
                    </Col>
                  </Row>
                </div>
                <hr />
                {/* <Divider /> */}
                <Tabs defaultActiveKey="1" >
                  <TabPane tab="My Project" key="1">

                    <Empty />

                  </TabPane>
                  <TabPane tab="Team Project" key="2">
                    <Empty />
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
}


export default projectList
