import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './title';
import Main from './main';
import Second from './second';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<Second />, document.getElementById('second'));
registerServiceWorker();
