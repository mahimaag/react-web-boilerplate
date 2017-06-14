import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../Home';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage';
import styles from './style.scss';

class Main extends Component{
    render(){
        return (<div>
           <Header/>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" component={Home}/>
            </Switch>
            <Footer/>
        </div>)
    }
}

export default Main;
