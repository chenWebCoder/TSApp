import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import App from '@views/Home';
import * as serviceWorker from './serviceWorker';
import { GlobalStore } from './store/globalStore';
import './index.scss';

// mobx 中的数据只能在 mobx 的 action 中进行修改
configure({ enforceActions: 'observed' });

ReactDOM.render(
    <Provider
        globalStore={new GlobalStore()}
    >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
