/**
 * Created by intelligrape on 5/6/17.
 */

import React, { Component } from 'react';
// import OwlSlider from "../OwlSlider"
import {connect} from 'react-redux';
import UsageCard from '../../components/UsageCard';
// import Rails from '../Rails';
// import {getHomeContent} from './action';
// import { sectionType } from '../../../constants';
// import InfiniteScroll from 'react-infinite-scroll-component';

class Home extends Component {
    componentDidMount() {
        // this.props.getHomeContent(this.props.home.items.length);
    }

    render() {
        return (
            <div>
                <h1> This is home </h1>
                <UsageCard />
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    getHomeContent: (pageOffset) => dispatch(getHomeContent(pageOffset)),
});

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;
