import React ,{Component} from 'react'
import {Anchor} from "antd";
const {Link}=Anchor;
class AnchorMe extends Component{
    render() {
        return (

                <Anchor
                    style={{zIndex:"1"}}
                >
                    <Link href={"#Nav"} title={" "}/>
                    <Link href={"#Main"} title={" "}/>
                    <Link href={"#SearchEngine"} title={"搜索引擎"}/>
                    <Link href={"#DeveloperWeb"} title={"开发相关"}/>
                    <Link href={"#LinuxDistribution"} title={"Linux发行版"}/>
                    <Link href={"#RepoMirror"} title={"开源镜像仓库"}/>
                    <Link href={"#Design"} title={"设计"}/>
                    <Link href={"#FrontEnd"} title={"前端"}/>
                    <Link href={"#Website"} title={"工具"}/>
                    <Link href={"#Movies"} title={"影片"}/>
                    <Link href={"#OJ"} title={"在线测评"}/>
                    <Link href={"Funny"} title={"异"}/>
                    <Link href={"#Spirit"} title={"情态"}/>
                    <Link href={"#Goods"} title={"好物"}/>
                </Anchor>

        );
    }
}

export default AnchorMe;