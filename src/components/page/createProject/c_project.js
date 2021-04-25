import React, { Component } from 'react';
import './c_project.css'
import Swal from 'sweetalert2'
import { Layout, Form, Input, Button ,Row, Col,Typography,Select,} from 'antd';



import { v4 as uuidv4 } from 'uuid';
const { Option } = Select;
const { Title } = Typography;
const {  Content } = Layout;
//For muilt select
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// const animatedComponents = makeAnimated();
const uuid = uuidv4();





class create_project extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            projectid: uuid,
            projectname:'',
            owner:'',
            projectUser:[],
            projectGroup:[],
            projectStatus: true,
            fileDir: '/'+uuid,

        }
    }
    provinceData = ['Zhejiang', 'Jiangsu'];
    
    changeState = (e) =>{
        this.setState({projectname: e.project.projectname})
        this.setState({owner: e.project.owner})
        
        
    }
    // onFinish = (values) => {
    //     console.log(values);
    //     this.submitHandler(); 
    //   };

    
   

    submitHandler = e => {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
       const axios = require('axios');
        //e.preventDefault()
        console.log(JSON.stringify(this.state))
        this.changeState(e);
        axios.post('/project/postsTest', 
            this.state
        )
          .then(function (response) {
            console.log(response);
            if(response.data.status === 0 && response.status === 200){
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                  )
                
            }else {
                console.log("Error")
            }
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
          });
        // axios.post('/project/create', 
        //     this.state
        // )
        //   .then(function (response) {
        //     //console.log(response);
        //     if(response.data.status === 0 && response.status === 200){
        //         swal("Success To Create Project", "You clicked the button!", "success")
        //         .then(()=>{
        //             window.location.href = 'https://www.google.com/';
        //         })
        //     }else {
        //         swal({
        //             icon: 'error',
        //             text:"Error"
        //         })
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     swal({
        //         icon: "error",
        //         text:"Error,please try again "
        //     })
        //   });
    } 

    
  
    
   
render(){
    
    return (
        <>
        <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Row>
                    <Col span={8}><Title level={4}>Create Project</Title></Col>
                  </Row>
                <hr/>
                <Form  
                name="nest-messages" 
                onFinish={this.submitHandler} 
                >
                <Form.Item
                    name={['project', 'projectname']}
                    label="Name"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Owner" name={['project', 'owner']}> 
                    <Select>
                        {/* <Select.Option value="demo">Demo</Select.Option> */}
                        {this.provinceData.map(province => (
                        <Option key={province}>{province}</Option>
                        ))}
                    </Select>
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
    

}


export default create_project
