import React, {Component} from 'react';
//import HeroSlider from './containers/HeroSlider'
import Main from './containers/Main'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Main/>
            </Router>
        );
    }
}


