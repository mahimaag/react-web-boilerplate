import React,{Component} from 'react';
import ApplicationHeader from '../../components/ApplicationHeader';
import UserHeader from '../../components/UserHeader';
import Footer from '../../components/Footer';
import Home from '../Home';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage';
import styles from './style.scss';

class Main extends React.Component{
    render(){
        return (<div>
           <ApplicationHeader/>
           <UserHeader />
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" component={Home}/>
            </Switch>
            <Footer/>
        </div>)
    }
}

export default Main;
