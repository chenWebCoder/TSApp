import React from 'react';
import logo from '../../statics/logo.svg';
import { Counter } from '../Counter';
import * as Style from './style.scss';

const Home: React.FC = () => {
    return (
        <div className="app">
            <header className={Style.appHeader}>
                <img src={logo} className={Style.appLogo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={Style.appLink}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More React
                </a>
                <Counter />

            </header>
        </div>
    );
};

export { Home };
