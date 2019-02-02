import React ,{Component}from 'react';
import {Map} from 'react-amap';

class MapMe extends  Component{
    render() {
        const plugins = [
            'Scale',
            'OverView',
            'ControlBar', // v1.1.0 新增
            {
                name: 'ToolBar',
                options: {
                    visible: true,  // 不设置该属性默认就是 true
                    onCreated(ins){
                        console.log(ins);
                    },
                },
            }
        ]
        return (
                <div style={{width: '100%', height: '800px'}}>
                    <Map amapkey={'e254b540cb0c6dea06fbc20e42738a70'} plugins={plugins}/>
                </div>
        );
    }
}

export default MapMe;