import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import UsageCategorySlider from '../UsageCategorySlider';
import SmsUsageCard from '../SmsUsageCard';
import DataUsageCard from '../DataUsageCard';
import VoiceUsageCard from '../VoiceUsageCard';
import UsageCategoryTabs from '../UsageCatgoryTabs';
import config from '../config.yaml';
import { formatDate } from '../../../utils/common';


const ProgressBarTypes = {
    Circular: 'Circular'
}

class UsageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    getSliderComponents(sliderItems){
        let items;
        items = sliderItems.map((item,index) => {
            if (item) {
                switch (item) {
                    case 'Data':
                        return(
                            <div key={index}>
                                <DataUsageCard/>
                            </div>
                        )
                    case 'Sms':
                        return(
                            <div key={index}>
                                <SmsUsageCard/>
                            </div>
                        )
                    case 'Voice':
                        return(
                            <div key={index}>
                                <VoiceUsageCard/>
                            </div>
                        );
                    default:
                        return null;
                }
            }
        });
        return items;

    }

    getSlides(items){
        // Todo: Styles will be part of configuration.
        return items.map( (tab, index) => {
            if( tab.uiControls.progressBarType == ProgressBarTypes.Circular){
                return (
                    <div className="row" key={index}>
                        <div className="col-md-offset-2 col-md-5">
                            <CircularProgressbar percentage={+tab.completion}/>
                        </div>
                        <div className="col-md-3">
                            <h2 style={{ color: 'black'}}> { tab.displayText } </h2>
                            <h5 style={{ color: 'grey' }}> { tab.details } </h5>
                            <h5 style={{ color: 'grey' }}> { `Update: ${formatDate(tab.updatedOn)}` } </h5>
                            <button > Recharge </button>
                        </div>
                        <div className="col-md-offset-2"></div>

                    </div>
                ) 
            }{
                return ( <div key={index}> 
                            Appropiate ui component not found for {tab.uiControls.progressBarType}. 
                            Report to dev team. 
                        </div>
                    );
            }
        })
    }

    render() {
        // const sliderItems = config.usageCards;
        // const sliderComponents = this.getSliderComponents(sliderItems);
        const slides = this.getSlides(this.props.tabs);
        console.log('Slides are -->', slides);
        return (
            <div>
                {
                    <UsageCategorySlider slides={slides} data={this.props.tabs}/>
                }
            </div>
        )

        // return (
        //     <div>
        //         <UsageCategorySlider slides={sliderComponents}/>
        //     </div>
        // );
    }
}

export default UsageCard;
