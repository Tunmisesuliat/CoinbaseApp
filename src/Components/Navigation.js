import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavDropdownMenu from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state = {dropDownOpen:false}
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggle = this.toggle.bind(this);

    };
    toggle(){
        this.setState(prevState => ({
            dropDownOpen:!prevState.dropDownOpen
        }));
    }

    handleOpen(e){
        e.preventDefault();
        this.setState({dropDownOpen:true});
    }
    handleClose(){
        this.setState({dropDownOpen:false}, () => {
            document.removeEventListener('hover', this.handleClose)
        })
    }

    render(){
    return(

        <Navbar   className="navbar navbar-default" collapseonSelect scrolling="light" bg='light' expand='lg' sticky="top">
            
            <Navbar.Brand id="brand" href="#">Coinbase</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-between">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Prices </Nav.Link>
                    <NavDropdown style={{hover:"display block"}} title="Products"  onMouseEnter = {this.handleOpen} onMouseLeave = {this.handleClose} isOpen={this.state.dropDownOpen}>
                      
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                            <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        
                    </NavDropdown>

                    <NavDropdown title="Company" data-hover="dropdown">
                        {/* <div className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="false"> */}
                        
                        <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        <NavDropdown.Item href="#">Coinbase</NavDropdown.Item>
                        
                    </NavDropdown>
                
                    <Nav.Link href="#">Earn crypto</Nav.Link>
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