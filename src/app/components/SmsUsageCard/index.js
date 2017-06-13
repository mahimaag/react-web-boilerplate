import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';

class SmsUsageCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <CircularProgressbar percentage={30} />
            </div>
        );
    }
}

export default SmsUsageCard;


