import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import { Navbar ,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './components/Upload'
import project_List from './components/page/projectList/ProjectList'

import './App.css'


function App() {
 
  return (
    <>
    <Router>
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          LOGO
          
        </Navbar.Brand>
        {/* <Nav activeKey="/">
            <Nav.Item className="navbarItem">
              <Nav.Link href="/project">Active</Nav.Link>
            </Nav.Item>
          
          </Nav> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="/project">Project</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
          
      </Navbar>
      


      


        <div className="App">
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/project" component={project_List} />
          </Switch>
        </div>  
    </Router>
    </>
  );
}

const Home = () =>(
  
  <div style={{ backgroundColor:'#f0f2f5' ,width: '100%', height: '100%'}}>
      <h5>MPS Test</h5>
  </div>
  
);

export default App;
