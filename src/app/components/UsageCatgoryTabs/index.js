import React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import styles from './style.scss';

class UsageCategoryTabs extends React.Component {
    render() {
        //const type = this.props.type;
        return (
            <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                <Tab eventKey={1} title="Tab 1"></Tab>
                <Tab eventKey={2} title="Tab 2"></Tab>
                <Tab eventKey={3} title="Tab 3"></Tab>
            </Tabs>
        );
    }
}

/*AwareXButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};*/
export default UsageCategoryTabs;


