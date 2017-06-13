import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';

class DataUsageCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <CircularProgressbar percentage={10} />
            </div>
        );
    }
}

export default DataUsageCard;

