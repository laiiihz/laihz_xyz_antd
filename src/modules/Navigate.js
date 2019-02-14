import React,{Component} from "react"
import {Icon, Menu, Tag, Input} from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import {Link} from 'react-router-dom';
const {Search}=Input;



class Navi extends Component{
    state={
        current:this.props.status,
    };

    handleClick=(e)=>{
        this.setState({
            current:e.key,
        });
    };


    render(){
        return(
            <Menu
                id={"Nav"}
                theme={"dark"}
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{lineHeight:'64px'}}>

                <MenuItem key={"main"} >
                    <Link to="/"><Icon type={"home"}/>主页</Link>
                </MenuItem>
                <MenuItem
                    key={"ss"}>
                    <Link to="/ss">
                        <Icon type={"global"}/>SS
                    </Link>
                </MenuItem>
                <MenuItem key={"Github"}>
                    <a href="https://github.com/laiiihz"
                    ><Icon type={"github"}/>Github</a>
                </MenuItem>
                <MenuItem
                    key={"map"}>
                    <Link to="/amap">
                        <Icon type="environment" />Map
                    </Link>
                </MenuItem>
                <MenuItem
                    key={"movie"}>
                    <Link to="/movie">
                        <Icon type="video-camera" />Movie
                    </Link>
                </MenuItem>



                <MenuItem style={{float:'right'}} disabled>
                    <Tag color="#f50">preview</Tag>
                </MenuItem>
                <MenuItem style={{float:'right'}} >
                    <Search
                        placeholder="百度搜索"
                        onSearch={value => window.open('https://www.baidu.com/s?&wd='+value)}
                        enterButton
                    />
                </MenuItem>


            </Menu>
        );
    }
}

export default Navi;