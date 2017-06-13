import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';

class VoiceUsageCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <CircularProgressbar percentage={100} />
            </div>
        );
    }
}

export default VoiceUsageCard;



