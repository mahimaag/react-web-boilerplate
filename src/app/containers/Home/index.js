/**
 * Created by intelligrape on 5/6/17.
 */

import React, { Component } from 'react';
// import OwlSlider from "../OwlSlider"
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import UsageCard from '../../components/UsageCard';
import Tabs from '../../components/Menu'
import MobileListPanel from '../../components/MobileListPanel'
import { getUserAccount, getAccountType } from './action';
import TravelPass from '../../components/TravelPass';
import CurrentBill from '../../components/CurrentBill';
import Greeting from '../../components/GreetingCard';
import NearestStore from '../../components/NearestStore';
import uiConfig from './config.yaml';

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

//Data for the Menu Items
const data = {
    points: {
      total: [
        { id: 1, name: 'Home', fontIcon: 'home', subMenu:[{}] , isShow:true, accountType:['P', 'H', 'I', 'T']},
        { id: 2, name: 'My profile', fontIcon: 'user', subMenu:[{id:101, name:"Test menu Sub 1", fontIcon:"home"},{id:102, name:"Test menu Sub 5", fontIcon:"home"}], isShow:true, accountType:['P', 'I', 'T']},
        { id: 3, name: 'My Usage', fontIcon: 'pie-chart', subMenu:[{}], isShow:true, accountType:['P', 'H', 'I', 'T']  },
        { id: 4, name: 'Bills and Payments', fontIcon: 'credit-card-alt', subMenu:[{}], isShow:true, accountType:['T']  },
        { id: 5, name: 'Plans And Add-Ons', fontIcon: 'mobile', subMenu:[{id:103, name:"Test menu Sub 72", fontIcon:"home"}], isShow:true, accountType:[ 'I', 'T']  },
        { id: 6, name: 'My Balance and Top Up', fontIcon: 'bar-chart', subMenu:[{id:104, name:"Test menu Sub 42", fontIcon:"home"}], isShow:true , accountType:[ 'I', 'T'] },
        { id: 7, name: 'Loyalty Points', fontIcon: 'gift', subMenu:[{id:105, name:"Test menu Sub 12", fontIcon:"home"}], isShow:true, accountType:['P', 'H', 'I', 'T']  },
        { id: 8, name: 'Store', fontIcon: 'shopping-basket', subMenu:[{id:106, name:"Test menu Sub 32", fontIcon:"home"}], isShow:true, accountType:['P', 'H', 'I', 'T']  }
      ]
    }
  }



const AvailableComponents = {
    Greeting: {
        componentName: Greeting,
        requiredProps: ['user']
    },
    UsageCard: {
        componentName: UsageCard,
        requiredProps: ['tabs']
    },
    CurrentBill: {
        componentName: CurrentBill,
        requiredProps: ['user']
    },
    NearestStore: {
        componentName: NearestStore,
        requiredProps: ['user']
    },
    TravelPass: {
        componentName: TravelPass,
        requiredProps: ['user']
    }
}
class Home extends Component {

    // constructor for the props
    constructor(props) {
      super(props);
      this.state = { };
      this.props.dispatch(getUserAccount());
      }

    //Get the default state
    getInitialState (){
     return {
       selectedMobilePanelId: 1,
       selectedPanelAccountType:['P', 'H', 'I', 'T']
     }
   }

     //Update the state from any of the components
   changeFirst (newValue) {
     this.setState({
       selectedMobilePanelId: newValue.selectedPanelTabId,
       selectedPanelAccountType:newValue.selectedPanelAccountType
     });
     this.props.dispatch(getAccountType(newValue.selectedPanelTabId));
   }

    render() {
        if(this.props.account.isFetching){
            return (
                <div>
                    Please wait while we are loading your account information.
                </div>
            )
        }
        return (
          <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Tabs data={ data }
                    selectedPanelAccountType={this.state.selectedPanelAccountType}  //Get the account pannel type
                    changeFirst={this.changeFirst.bind(this)}                       //Update the account pannel type
                    />

                <MobileListPanel data={this.props.account.detail}
                    selectedPanelAccountType={this.state.selectedPanelAccountType}  //Get the account pannel type
                    changeFirst={this.changeFirst.bind(this)}                       //Update the account pannel type
                    />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6">
                            {
                                uiConfig.cards
                                    .filter((cardConfig, index) => index%2 == 0)
                                    .map((cardConfig, index) => {
                                        const CardComponent = AvailableComponents[cardConfig.cardName].componentName;
                                        return (
                                            <CardComponent  tabs={tabContent} 
                                                            user={this.props.user} 
                                                            key={index}
                                            />
                                        )
                                    })
                            }
                           
                        </div>
                        <div className="col-md-6">
                            {
                                uiConfig.cards
                                    .filter((cardConfig, index) => index%2 != 0)
                                    .map((cardConfig, index) => {
                                        const CardComponent = AvailableComponents[cardConfig.cardName].componentName;
                                        return (
                                            <CardComponent  tabs={tabContent} 
                                                            user={this.props.user} 
                                                            key={index}
                                            />
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
//  <Greeting user={this.props.user}/>
//                             <UsageCard tabs={tabContent}/>
//                             <TravelPass />
const mapStateToProps = (state) => {
    return {
        user: state.user,
        account: state.account
    }
};

const mapDispatchToProps = (dispatch) => ({
    // getHomeContent: (pageOffset) => dispatch(getHomeContent(pageOffset)),
});

const HomeContainer = connect(mapStateToProps)(Home);
export default HomeContainer;
