import React, { Component } from 'react'
import { Button, Modal,Form,Popover} from 'antd';
import axios from 'axios';
import {
    UploadOutlined,
  } from '@ant-design/icons';
export class uploadBTN extends Component {
    state = {
        loading: false,
        visible: false,
        uploadfile: '',
        buttonWidth :290,
        
      };
      projectInfo = "ProjectID:"+ this.props.projectID
      hoverContent = <div>This is hover content.</div>;
      FileListTitle = <b>File Name</b>;
      FileListContent = 'Null';

      showModal = () => {
        this.setState({
          visible: true,
        });
        console.log(this.props.projectID)
      };
    
      handleSubmit = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
        var formData = new FormData();
        for (const key of Object.keys(this.state.uploadfile)) {
            formData.append('projectPhoto', this.state.uploadfile[key])
        }
        axios.post("/upfile/uploadsprojectmedia/org/"+this.props.projectID, formData, {
        }).then(res => {
            console.log(res.data)
        })
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };


      handlPpushUploadToList = (e) => {
          var fileName = '';
        this.setState({ 
            uploadfile: e.target.files 
        });
        //console.log(e.target.files.length);
       for(var i=0;i<e.target.files.length;i++){
            //console.log(e.target.files[i].name);
            fileName += e.target.files[i].name +',';
       }
       fileName = fileName.split(",");
        this.FileListContent=fileName.map((item, index) => (
            <p key={index}>{item}</p>

        ))
        
      };
      
    render() {
        const { visible, loading } = this.state;
    return (
      <div>
        
       <Button type="primary" onClick={this.showModal}>
       <UploadOutlined />
        </Button>
        <Modal
          visible={visible}
          title="UpLoad File "
          
        //   onOk={this.handleOk}
         onCancel={this.handleCancel}
          footer={[
            // <Tooltip placement="bottomLeft" title={this.projectInfo}>
            //     <Button style={{ marginRight: this.state.buttonWidth, clear: 'both', whiteSpace: 'nowrap' }} shape="circle" icon={<ExclamationCircleOutlined />} />
            // </Tooltip>,
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmit}>
              Submit
            </Button>
            
          ]}
        >
            <Form>
   
               <div className="btn btn-default" onChange={this.handlPpushUploadToList}>
                    <input onChange={this.handlPpushUploadToList} multiple type="file"/>
                </div>
                <Popover placement="rightTop" title={this.FileListTitle} content={this.FileListContent}  trigger="click">
                        <Button >File List</Button>
                 </Popover>
                {/* <button type="button" class="btn">Basic</button> */}
            </Form>
          
        </Modal>
        {/* <Tooltip placement="top" title={this.props.projectID}>
                    <Button shape="circle" icon={<ExclamationCircleOutlined />} />
        </Tooltip> */}
      </div>
    );
    }
}


export default uploadBTN
