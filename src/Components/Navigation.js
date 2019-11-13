import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavDropdownMenu from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Navigation extends React.Component{
    

    render(){
    return(

        <Navbar inverse collapseOnSelect className="nav-bar" collapseonSelect scrolling="light" bg='light' expand='lg' sticky="top">
            
            <Navbar.Brand id="brand" href="#">Coinbase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-between">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Prices </Nav.Link>
                    <NavDropdown style={{hover:"display block"}} title="Products" >
                        <div style={{display:"flex", flexDirection:"column", width:"250px" }} >
                            <Row>
                            <Col xs={6} md={6} lg={6}>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            </Col>
                            <Col xs={6} md={6} lg={6}>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            </Col>
                            </Row>
                        </div>
                    </NavDropdown>

                    <NavDropdown id="drop" title="Company" data-hover="dropdown" style={{width:"100px"}}>
                     
                        <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        
                    </NavDropdown>
                
                    <Nav.Link href="#">Earn crypto</Nav.Link>
                    <Button href="#">upto $130</Button>
                </Nav>

                <Nav id="nav-right">
                    <Nav.Link href="#">Sign in</Nav.Link>
                    <Button onClick={this.props.handleClick} type="submit" >Get Started</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}
} 

export default Navigation;