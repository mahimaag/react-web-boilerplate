import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import AwareXButton from '../AwareXButton';
import { formatDate } from '../../../utils/common';

class UsageCategoryCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const cardData = this.props.data;
        return (
            <div className="row">
                <div className="col-md-offset-2 col-md-5">
                    <CircularProgressbar percentage={+cardData.completion}/>
                </div>
                <div className="col-md-3">
                    <h2 style={{ color: 'black'}}> { cardData.displayText } </h2>
                    <h5 style={{ color: 'grey' }}> { cardData.details } </h5>
                    <h5 style={{ color: 'grey' }}> { `Update: ${formatDate(cardData.updatedOn)}` } </h5>
                    <AwareXButton type="attention" text="Recharge"/>
                </div>
                <div className="col-md-offset-2"></div>

            </div>
        );
    }
}

UsageCategoryCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default UsageCategoryCard;

