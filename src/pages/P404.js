import React ,{Component} from 'react';
import Texty from 'rc-texty';
import {Col, Layout,Row,Icon} from 'antd';

class Page404 extends Component{
    render() {
        return (
            <Layout>
              <Row>
                  <Col span={5}>
                      <div style={{marginTop:50,marginLeft:50}}>
                          <Icon type={"loading-3-quarters"} style={{fontSize:200}} spin/>
                      </div>
                  </Col>
                  <Col span={14}>
                      <div>
                          <span style={{fontSize:100}}><Texty delay={300}>404</Texty></span>
                          <span style={{fontSize:100}}><Texty delay={600}>NOT FOUND</Texty></span>
                          <iframe title='eelslap' id='meframe' src ="http://eelslap.com/" width={'100%'} height={'500'} frameBorder='0'>
                              <p>Your browser does not support iframes.</p>
                          </iframe>
                      </div>
                  </Col>
                  <Col span={5}>
                      <div style={{marginTop:50,marginRight:50}}>
                      <Icon type={"smile"} style={{fontSize:200}} spin theme={'twoTone'}/>
                      </div>
                  </Col>
              </Row>
            </Layout>
        );
    }
}

export default Page404;