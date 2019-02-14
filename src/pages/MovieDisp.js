import React ,{Component}from 'react';
import {Col,Row,Card,Icon} from 'antd';
const {Meta}=Card;
const images=[
    {
        img:"http://tu.jstucdn.com/ftp/2018/1015/b25a738186e93fe916b6d9330806d725.jpg",
        title:<span>我是大哥大<br/>Kyou kara Ore wa</span>,
        url:'https://movie.douban.com/subject/30183785/',
        down:'http://www.zimuzu.io/resource/37031',
        hDw:0.72

    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2545472803.webp",
        title:<span>流浪地球<br/>The Wandering Earth</span>,
        url:'https://movie.douban.com/subject/26266893/',
        down:'magnet:?xt=urn:btih:PNZDQV5N2PB5DCZTPOAVW36IPA57JW3X',
        hDw: 1.39
    },
    {
        img:"https://img1.doubanio.com/view/photo/l/public/p2516356597.webp",
        title:<span>大群 第二季<br/> legion season 2</span>,
        url:'https://movie.douban.com/subject/26997532/',
        down:'magnet:?xt=urn:btih:40c6b0b66fe93d8a37625044fb2a39b12e5e21b9&dn=Legion.S02.1080p.AMZN.WEBRip.DDP5.1.x264-NTb%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.46
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2458317546.webp",
        title:<span>大群 第一季<br/>Legion Season 1</span>,
        url:'https://movie.douban.com/subject/26641716/',
        down:'magnet:?xt=urn:btih:e57c8afa2eb8812cced26b08d506cf15fecceec7&dn=Legion.S01.1080p.BluRay.x264-SHORTBREHD%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.5
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2250719361.webp",
        title:<span>黑客军团 第一季<br/>Mr. Robot Season 1</span>,
        url:'https://movie.douban.com/subject/26290409/',
        down:'magnet:?xt=urn:btih:2a5a0cd1c6ef24df73afb120e3fcac845f6a0411&dn=Mr.Robot.S01.1080p.AMZN.WEBRip.DDP5.1.x265-SiGMA%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.33
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2368165385.webp",
        title:<span>黑客军团 第二季<br/>Mr. Robot Season 2</span>,
        url:'https://movie.douban.com/subject/26431328/',
        down:'magnet:?xt=urn:btih:bba9e4ff890e33fac530ec0002f676cabac39f9a&dn=Mr.Robot.S02.1080p.BluRay.x264-SHORTBREHD%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.48
    },
    {
        img:"https://img1.doubanio.com/view/photo/l/public/p2503274118.webp",
        title:<span>黑客军团 第三季<br/>Mr. Robot Season 3</span>,
        url:'https://movie.douban.com/subject/26881131/',
        down:'',
        hDw:1.47
    },
    {
        img:"https://img1.doubanio.com/view/photo/l/public/p2484950038.webp",
        title:<span>朝花夕誓 <br/>さよならの朝に約束の花をかざろう</span>,
        url:'https://movie.douban.com/subject/27083561/',
        down:'magnet:?xt=urn:btih:3e023f1b558c0affbb533ea43dd172fdef467fb2&dn=Maquia.When.the.Promised.Flower.Blooms.2018.JAPANESE.1080p.BluRay.x264-WiKi&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.41
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2418422310.webp",
        title:<span>十三个原因 第一季 <br/>13 Reasons Why Season 1</span>,
        url:'https://movie.douban.com/subject/6284624/',
        down:'magnet:?xt=urn:btih:e609fb8ab7b9e05d2ddd6164a0bd1f2c8c0f2558&dn=13.Reasons.Why.S01.1080p.NF.WEBRip.DD5.1.x264-VLAD%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.48
    },
    {
        img:"https://dyncdn.me/static/20/tvdb/31266_banner_optimized.jpg",
        title:<span>十三个原因 第二季<br/> 13 Reasons Why Season 2</span>,
        url:'https://movie.douban.com/subject/27032347/',
        down:'magnet:?xt=urn:btih:b2616e9b1a49ae1cf1de8337448c8c5f0d637716&dn=13.Reasons.Why.S02.1080p.NF.WEBRip.DD5.1.x264-NTb%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:0.18
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2522138824.webp",
        title:<span>波西米亚狂想曲 <br/>Bohemian Rhapsody</span>,
        url:'https://movie.douban.com/subject/5300054/',
        down:'magnet:?xt=urn:btih:187cb61bc2afc92825862cae88e5846c97b59c66&dn=Bohemian.Rhapsody.2018.BONUS.Complete.Live.Aid.Performance.2160p.BluRay.x265.10bit.SDR.DTS-HD.MA.TrueHD.7.1.Atmos-SWTYBLZ&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.59
    },
    {
        img:"https://dyncdn.me/mimages/316987/poster_opt.jpg",
        title:<span>比利·林恩的中场战事<br/>Billy Lynn's Long Halftime Walk</span>,
        url:'https://movie.douban.com/subject/25983044/',
        down:'magnet:?xt=urn:btih:1a00fb0f9bc6320ffdd7a1704e7f76606c2872d3&dn=Billy.Lynns.Long.Halftime.Walk.2016.1080p.BluRay.x264-GECKOS&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.5
    },
    {
        img:"https://dyncdn.me/mimages/41320/poster_opt.jpg",
        title:<span>星际穿越<br/>Interstellar</span>,
        url:'https://movie.douban.com/subject/1889243/?from=top250',
        down:'magnet:?xt=urn:btih:5a221cd8c67bbe06082ebf75118e62e530ca8e4e&dn=Interstellar.2014.1080p.BluRay.x264-DAA&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.5
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2434009366.webp",
        title:<span>美国众神 第一季<br/>American Gods Season 1</span>,
        url:'https://movie.douban.com/subject/6308210/',
        down:'magnet:?xt=urn:btih:c781cd9b9cc63c66babe1b3249e19fb681bf525d&dn=American.Gods.S01.1080p.AMZN.WEBRip.DDP5.1.x265-SiGMA%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:3.1
    },
    {
        img:"https://img3.doubanio.com/view/photo/l/public/p2455734010.webp",
        title:<span>烟花<br/>打ち上げ花火、下から見るか？横から見るか？</span>,
        url:'https://movie.douban.com/subject/26930504/',
        down:'magnet:?xt=urn:btih:5a7fbd451ef9402228db6c71373a5b19a02dc059&dn=Fireworks.Should.We.See.It.from.the.Side.or.the.Bottom.2017.1080p.BluRay.x264-HAiKU&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:1.41
    },
    {
        img:"https://dyncdn.me/static/20/tvdb/46909_banner_optimized.jpg",
        title:<span>汉尼拔 第一季 Hannibal Season 1 </span>,
        url:'https://movie.douban.com/subject/10539856/',
        down:'magnet:?xt=urn:btih:3a126779be230340cb496110275d0a682d094033&dn=Hannibal.S01.1080p.AMZN.WEBRip.DDP5.1.x265-SiGMA%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:0.14
    },
    {
        img:"awefg",
        title:<span></span>,
        url:'1234',
        down:'magnet:?xt=urn:btih:cf852b325269d15fbe2d228af26ec63151c9890b&dn=Hannibal.S02.1080p.AMZN.WEBRip.DDP5.1.x265-SiGMA%5Brartv%5D&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710&tr=udp%3A%2F%2F9.rarbg.to%3A2710',
        hDw:3.1
    }
];

class MovieDisplay extends Component{
    render() {
        let boxA=[];let boxB=[];let boxC=[];let boxD=[];
        let boxASize=0;let boxBSize=0;
        let boxCSize=0;let boxDSize=0;
        let lessBoxNum=0;
        if(images.length>=4){
            boxA.push(
                <Card
                    hoverable
                    cover={<img src={images[0].img} alt={" "}/>}
                    actions={[
                        <a href={images[0].down}>
                            <Icon type="code" />
                        </a>,
                        <a href={images[0].url}>
                            <Icon type="ellipsis"/>
                        </a>]}
                >
                    <Meta
                        title={images[0].title}
                    />
                </Card>
            );boxASize=images[0].hDw;
            boxB.push(
                <Card
                    hoverable
                    cover={<img src={images[1].img} alt={" "}/>}
                    actions={[
                        <a href={images[1].down}>
                            <Icon type="code" />
                        </a>,
                        <a href={images[1].url}>
                            <Icon type="ellipsis"/>
                        </a>]}
                >
                    <Meta
                        title={images[1].title}
                    />
                </Card>
            );boxBSize=images[1].hDw;
            boxC.push(
                <Card
                    hoverable
                    cover={<img src={images[2].img} alt={" "}/>}
                    actions={[
                        <a href={images[2].down}>
                            <Icon type="code" />
                        </a>,
                        <a href={images[2].url}>
                            <Icon type="ellipsis"/>
                        </a>]}
                >
                    <Meta
                        title={images[2].title}
                    />
                </Card>
            );boxCSize=images[2].hDw;
            boxD.push(
                <Card
                    hoverable
                    cover={<img src={images[3].img} alt={" "}/>}
                    actions={[
                        <a href={images[3].down}>
                            <Icon type="code" />
                        </a>,
                        <a href={images[3].url}>
                            <Icon type="ellipsis"/>
                        </a>]}
                >
                    <Meta
                        title={images[3].title}
                    />
                </Card>
            );boxDSize=images[3].hDw;
        }
        let temp=Math.min(boxASize,boxBSize,boxCSize,boxDSize);
        for(let j=0;j<4;j++){
            if(temp===boxASize)lessBoxNum=0;
            else if(temp===boxBSize)lessBoxNum=1;
            else if(temp===boxCSize)lessBoxNum=2;
            else lessBoxNum=3;
        }
        for(let i=4;i<images.length;i++){
            temp=Math.min(boxASize,boxBSize,boxCSize,boxDSize);
            for(let j=0;j<4;j++){
                if(temp===boxASize)lessBoxNum=0;
                else if(temp===boxBSize)lessBoxNum=1;
                else if(temp===boxCSize)lessBoxNum=2;
                else lessBoxNum=3;
            }

            switch (lessBoxNum) {
                case 0:
                    boxA.push(
                        <Card
                            hoverable
                            cover={<img src={images[i].img} alt={" "}/>}
                            actions={[
                                <a href={images[i].down}>
                                    <Icon type="code" />
                                </a>,
                                <a href={images[i].url}>
                                    <Icon type="ellipsis"/>
                                </a>]}
                        >
                            <Meta
                                title={images[i].title}
                            />
                        </Card>
                    );
                    boxASize+=images[i].hDw;
                    break;
                case 1:
                    boxB.push(
                        <Card
                            hoverable
                            cover={<img src={images[i].img} alt={" "}/>}
                            actions={[
                                <a href={images[i].down}>
                                    <Icon type="code" />
                                </a>,
                                <a href={images[i].url}>
                                    <Icon type="ellipsis"/>
                                </a>]}
                        >
                            <Meta
                                title={images[i].title}
                            />
                        </Card>
                    );
                    boxBSize+=images[i].hDw;
                    break;
                case 2:
                    boxC.push(
                        <Card
                            hoverable
                            cover={<img src={images[i].img} alt={" "}/>}
                            actions={[
                                <a href={images[i].down}>
                                    <Icon type="code" />
                                </a>,
                                <a href={images[i].url}>
                                    <Icon type="ellipsis"/>
                                </a>]}
                        >
                            <Meta
                                title={images[i].title}
                            />
                        </Card>
                    );
                    boxCSize+=images[i].hDw;
                    break;
                case 3:
                    boxD.push(
                        <Card
                            hoverable
                            cover={<img src={images[i].img} alt={" "}/>}
                            actions={[
                                <a href={images[i].down}>
                                    <Icon type="code" />
                                </a>,
                                <a href={images[i].url}>
                                    <Icon type="ellipsis"/>
                                </a>]}
                        >
                            <Meta
                                title={images[i].title}
                            />
                        </Card>
                    );
                    boxDSize+=images[i].hDw;
                    break;
            }

        }

        return (
            <div>
                <Row type="flex" justify="center" align="top" gutter={16}>
                    <Col span={2}/>
                    <Col span={20}><span style={{fontSize:100}}>电影推荐</span></Col>
                    <Col span={2}/>

                    <Col span={2}/>
                    <Col span={5}>
                        {boxA}
                    </Col>
                    <Col span={5}>
                        {boxB}
                    </Col>
                    <Col span={5}>
                        {boxC}
                    </Col>
                    <Col span={5}>
                        {boxD}
                    </Col>
                    <Col span={2}/>

                </Row>
            </div>
        );
    }
}

export default MovieDisplay;