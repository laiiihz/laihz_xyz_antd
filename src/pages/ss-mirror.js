import React ,{Component} from 'react';
import {Col, Layout, Row, Table, Tag,Button} from "antd";
import Texty from 'rc-texty';
const {Column}=Table;

const data=[{
    key:'1',
    platform:'Windows',
    name:<a href="https://github.com/shadowsocks/shadowsocks-windows">shadowsocks-windows</a>,
    tag: ['.exe'],
    download:<Button href="../files/s.exe" htmlType={"button"} type="primary">下载</Button>

},{
    key:'2',
    platform:'Android',
    name:<a href="https://github.com/shadowsocks/shadowsocks-android">shadowsocks-android</a>,
    tag: ['.apk','5.0+'],
    download:<Button href="../files/s.apk" htmlType={"button"} type="primary">下载</Button>

},{
    key:'3',
    platform:'Linux',
    name:<a href="https://github.com/shadowsocks/shadowsocks-qt5">shadowsocks-qt5</a>,
    tag: ['.AppImage','qt5'],
    download:<Button href="../files/s.AppImage" htmlType={"button"} type="primary">下载</Button>

},{
    key:'4',
    platform:'Linux',
    name:<a href="https://github.com/shadowsocks/shadowsocks">shadowsocks</a>,
    tag: ['cli'],
    download:<Button disabled htmlType={"button"} type="primary">下载</Button>

},{
    key:'5',
    platform:'ios',
    name:<a href="https://itunes.apple.com/cn/app/detour-%E4%B8%80%E6%AC%BE%E4%BD%8E%E8%B0%83%E5%88%B0%E5%AE%B6%E7%9A%84%E5%8F%8Cs%E5%AE%A2%E6%88%B7%E7%AB%AF/id1260141606?mt=8">Detour</a>,
    tag: ['ios'],
    download:<Button href="https://itunes.apple.com/cn/app/detour-%E4%B8%80%E6%AC%BE%E4%BD%8E%E8%B0%83%E5%88%B0%E5%AE%B6%E7%9A%84%E5%8F%8Cs%E5%AE%A2%E6%88%B7%E7%AB%AF/id1260141606?mt=8"
                     type="primary"
                     htmlType={"button"}>下载</Button>

}];
class Smirror extends Component{
    render() {
        return (
            <Layout>
                <div>
                    <Row>
                        <Col span={3}/>
                        <Col span={18}>
                            <span style={{fontSize:100}}><Texty>Shadowsocks Get √</Texty></span>
                            <Table dataSource={data}>
                                <Column
                                    title={"平台"}
                                    dataIndex={"platform"}
                                    key={"platform"}
                                />
                                <Column
                                    title={"名称"}
                                    dataIndex={"name"}
                                    key={"name"}
                                />
                                <Column
                                    title={"下载"}
                                    dataIndex={"download"}
                                    key={"download"}
                                />
                                <Column
                                    title={"标签"}
                                    dataIndex={"tag"}
                                    key={"tag"}
                                    render={tag=>(
                                        <span>
                                            {tag.map(tag=><Tag color={"blue"} key={{tag}}>{tag}</Tag>)}
                                        </span>
                                    )}
                                />

                            </Table>
                        </Col>
                        <Col span={3}/>
                    </Row>
                </div>

            </Layout>
        );
    }
}
export default Smirror;