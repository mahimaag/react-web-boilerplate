import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import UsageCategoryTabs from '../UsageCatgoryTabs';
import styles from './style.scss';

const InitialState = Object.freeze({
    currentTabIndex: 0
});

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};
 
class UsageCategorySlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...InitialState };
    }

    handleClick = (tabIndex) => {
        this.refs.slider.slickGoTo(tabIndex);
    };

    slideChange = (e) => {
        this.setState({currentTabIndex: e});
    };

    render() {
        const tabsTitles = this.props.data.map( datum => {
            return { title: datum.tabName };
        });
        return (
            <div className="slider-container">
                <UsageCategoryTabs tabs={tabsTitles} id="usage-card-tabs" activeKey={this.state.currentTabIndex} onClick={(tabIndex) => this.handleClick(tabIndex)}/>
                <Slider ref='slider' { ...settings } afterChange={(e) => this.slideChange(e)}>
                    {this.props.slides}
                </Slider>
            </div>
        );
    }
}

UsageCategorySlider.propTypes = {
    slides: PropTypes.array.isRequired,
};
export default UsageCategorySlider;
