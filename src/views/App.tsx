import * as React from 'react';
import { Button } from 'antd';
// import logo from '../statics/logo.svg';
import * as styles from './style.scss';
// import 'antd/lib/button/style/index.less';

const App: React.FC = () => {
  return (
    <div>
      <div className={styles.content}>React</div>

      <Button type='primary'>
        按钮
      </Button>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
