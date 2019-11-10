import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tab(){
    return(
        <Card responsive style={{width:"1000px"}}>
            <Table className="table-responsive w-auto "xs={12} md={12} className="">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <th>Trade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>1</span></td>
                        <td>
                            
                                <div id="tab-data">
                                    <img className="img-currency" id="one" alt="img" src={require("../Assets/images/bitcoin.png")} />
                                    <h6 id="one" >Bitcoin</h6>
                                    <h6 id="one">BTC</h6>
                                </div>
                            
                        </td>
                        <td>NGN 3,177,666.77</td>
                        <td>-4.67%</td>
                        <td>1</td>
                        <td>
                            <Button>Buy</Button>
                        </td>
                    </tr>

                    <tr>
                        <td><span>2</span></td>
                        <td>

                                <div id="tab-data">
                                   <img id="one" className="img-currency" alt="img" src={require("../Assets/images/Eutherium.png" )}/>
                                    <h6 id="one">Euthereum</h6>
                                    <h6 id="one">ETH</h6>
                                </div>

                        </td>
                        <td>NGN 65,900.29</td>
                        <td>-2.42%</td>
                        <td>1</td>
                        <td>
                            <Button>Buy</Button>
                        </td>
                    </tr>

                    <tr>
                        <td><span>3</span></td>
                        <td>
                                <div id="tab-data">
                                    <img id="one" className="img-currency" alt="img" src={require("../Assets/images/bitcash.png")} />
                                    <h6 id="one">Bitcoin Cash</h6>
                                    <h6 id="one">BCH</h6>
                                </div>
                        </td>
                        <td>NGN 100,208.84</td>
                        <td>-4.34%</td>
                        <td>1</td>
                        <td>
                            <Button>Buy</Button>
                        </td>
                    </tr>

                    <tr>
                        <td><span>4</span></td>
                        <td>

                                <div id="tab-data" >
                                    <img id="one" className="img-currency" alt="img" src={require("../Assets/images/litecoin.png")} />
                                    <h6 id="one">Litecoin</h6>
                                   <h6 id="one">LTC</h6>
                                </div>
                        </td>
                        <td>NGN 21,417.73</td>
                        <td>-3.71%</td>
                        <td>1</td>
                        <td>
                            <Button>Buy</Button>
                        </td>
                    </tr>
                </tbody>
 
            </Table>
        </Card>
    );
}

export default Tab;