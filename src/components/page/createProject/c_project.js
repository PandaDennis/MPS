import React, { Component } from 'react';
import swal from 'sweetalert';
import './c_project.css'
import { Layout, Menu, Breadcrumb ,Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const { Header, Content, Footer } = Layout;
//For muilt select
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';
// const animatedComponents = makeAnimated();
const uuid = uuidv4();
const useroptions = [
    { value: '1123', label: 'Dennis' },
    { value: '1129', label: 'Ben' },
    { value: '1128', label: 'Eunji' },
    { value: '1125', label: 'bomi' }
  ]


const userGroupoptions = [
{ value: '1123', label: 'Dennis' },
{ value: '1129', label: 'photographerGroup1' },
{ value: '1130', label: 'photographerGroup2' },


]





class create_project extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            projectid: uuid,
            projectname:'',
            master:'',
            projectUser:[],
            projectGroup:[],
            projectStatus: true,
            fileDir: '/'+uuid,

        }
    }
    
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    handle_M_SelectChange = projectUser => {
        
        var newProjectUsers = new Array(projectUser.length);
        if(projectUser.length > 0){
            for(var i=0; i<projectUser.length;i++){
                console.log(projectUser[i].value)
                newProjectUsers[i] = projectUser[i].value
            }
        }else{
            newProjectUsers = {};
        }
        //var result = JSON.stringify(newProjectUser)
        this.setState({projectUser:newProjectUsers});
        
    };
    handle_M_SelectChangeOnGroup = projectGroup => {
        var newProjectUsersgroups = new Array(projectGroup.length);
        if(projectGroup.length > 0){
            for(var i=0; i<projectGroup.length;i++){
                console.log(projectGroup[i].value)
                newProjectUsersgroups[i] = projectGroup[i].value
            }
        }else{
            newProjectUsersgroups = {};
        }
        //var result = JSON.stringify(newProjectUser)
        this.setState({projectGroup:newProjectUsersgroups});
        
    };


    submitHandler = e => {
       const axios = require('axios');
        e.preventDefault()
        console.log(this.state)
        
        axios.post('/project/create', 
            this.state
        )
          .then(function (response) {
            //console.log(response);
            if(response.data.status === 0 && response.status === 200){
                swal("Success To Create Project", "You clicked the button!", "success")
                .then(()=>{
                    window.location.href = 'https://www.google.com/';
                })
            }else {
                swal({
                    icon: 'error',
                    text:"Error"
                })
            }
          })
          .catch(function (error) {
            console.log(error);
            swal({
                icon: "error",
                text:"Error,please try again "
            })
          });
    } 

   
 

    
    
    
   
render(){
    const {projectid,projectname,master} = this.state;
    
    return (
        <>
        <Layout style={{ position: 'fixed', zIndex: 1, width: '100%', height: '100%' }}>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                Content
                <Form  name="horizontal_login" layout="inline" onSubmit={this.submitHandler}>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                
                </Form>
            </div>
            </Content>
           
            {/* <div className="container">

            <form onSubmit={this.submitHandler}>
                <p className="deftvalue">Project ID</p>
                <div className="group"> 
                <input 
                type="text"
                name="projectid" 
                required 
                disabled
                defaultValue={projectid}
                //value={uuidv4()}
                onChange={this.changeHandler}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                
                </div>
                
                <div className="group">      
                <input 
                type="text" 
                name="projectname" 
                required
                value={projectname}
                onChange={this.changeHandler}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Project Name</label>
                </div>

                <div className="group">      
                <input 
                type="text" 
                name="master" 
                required
                value={master}
                onChange={this.changeHandler}
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Master</label>
                </div>
                <div>
                <p className="deftvalue">Project User</p>
                <Select 
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={this.handle_M_SelectChange}
                options={useroptions} />
                </div>
                <div>
                <p className="deftvalue">Project Group</p>
                <Select 
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                onChange={this.handle_M_SelectChangeOnGroup}
                options={userGroupoptions} />
                </div>
                
                <br/><br/>
                
               
                

                <button type = "submit">Submit</button>

                
                
            </form>
                
            
            
            </div> */}

               
        </Layout>


                


        </>
      );
}
    

}


export default create_project
