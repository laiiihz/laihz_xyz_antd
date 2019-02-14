import React , {Component} from 'react';
import {Button,Card} from 'antd';
import QueueAnim from 'rc-queue-anim';

const webSites={
    SearchEngine:{
        Baidu:'https://baidu.com',
        Google:'https://google.com',
        Bing:'https://cn.bing.com/',
        Yahoo:'https://www.yahoo.com/',
        Yandex:'http://www.yandex.ru/',
        DuckDuckGo:'https://www.duckduckgo.com'

    },
    DeveloperWeb:{
        Android:'http://developers.android.google.cn/',
        VScode:'https://code.visualstudio.com/',
        VSIDE:'https://visualstudio.microsoft.com/',
        Jetbrains:'https://www.jetbrains.com/',
        StackOverFlow:'https://stackoverflow.com',
        Github:'https://github.com/',
        V2EX:'https://www.v2ex.com/',
        segmentfault:'https://segmentfault.com'
    },
    LinuxDistribution:{
        Manjaro:'https://manjaro.org/',
        Ubuntu:'https://www.ubuntu.com',
        LinuxMint:'https://www.linuxmint.com/',
        Elementary:'https://elementary.io/',
        Debian:'https://www.debian.org/',
        Fedora:'https://getfedora.org/',
        OpenSUSE:'https://www.opensuse.org/',
        LinuxFromScratch:'http://www.linuxfromscratch.org/',
        CentOS:'https://www.centos.org/',
        ArchLinux:'https://www.archlinux.org/',
        Deepin:'https://www.deepin.org/',
        Kali:'https://www.kali.org/'

    },
    RepoMirror:{
        TunaMirror:'https://mirrors.tuna.tsinghua.edu.cn/',
        ZJUMirror:'http://mirrors.zju.edu.cn/',
        USTCMirror:'http://mirrors.ustc.edu.cn/',
        AliMirror_OPSX:'https://opsx.alibaba.com/mirror',
        NeteaseMirror:'http://mirrors.163.com/',

    },
    Design:{
        Unsplash:'https://unsplash.com/',
        DeviantArt:'https://www.deviantart.com/',
        HampusOlsson:'http://www.hampusolsson.com/'

    },
    FrontEnd:{
        IconFont:'http://www.iconfont.cn/',
        AntDesign:'https://ant.design',
        MaterialCSS:'https://materializecss.com/',
        LayUI:'https://www.layui.com/',
        ReactJS:'https://reactjs.org/',
        FluentDesign:'https://www.microsoft.com/design/fluent/',
        WeDesign:'https://wechat.design/'
    },
    Website:{
        OtpTool:'https://otp.landian.la/zh-cn/',
        Appinn:'https://www.appinn.com/',
        Iplaysoft:'https://www.iplaysoft.com/',
        Coolapk:'http://www.coolapk.com/',
    },
    Movies:{
        Zimuzu:'http://www.zimuzu.tv/',
        RARbg:'https://rarbg.is/',
        SubHD:'http://subhd.com/',
        Zimuku:'https://www.zimuku.cn/'
    },
    OJ:{
        PAT:'https://www.patest.cn/',
        LeetcodeCN:'https://www.leetcode-cn.com/',
        Luogu:'https://www.luogu.org/'
    },
    Funny:{
        ImageToImageDemo:'https://affinelayer.com/pixsrv/',
        Arkadia:'https://arkadia.xyz/',
        EelSlap:'http://eelslap.com/'
    },
    Spirit:{
        OffTheAir:'https://www.adultswim.com/videos/off-the-air',
        ChromeExperiment:'https://experiments.withgoogle.com/'
    },
    Goods: {
        Ikea: 'https://www.ikea.cn/cn/zh/',
        Decathlon: 'https://www.decathlon.com.cn/',
        Mi: 'https://www.mi.com/'
    },
};

class ButtonGen extends Component{
    
    render() {
        let item=[];
        let web=webSites[Object.keys(webSites)[this.props.no]];
        console.log(web);
        for (let i=0;i<this.props.size;i++){
            let hrefMe=web[Object.keys(web)[i]];
            item.push(
                    <Button
                        key={Object.keys(web)[i]}
                        style={{marginLeft:10,mariginTop:10}}
                        type={"primary"}
                        href={hrefMe} htmlType={"button"}>
                        {Object.keys(web)[i]}
                    </Button>)
        }
        return (
            item
        );
    }
}


class CardGen extends Component{
    render() {
        let item=[];
        for(let i=0;i<Object.keys(webSites).length;i++){
            console.log(Object.keys(webSites)[i]);
            let titleMe=Object.keys(webSites)[i];
            let siteSize=Object.keys(webSites[Object.keys(webSites)[i]]).length;
            item.push(
                <QueueAnim delay={600} className="queue-simple">
                <div key={Object.keys(webSites)[i]}>
                <Card title={titleMe} id={titleMe} key={titleMe}>
                    <ButtonGen  size={siteSize} no={i}/>
                </Card>
                </div>
                </QueueAnim>);
            console.log();
            item.push(<br/>);
        }
        return(
          item
        );
    }
}

class MainContent extends Component{
    render() {
        return(
            <div style={{marginTop:20}}>
                <CardGen/>
            </div>
        );
    }
}

export default MainContent;