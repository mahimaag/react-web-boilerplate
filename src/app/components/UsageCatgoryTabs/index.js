import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import styles from './style.scss';

class UsageCategoryTabs extends React.Component {
    render() {
        //const type = this.props.type;
        return (
            <Tabs defaultActiveKey={1} animation={false} id={ this.props.id }>
                {
                    this.props.tabs.map((tab, index) => (
                        <Tab eventKey={index} title={tab.title} key={index}></Tab>
                    ))
                }
            </Tabs>
        );
    }
}

/*AwareXButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};*/
export default UsageCategoryTabs;


