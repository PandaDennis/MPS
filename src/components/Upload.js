import React,{Component} from 'react';
import axios from 'axios'
import './Upload.css'

// function Upload() {
//     const fileSelectedHandel = event =>{
//         for(var i = 0; i< event.target.files.length ; i++ ){
//             console.log(event.target.files[i].name);
//         }
        
//     }
//     return (
//         <>
//             <form className="uploadform" onChange={fileSelectedHandel}>
//                 <input type="file" multiple/>
//                     <p>Drag your files here or click in this area.</p>
//                     <button type="submit">Upload</button>
//             </form>
//         </>  
//     )
// }
export class Upload extends Component{

    state = {
        uploadPercentage: 0 
    }
    fileSelectedHandel = ({target: {files}}) =>{
        let data
        
        // for(var i=0;i<files.length;i++){
        //     console.log(files[i])
        //     data = new FormData();
        //     data.append('file',files[i])

        //     const options = {
        //         onUploadProgress: (ProgressEvent) => {
        //             const {loaded, total} = ProgressEvent;
        //             let percent = Math.floor((loaded * 100) / total )
        //             console.log(`${loaded}kb of ${total} | ${percent} %`);
        //         }
        //     }

        //     axios.post("/upfile/test_posts",data,options).then(res =>{
        //         console.log(res)
        //     })
        // }
        console.log(files[0])
            data = new FormData();
            data.append('file',files[0])

            const options = {
                onUploadProgress: (ProgressEvent) => {
                    const {loaded, total} = ProgressEvent;
                    let percent = Math.floor((loaded * 100) / total )
                    console.log(`${loaded}kb of ${total} | ${percent} %`+ files[0].name);
                }
            }

            axios.post("/upfile/test_posts",data,options).then(res =>{
                console.log(res)
            })
        
    }

    render(){
        return (
                    <>
                        <form className="uploadform" onChange={this.fileSelectedHandel}>
                            <input type="file" multiple/>
                                <p>Drag your files here or click in this area.</p>
                                <button type="submit">Upload</button>
                        </form>
                    </>  
                )
    }
}

export default Upload
