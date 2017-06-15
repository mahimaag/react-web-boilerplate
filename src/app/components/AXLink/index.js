import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './style.scss';

class AXLink extends React.Component {
    render() {
        //const type = this.props.type;
        return (
            <Link className="custom-link" to="">
                {this.props.text}
            </Link>
        );
    }
}

AXLink.propTypes = {
  text: PropTypes.string.isRequired
};

export default AXLink;



