import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import './c_project.css';
import { Layout, Form, Input, Button, Row, Col, Typography, Select, Modal, Switch } from 'antd';
import { ExclamationCircleOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
const { confirm } = Modal;
const { Option } = Select;
const { Title } = Typography;
const { Content } = Layout;




const uuid = uuidv4();

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const projectGroup = [];
for (let i = 10; i < 36; i++) {
    projectGroup.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}



const submitHandler = (values) => {
    const axios = require('axios');
    var subMitData = [];

    subMitData.push(values.project);
    console.log(subMitData);

    axios.post('/project/create',
        subMitData
    )
        .then(function (response) {
            console.log("Testing  :" + response);
            if (response.data.status === 0 && response.status === 200) {
                console.log(response);
                // Swal.fire(
                //     'Project Success to Create',
                //     'You clicked the button!',
                //     'success'
                // )
                Swal.fire({
                    title: "Project Success to Create",
                    text: "Click the button go to a project list.",
                    icon: "success"
                }).then(function() {
                    window.location = "../project";
                });

                
                

            } else {
                console.log("Error")
            }
        })
        .catch(function (error) {
            console.log(error);

        });
};




function Create_project() {
    const [projectownUser, setprojectownUser] = useState([])
    const [changest, setchangest] = useState(false)
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setprojectownUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    const handleChange = (value) => {
        if (value === 'Change' && changest === false) {
            showConfirm("other")
        }
        if (value === 'Change' && changest === true) {
            showConfirm("Back")
        }

    }
    const showConfirm = (type) => {
        if (type === 'other') {
            confirm({
                title: 'Do you Change to change these items?',
                icon: <ExclamationCircleOutlined />,
                content: 'Some descriptions',
                onOk() {
                    console.log('OK and change');
                    axios
                        .get('https://jsonplaceholder.typicode.com/comments?postId=1')
                        .then(res => {
                            console.log("applwe(Test1): " + JSON.stringify(res.data))
                            setprojectownUser(res.data)
                            setchangest(true)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                },
                onCancel() {
                    console.log('Cancel');

                },
            });
        } else if (type === 'Back') {
            confirm({
                title: 'Do you go back to change these items?',
                icon: <ExclamationCircleOutlined />,
                content: 'Some descriptions',
                onOk() {
                    console.log('OK and change');
                    axios
                        .get('https://jsonplaceholder.typicode.com/users')
                        .then(res => {
                            setprojectownUser(res.data)
                            setchangest(false)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                },
                onCancel() {
                    console.log('Cancel');

                },
            });

        }

    }

    return (
        <>
            <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Row>
                            <Col span={8}><Title level={4}>Create Project</Title></Col>
                        </Row>
                        <hr />
                        <Form
                            name="nest-messages"
                            onFinish={submitHandler}
                        >
                            <Form.Item
                                name={['project', 'projectid']}
                                label="Project ID"
                                initialValue={uuid}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input disabled={true} />
                            </Form.Item>
                            <Form.Item
                                name={['project', 'projectname']}
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the Project Name, The Project name only Text and number ',
                                        pattern: /^[A-Z a-z 0-9]+$/
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Owner"
                                name={['project', 'master']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Owner',
                                    },
                                ]}

                            >
                                <Select onChange={handleChange} defaultActiveFirstOption={true}>
                                    <Select.OptGroup label="Owner User">
                                        {projectownUser.map(item => <Select.Option value={item.name} key={item.id}>{item.name}</Select.Option>)}
                                    </Select.OptGroup>
                                    <Select.OptGroup label="Other User">
                                        <Select.Option key="Change" >{changest ? "Go Back to Owner User" : "Change User"}</Select.Option>
                                    </Select.OptGroup>
                                </Select>



                            </Form.Item>
                            <Form.Item
                                label="Project Group"
                                name={['project', 'projectGroup']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Project User',
                                    },
                                ]}

                            >
                                <Select
                                    mode="multiple"
                                    size="default"
                                    placeholder="Please select"
                                    // defaultValue={}
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                >
                                    {projectGroup}
                                </Select>



                            </Form.Item>
                            <Form.Item
                                label="Project User"
                                name={['project', 'projectUser']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Project User',
                                    },
                                ]}

                            >
                                <Select
                                    mode="multiple"
                                    size="default"
                                    placeholder="Please select"
                                    // defaultValue={}
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                >
                                    {children}
                                </Select>



                            </Form.Item>

                            <Form.Item
                                label="Status"
                                name={['project', 'projectStatus']}
                                valuePropName="checked"
                                initialValue={true}
                            >

                                <Switch
                                    checkedChildren={<CheckOutlined />}
                                    unCheckedChildren={<CloseOutlined />}
                                />

                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>

            </Layout>




        </>
    );




}








export default Create_project
