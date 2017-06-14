import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';
import styles from './style.scss';

class UsageCategoryTabs extends React.Component {

    handleClick = (tabIndex) => {
        this.props.onClick(tabIndex);
    };
    render() {
        return (
            <Tabs defaultActiveKey={this.props.activeKey} activeKey={this.props.activeKey} animation={false} id={ this.props.id } onSelect={(index) => this.handleClick(index)}>
                {
                    this.props.tabs.map((tab, index) => (
                        <Tab eventKey={index} title={tab.title} key={index} ></Tab>
                    ))
                }
            </Tabs>
        );
    }
}

UsageCategoryTabs.propTypes = {
    onClick: PropTypes.func.isRequired,
    activeKey: PropTypes.number.isRequired
};
export default UsageCategoryTabs;


