import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import UsageCategorySlider from '../UsageCategorySlider';
import UsageCategoryCard from '../UsageCategoryCard';
import config from '../config.yaml';
import { formatDate } from '../../../utils/common';
import AwareXButton from '../AwareXButton';


const ProgressBarTypes = {
    Circular: 'Circular'
}

class UsageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    getSlides(items){
        // Todo: Styles will be part of configuration.
        return items.map( (tab, index) => {
            if( tab.uiControls.progressBarType == ProgressBarTypes.Circular){
                console.log('dsdsds', index);
                return (
                    <div key={index}>
                        <UsageCategoryCard data={tab}/>
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
