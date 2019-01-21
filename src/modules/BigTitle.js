import React ,{Component} from 'react';
import Texty from 'rc-texty';

class TitleBarMe extends Component{
    render() {
        return (
            <div id={"Main"}>
                <span style={{fontSize:100}}><Texty>Laihz</Texty></span>
                <span style={{fontSize:100}}><Texty delay={1000}>Navigator</Texty></span>
            </div>
        );
    }
}

export default TitleBarMe;