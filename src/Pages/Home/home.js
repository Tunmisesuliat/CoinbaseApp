import React from 'react';
import Navigation from '../../Components/Navigation';
import FooterElement from '../../Components/Footer';
import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Tab from '../../Components/Table';



class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {show:false};
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal(){
        this.setState({show:true});
    }

    hideModal(){
        this.setState({show:false});
    }


    render(){
        


    return(
        <div id="head">
            {/* <div id="nav-wrap" sticky="top"> */}
            <Navigation handleClick={this.showModal}/>
            {/* </div> */}
            <div id="wrapper">
                <div bg="primary" id="jumbotron" className="jumbotron jumbotron-fluid" style={{backgroundColor:"blue"}}>
                    <div className="container">
                        <Modal id="modal" size="md" dialogClassName="modal-80h" className="modal" show={this.state.show} handleClose={this.hideModal} >
                            <Modal.Header onClick={this.hideModal}  closeButton >
                                <Modal.Title>Create Account</Modal.Title>
                            </Modal.Header>
                            <Form inline id="inline-form">
                                <Modal.Body>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Group >
                                            <Form.Label>First Name</Form.Label>
                                            
                                            <Form.Control type="text" placeholder="Enter First Name" />
                                        </Form.Group>
                                    </Col>

                                    <Col xs={6}>
                                        <Form.Group>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col xs={12}>
                                <Form.Group id="group" >
                                    <Form.Label id="label" >Email Address</Form.Label>
                                    <Form.Control id="content" type="email" placeholder="name@example.com" />
                                </Form.Group>
                                </Col>
                                </Row>

                                <Form.Group id="group" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control id="content" type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group id="group" >
                                    
                                    <Form.Check type="checkbox" label="By continuing, i certify that i am 18years of age,and i agree to the user agreement, and privacy policy" />
                                </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button   >Submit</Button>
                                <Button onClick={this.hideModal}  >Close</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                        <span  ><h1><strong id="text-buy">Buy and sell cryptocurrency</strong> </h1></span>
                        <span><h3 id="text-coin"> Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</h3></span>
                        <span>
                            <Form inline id="inline-form">
                                <input size="xl" id="email" type="email" placeholder="Email address" className="mr-sm-2" style={{width:"400px"}} ></input>
                                <Button onClick={this.showModal} id="email" >Get started</Button>
                            </Form>
                        </span>
                        <div id="tab" >
                        <Tab />
                        </div>
                    </div>
                    
                </div>
                
            </div>

                <section id="main">
                    <div className="container container-fluid"> 
                        <Row id="earn" >
                            <Col xs={12} md={5} lg={5} id="col-1">
                                <span><h1>Earn up to $130 worth of crypto</h1></span>
                                <span><p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p></span>
                                <Button>Start Earning</Button>
                            </Col>
                            <Col xs={12} md={7} lg={7}>
                                <div  id="card-wrapper">

                                    <div id="card-cont">
                                        <div id="grid-card" className="card border-light">
                                            <span id="card-data">
                                            <img id="one" className="img-currency" alt="img" src={require("../../Assets/images/dai.png")} style={{width:"60px", height:"50px" }} />
                                            <h4 id="one">DAI</h4>
                                            <h4 id="one">DAI</h4>
                                            </span>
                                            <span id="card-digits"><p>Earn $20 DAI</p></span>
                                        </div>

                                        <div id="grid-card" className="card border-light">
                                        <span id="card-data">
                                            <img id="one" className="img-currency" alt="img" src={require("../../Assets/images/eos.png")} />
                                            <h4 id="one">EOS</h4>
                                            <h4 id="one">EOS</h4>
                                        </span>
                                            <span id="card-digits"><p>Earn $20 DAI</p></span>
                                        </div>

                                        <div id="grid-card" className="card border-light">
                                        <span id="card-data">
                                            <img id="one"  className="img-currency" alt="img" src={require("../../Assets/images/stellar.svg")} />
                                            <h4 id="one">Stellar</h4>
                                            <h4 id="one">Lumens</h4>
                                            <h4 id="one">XLM</h4>
                                            </span>
                                            <span id="card-digits"><p>Earn $20 DAI</p></span>
                                        </div>

                                        <div id="grid-card" className="card border-light">
                                        <span id="card-data">
                                            <img id="one" className="img-currency" alt="img" src={require("../../Assets/images/bat.svg")} />
                                            <h4 id="one">BAT</h4>
                                            <h4 id="one">BAT</h4>
                                            </span>
                                            <span id="card-digits"><p>Earn $20 DAI</p></span>
                                        </div>

                                    </div>

                                </div>
                            </Col>
                            
                        </Row>
                    </div>
                </section>

                <section >
                    <div id="portfolio" className="container container-fluid">
                        <span>
                            <h1 id="portfolio-head">Create your cryptocurrency portfolio today</h1>
                        </span>
                        <span>
                            <p id="portfolio-text">Coinbase has a variety of features that make it the best place to start trading</p>
                        </span>
                    </div>
                </section>

            <section>
                <div id="chart-wrapper" className="container container-fluid">
                    <Row>
                        <Col xs={12} md={4} >
                            <div id="text-image">
                            <img id="small" src={require("../../Assets/images/chart.png" )}alt="img" />
                            <dl>
                                <dt><strong id="strong" >Manage your portfolio</strong></dt>
                                <dd id="dd">Buy and sell popular digital currencies, keep track of them in the one place.</dd>
                            </dl>
                            </div>

                            <div id="text-image">
                            <img id="small" src={require("../../Assets/images/chart.png" )}alt="img" />
                            <dl>
                                <dt><strong id="strong">Recurring buys</strong></dt>
                                <dd id="dd">Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</dd>
                            </dl>
                            </div>

                            <div id="text-image">
                            <img id="small" src={require("../../Assets/images/chart.png" )}alt="img" />  
                            <dl>
                                <dt><strong id="strong">Vault protection</strong></dt>
                                <dd id="dd">For added security, store your funds in a vault with time delayed withdrawals.</dd>
                            </dl>
                            </div>

                            <div id="text-image">
                            <img id="small" src={require("../../Assets/images/chart.png" )}alt="img" />
                            <dl>
                                <dt><strong id="strong">Mobile apps</strong></dt>
                                <dd id="dd">Stay on top of the markets with the Coinbase app for Android or iOS.</dd>
                            </dl>
                            </div>
                        </Col>
                        <Col xs={12} md={8}> 
                            <div className="container-fluid img-fluid bg-responsive" id="chart-image" >
                                {/* <img className="img-responsive" alt="img" src="../.././Assets/images/portfolio.jpg" style={{width:"100%", height:"100%"}}/> */}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                <div>
                    <h1><strong id="crypto-text1">The most trusted cryptocurrency platform</strong></h1>
                    <p id="crypto-text2">Here are a few reasons why you should choose Coinbase</p>
                </div>
            </section>

            <section>
                <div id="bottom" className="container container-fluid">
                    <Row>
                        <Col>
                            <div id="bottom-list">
                            <img id="img-small2" src={require("../../Assets/images/chart.png" )}alt="img" />
                                <h3 id="secure1">Secure storage</h3>
                                <p id="secure2">We store the vast majority of the digital assets in secure offline storage.</p>
                                <a id="secure3" href="!#">Learn more> </a>
                            </div>
                        </Col>
                        <Col>
                            <div id="bottom-list">
                            <img id="img-small2" src={require("../../Assets/images/chart.png" )}alt="img" />
                                <h3 id="secure1">Protected by insurance</h3>
                                <p id="secure2">Cryptocurrency stored on our servers is covered by our insurance policy.</p>
                                <a id="secure3" href="!#">Learn more> </a>
                            </div>

                        </Col>
                        <Col>
                        <div id="bottom-list">
                        <img id="img-small2" src={require("../../Assets/images/chart.png" )}alt="img" />
                                <h3 id="secure1">Industry best practices</h3>
                                <p id="secure2">Coinbase supports a variety of the most popular digital currencies.</p>
                                <a id="secure3" href="!#">Learn more> </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="details">
                <div  className="container container-fluid">
                    <Row id="row">  
                        <Col id="col" md={"auto"} xs={12}>
                            <div>
                            <h1><strong>$150B+</strong></h1>
                            <p>Cryptocurrency exchanged</p>
                            </div>
                        </Col>
                        <Col id="col" md={"auto"} xs={12}>
                            <h1><strong>102</strong></h1>
                            <p>Countries supported</p>
                        </Col>
                        <Col id="col" md={"auto"} xs={12}>
                            <h1><strong>30M+</strong></h1>
                            <p>Customers Served</p>
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="started">
                <article id="article">
                    <h1 id="start-head">Get started in a few minutes</h1>
                    <p id="start-p"> Coinbase supports a variety of the most popular digital currencies.</p>
                </article>
                <div id="icons" >
                    <div>
                        <img id="img-small" src={require("../../Assets/images/chart.png")} alt="img" />
                        <p>Create an account</p>
                    </div>
                    <hr style={{width:"20%"}} />
                    <div>
                        <img id="img-small" src={require("../../Assets/images/chart.png" )}alt="img" />
                        <p>Create an account</p>
                    </div>
                    <hr style={{width:"20%"}} />
                    <div>
                        <img id="img-small" src={require("../../Assets/images/chart.png")} alt="img" />
                        <p>Create an account</p>
                    </div>
                </div>
            </section>

            <section id="footer-image" >
                
            </section>

            <div id="footer"> 
            <FooterElement />
            </div>

        </div>
    );
}
}

export default Home;
