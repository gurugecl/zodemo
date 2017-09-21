import React, { Component } from 'react';
import {Grid,Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Lists from './Components/Lists';
import Features from './Components/Features';
import Links from './Components/Links';
import Tabs from './Components/Tabs';
import Documents from './Components/Documents';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Grid>
              <Row>
                  <Col xs={12} md={12} lg={12} className="tab">
                      <Tabs/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={2} md={2} lg={2} className="fea">
                      <Features/>
                  </Col>
                  <Col xs={5} md={5} lg={5} className="lis">
                      <Lists/>
                  </Col>
                  <Col xs={5} md={5} lg={5} className="doc">
                      <Documents/>
                  </Col>
              </Row>
              <Row>
                  <Col xs={12} md={12} lg={12} className="lin">
                      <Links/>
                  </Col>
              </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
