import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import styles from './style.scss';

class AwareXButton extends React.Component {
    render() {
        //const type = this.props.type;
        return (
            <Button className={`${this.props.type ? this.props.type : ''}`} onClick={() => this.props.onClick()}>{this.props.text}</Button>
        );
    }
}

AwareXButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
export default AwareXButton;

