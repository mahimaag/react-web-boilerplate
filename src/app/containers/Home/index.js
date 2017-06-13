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

const tabContent = [
    {
        displayText: 'Voice',
        tabName: 'Calls',
        completion: '50',
        details: '200/400 calls used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'     // should be configurable.
        }
    },
    {
        tabName: 'Data',
        displayText: 'Internet',
        completion: '30',
        details: '30MB/100MB used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    },
    {
        tabName: 'Sms',
        displayText: 'Sms',
        completion: '70',
        details: '70/100 sms used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    },
    {
        tabName: 'Promotion',
        displayText: 'Promotion Text',
        completion: '90',
        details: '90/100 texts used',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    },
    {
        tabName: 'Balances',
        displayText: 'Account',
        completion: '10',
        details: '10/100 Rs remaining',
        updatedOn: Date.now(),
        uiControls: {
            progressBarType: 'Circular'
        }
    }
];

class Home extends Component {
    componentDidMount() {
        // this.props.getHomeContent(this.props.home.items.length);
    }

    render() {
        return (
            <div>
                <h1> This is home </h1>
                <UsageCard tabs={tabContent}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    // getHomeContent: (pageOffset) => dispatch(getHomeContent(pageOffset)),
});

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;
