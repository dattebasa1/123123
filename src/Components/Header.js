 import React, { Component } from "react";
 import { Container, FormControl, Navbar, Nav, Form, Button, Header } from "react-bootstrap";
 import logo from './Logo.jpg'

 export default class Header1 extends Component {
     render() {
         return (
             <>
             <Navbar fixed='top' collapseOnSelect expand='sm' bg='dark' variant='dark'> 
                 <Container>
                     <Navbar.Brand href='/'>
                         <img
                         src={logo}
                         height="40"
                       width='40'
                        classname='d-inline-block align-top'
                        alt='Logo'
                         />
                    </Navbar.Brand>
                     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                     <Navbar.Collapse id='responsive-navbar-nav' />
                        <Nav className='mr-auto'>
                             <Nav.Link href='/users' > 1</Nav.Link>
                             <Nav.Link href='/2' > 2</Nav.Link>
                            <Nav.Link href='/3' > 3</Nav.Link>
                        </Nav>
                         <Form inline>
                            <FormControl
                             type='text'
                             placeholder='Search'
                             classname='mr-sm-2'
                             />
                             <Button variant='outline-info'>Search</Button>
                            
                         </Form>
                 </Container>
            </Navbar>
         </>
         )   
     }
 }