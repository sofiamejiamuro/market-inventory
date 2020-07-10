//entire package
import React from 'react';
//it is just needed one package 'render'
import { render }from 'react-dom';
//import { Component } from 'react';
import StorePicker from './components/StorePicker.js';
import App from './components/App.js';
import './css/style.css';


//render method takes two arguments(JSX,the mounting point)
render(<App/>, document.querySelector('#main'));
