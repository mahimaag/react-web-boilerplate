import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import AwareXButton from '../AwareXButton';

class DataUsageCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <CircularProgressbar percentage={10} />
                <AwareXButton type="attention" text="Recharge"/>
            </div>
        );
    }
}

export default DataUsageCard;

