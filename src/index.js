import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './title';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Title />, document.getElementById('title'));
registerServiceWorker();
