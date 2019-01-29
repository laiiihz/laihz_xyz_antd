import React, { Component } from 'react';
import './App.css';
import {Button, Drawer, Layout,Icon} from 'antd';
import Navi from "../modules/Navigate"
import BackTopButton from "../modules/SomeBlock";
import {Route} from 'react-router-dom';
import 'rc-texty/assets/index.css';
import Home from "./Home";
import Smirror from "./ss-mirror";
import FooterMe from "../modules/Footer";
import {Link,Switch} from 'react-router-dom';
import RandomPG from './RandomPG';
import Page404 from "./P404";

const {
  Header,
}=Layout;







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
                        <Route component={Page404}/>
                    </Switch>
                </div>
                <FooterMe/>
            </Layout>
        );
    }
}

export default App;
