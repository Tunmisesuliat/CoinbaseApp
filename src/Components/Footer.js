import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';

function FooterElement(){
    return(
        <Container>
            <Row>
                <Col>
                    <ul>
                        <li id="heading"> Coinbase </li>
                        <li><a href="!#"> +1 (888) 908-7930 </a></li>
                        <li><a href="!#"> support.coinbase.com </a></li>
                        <li><a href="!#"> &copy; 2019 Coinbase </a></li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li id="heading">Products </li>
                        <li><a href="!#"> Coinbase </a></li>
                        <li><a href="!#"> Commerce </a></li>
                        <li><a href="!#"> Custody</a></li>
                        <li><a href="!#"> Earn </a></li>
                        <li><a href="!#"> Pro </a></li>
                        <li><a href="!#"> USD Coin</a></li>
                        <li><a href="!#"> Wallet</a></li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li id="heading"> Learn </li>
                        <li><a href="!#"> Buy Bitcoin </a></li>
                        <li><a href="!#"> Buy Bitcoin Cash </a></li>
                        <li><a href="!#"> Buy Eutherium</a></li>
                        <li><a href="!#"> Buy LiteCoin </a></li>
                        <li><a href="!#"> Buy XRP </a></li>
                        <li><a href="!#"> Supported Countries</a></li>
                        <li><a href="!#"> Status</a></li>
                        <li><a href="!#"> Taxes </a></li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li id="heading">Company </li>
                        <li><a href="!#"> About </a></li>
                        <li><a href="!#"> Affiliate </a></li>
                        <li><a href="!#"> Careers </a></li>
                        <li><a href="!#"> Patners </a></li>
                        <li><a href="!#"> Press </a></li>
                        <li><a href="!#"> Legal & Privacy</a></li>
                        <li><a href="!#">Support </a></li>
                        
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li id="heading">Social </li>
                        <li><a href="!#"> Blog </a></li>
                        <li><a href="!#"> Twitter </a></li>
                        <li><a href="!#"> FaceBook</a></li>
                        
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default FooterElement;