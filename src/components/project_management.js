import React from 'react';
import './project_management.css'
import P_create from "./page/createProject/c_project"
import P_list from "./page/projectList/ProjectList"
import P_page from "./page/projectPage_c/projectPage"

// DEBUG
// import P_tree from "./page/projectPage_c/projectTree"
import {Switch, Route} from 'react-router-dom';



function project_management() {
    

    return (
        <>
        <Switch>
        {/* The component will show here if the current URL matches the path */}
        <Route path="/project" exact component={P_list} />
        <Route path="/project/create" component={P_create} />
        <Route path="/project/main/:projectId" component={P_page} />

        {/* <Route path="/project/tree" component={P_tree} /> */}
      </Switch>
           
      
        </>  
    )
}

export default project_management
