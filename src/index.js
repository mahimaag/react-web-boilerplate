import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app';
import  store from './app/store';
import CustomCaller from './js/custom';
import {Provider} from 'react-redux';
import styles from './scss/app.scss';
import $ from 'jquery';
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap';

window.$ = $;

//Importing Global styles
import './scss/common.scss';

// Create app component
const app = document.querySelector('#app');

// Render main application
render(<Provider store={store}><App/></Provider>, app);

