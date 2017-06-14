/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

//Importing Styles
import './style.scss';

class Help extends React.Component {
    render() {
        return (
            <div>
                <Link to="/help">
                    Help
                </Link>
            </div>
        );
    }
}

export default Help;
