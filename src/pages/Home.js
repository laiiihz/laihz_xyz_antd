import React ,{Component}from 'react';

import {Alert, Col, Row} from "antd";
import TitleBarMe from "../modules/BigTitle";
import MainContent from "../modules/Content";
import AnchorMe from '../modules/Anchor';

class Home extends Component{
    render() {
        return (
            <div>
                <Row>
                    <Col span={18}>
                        <Row>
                            <Col span={3}/>
                            <Col span={18}>
                                <TitleBarMe/>
                            </Col>
                            <Col span={3}/>
                        </Row>
                    </Col>
                    <Col span={6}/>

                </Row>
                <Row>
                    <Col span={18} >
                        <Row>

                            <Col span={3}/>
                            <Col span={18}>
                                <Alert
                                    message="Welcome to laihz.xyz"
                                    description="zzzzzzz"
                                    type="info"
                                    showIcon
                                    closable
                                />
                                <MainContent/>
                                <br/>

                            </Col>
                            <Col span={3}/>
                        </Row>

                    </Col>
                    <Col span={6}>
                        <AnchorMe/>

                    </Col>
                </Row>
            </div>
            );
    }
}

export default Home;