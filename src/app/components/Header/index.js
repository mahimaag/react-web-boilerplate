                    Header
/**
 * Created by intelligrape on 5/6/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

//Importing Styles
import './style.scss';

class Header extends React.Component {
    render() {
        return (
            <header className="app_header">
                <Link to="/">
                    Back to Home
                </Link>
            </header>
        );
    }
}

export default Header;
