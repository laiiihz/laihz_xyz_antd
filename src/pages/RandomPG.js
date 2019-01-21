import React ,{Component}from 'react';
import {Icon} from 'antd' ;
import QueueAnim from 'rc-queue-anim';

const face=['smile','frown','meh','bulb',
            'star','heart','eye','like','rocket'];
const color=['black','white','#eb2f96','#52c41a','pink','green'];
class RandomPG extends Component{
    render() {
        let randomNum=parseInt(Math.random()*9);
        let colorRandom=parseInt(Math.random()*6);
        console.log(color[colorRandom]);
        console.log(face[randomNum]);
        return (
            <QueueAnim delay={300} className="queue-simple">
            <div style={{textAlign:'center',marginTop:64,width:'100%'}} >
                <Icon
                    type={face[randomNum]}
                    style={{fontSize:300}}
                    theme="twoTone"
                    twoToneColor={color[colorRandom]}/>
            </div>
            </QueueAnim>

        );

    }
}

export default RandomPG;

