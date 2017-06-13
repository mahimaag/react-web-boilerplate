import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from '../ProgressBar';
import AwareXButton from '../AwareXButton';
import {Row, Col} from 'react-bootstrap';

class DataUsageCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Row>
                    <Col sm={6}>
                        <CircularProgressbar percentage={10} />
                    </Col>
                    <Col sm={6}>
                        <AwareXButton type="attention" text="Recharge"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DataUsageCard;

