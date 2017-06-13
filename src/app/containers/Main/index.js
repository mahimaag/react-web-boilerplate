import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../Home';
// import ShowDetail from '../ContentDetail'
// import ViewAll from '../ContentList';
import {Route, Switch} from 'react-router-dom';
// import routes from '../../../routeConfig';
// import {createRoute} from '../../../utils/helper';
import LandingPage from '../LandingPage';

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
