import * as React from 'react';
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
// import { IGlobalStore } from '../../store/globalStore';

// 这部分是坑点，一开始不知道配置，后发现react-rotuer的4.0版本下需要配置prop的接口
// interface Container extends RouteComponentProps<{}> {
// }

// class Container extends React.Component<Container, {}> {

interface Ip {
    globalStore?: any
}

@inject('globalStore')
@observer
class Counter extends React.Component<Ip> {
    clickBtn = (type: string) => {
        this.props.globalStore.setNum(type);
    }
    render() {
        const { globalStore } = this.props;
        const { num } = globalStore;
        return (
            <React.Fragment>
                <div>当前值：{num}</div>
                <div>
                    <Button
                        onClick={this.clickBtn.bind(this, 'incress')}
                        type='primary'
                        style={{
                            marginRight: '20px'
                        }}
                    >
                        增加
                    </Button>
                    <Button
                        onClick={this.clickBtn.bind(this, 'decress')}
                        type='primary'
                    >
                        减少
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

export { Counter };