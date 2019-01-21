import React ,{Component}from 'react';
import {Divider,Layout} from 'antd';
const {Footer}=Layout;

class FooterMe extends Component{
    render() {
        return (
            <div>
               <Divider/>
                <Footer style={{ textAlign: 'center' }}>
                    ©2019 laihz using Ant Design
                </Footer>
            </div>
        );
    }
}

export default FooterMe;