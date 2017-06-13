import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import UsageCategorySlider from '../UsageCategorySlider';
import SmsUsageCard from '../SmsUsageCard';
import DataUsageCard from '../DataUsageCard';
import VoiceUsageCard from '../VoiceUsageCard';
import UsageCategoryTabs from '../UsageCatgoryTabs';
import config from '../config.yaml';

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

    render() {
        const sliderItems = config.usageCards;
        const sliderComponents = this.getSliderComponents(sliderItems);

        return (
            <div>
                <UsageCategorySlider slides={sliderComponents}/>
            </div>
        );
    }
}

export default UsageCard;
