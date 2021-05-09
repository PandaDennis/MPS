import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import './c_project.css';
import { Layout, Form, Input, Button, Row, Col, Typography, Select, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { v4 as uuidv4 } from 'uuid';
const { confirm } = Modal;
const { Option } = Select;
const { Title } = Typography;
const { Content } = Layout;




const uuid = uuidv4();





const submitHandler = (values) => {
    const axios = require('axios');
    var subMitData = [];

    console.log(typeof values);
    console.log(values);
    subMitData.push(values.project);
    console.log(subMitData);

    axios.post('/project/postsTest',
        subMitData
    )
        .then(function (response) {
            console.log("Testing :" + response);
            if (response.data.status === 0 && response.status === 200) {
                console.log(response);

            } else {
                console.log("Error")
            }
        })
        .catch(function (error) {
            console.log(error);

        });
};


//For muilt select
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// const animatedComponents = makeAnimated();

function showConfirm() {

    confirm({
        title: 'Do you Want to delete these items?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        onOk() {
            console.log('OK and change');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

function handleChange(value) {
    console.log("First "+value);
    if (value === 'Change') {
        showConfirm()
    }
    console.log(value);
}
// function readfouser() {
//     userOption.push("{label: 'orange',value: 'orange_Test'},")
//     console.log(userOption);
// }
function Create_project() {
    const [userOption, setuserOption] = useState([]);

    // const userOption = [{ label: 'Apple', value: 'apple_Test' }];
  


    useEffect(() => {
        //setuserlist("{label: 'orange',value: 'orange_Test'}")
        userOption.push("{label: 'orange',value: 'orange_Test'},");
        console.log(typeof userOption)
      }, [])


    //   {userOption.map(userOption => (
    //     <Option key={userOption.value}>{userOption.label}</Option>
    // ))}


    //   showConfirm =>{
    //     confirm({
    //       title: 'Do you Want to delete these items?',
    //       icon: <ExclamationCircleOutlined />,
    //       content: 'Some descriptions',
    //       onOk() {
    //         console.log('OK');
    //       },
    //       onCancel() {
    //         console.log('Cancel');
    //       },
    //     });
    //   }

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
                                name={['project', 'projectname']}
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the Project Name',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Owner"
                                name={['project', 'owner']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please Select Owner',
                                    },
                                ]}

                            >
                                <Select onChange={handleChange} >


                                    <Select.OptGroup label="Owner User">
                                    {userOption.map(item => <Select.Option value={item.value}>{item.label}</Select.Option>)}
                                    {/* {userlist.map(userOption => (
                                        <Option key={userOption.value}>{userOption.label}</Option>
                                    ))} */}
                                    {
                                        console.log("For Testing !!!!!!!!!"+userOption)
                                    }

                                    </Select.OptGroup>
                                    <Select.OptGroup label="Other User">
                                        <Select.Option key="Change" >Change User</Select.Option>
                                    </Select.OptGroup>


                                </Select>


                                {/* <Button onClick={showConfirm}>Confirm</Button> */}

                            </Form.Item>
                            {/* <Form.Item>
                                <Button onClick={showConfirm}>Confirm</Button>
                            </Form.Item> */}

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
