import React, { Component } from 'react';
import './App.css';
import {Button, Drawer, Layout, Icon, Modal} from 'antd';
import Navi from "../modules/Navigate"
import BackTopButton from "../modules/SomeBlock";
import {Route} from 'react-router-dom';
import 'rc-texty/assets/index.css';
import Home from "./Home";
import Smirror from "./ss-mirror";
import  MapMe from "./Map";
import FooterMe from "../modules/Footer";
import {Link,Switch} from 'react-router-dom';
import RandomPG from './RandomPG';
import Page404 from "./P404";
import QRCode from "qrcode.react";
import MovieDisplay from "./MovieDisp";

const {
  Header,
}=Layout;


class ModalNav extends  Component{
    state={visible:false};
    showModal=()=>{
        this.setState({
            visible:true,
        })
    };
    handleOk=(e)=>{
        this.setState({visible:false,})
    };
    handleCancel=(e)=>{
        this.setState({visible:false})
    };

    render() {
        return (
            <div>
                <Button shape="circle" size={"large"} htmlType={'button'} type="primary " onClick={this.showModal} icon={"qrcode"}/>
                <Modal
                    title={"分享此页面"}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <QRCode value={"http://laihz.xyz"}/>
                </Modal>
            </div>
        );
    }
}




class App extends Component {
    state={
        visible:false,
    };

    showDrawer=()=>{
        this.setState({
            visible:true,
        })
    };

    onClose=()=>{
        this.setState({
            visible:false
        })
    };
    render() {
        return (
            <Layout >
                <BackTopButton/>
                <Header >
                    <div>
                    <Button
                        type={"primary"}
                        style={{float:'left',marginRight:20,marginTop:10}}
                        onClick={this.showDrawer} size={"large"}
                        htmlType={"button"}
                    >
                        <Icon type={"bars"} style={{fontSize:32}}/>
                    </Button>
                    <Drawer
                        title="Laihz"
                        placement="left"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        width={128}
                    >

                        <Link to={"/"}>
                            <Button
                            type="primary"
                            shape="circle"
                            icon="home"
                            htmlType={"button"}
                            size={"large"}
                            />
                        </Link>
                        <br/><br/>
                        <ModalNav/>
                        <br/>
                        <Link to={"/ss"} >
                            <Button
                                type="primary"
                                shape="circle"
                                icon="global"
                                htmlType={"button"}
                                size={"large"}
                            />
                        </Link>
                        <br/><br/>
                        <Button
                            type="primary"
                            shape="circle"
                            icon="github"
                            htmlType={"button"}
                            size={"large"}
                            href={"https://github.com/laiiihz"}
                        />
                        <br/><br/>
                        <Link to={"/randompg"} >
                            <Button
                                type="primary"
                                shape="circle"
                                icon="smile"
                                htmlType={"button"}
                                size={"large"}
                            />
                        </Link>
                    </Drawer>
                    </div>
                    <Navi status="main"/>
                </Header>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/ss" component={Smirror}/>
                        <Route path="/randompg" component={RandomPG}/>
                        <Route path="/amap" component={MapMe}/>
                        <Route path="/movie" component={MovieDisplay} />
                        <Route component={Page404}/>
                    </Switch>
                </div>
                <FooterMe/>
            </Layout>
        );
    }
}

export default App;
