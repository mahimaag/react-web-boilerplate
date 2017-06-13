import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import UsageCategoryTabs from '../UsageCatgoryTabs';
import styles from './style.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};
 
class UsageCategorySlider extends React.Component {
    render() {
        const tabsTitles = this.props.data.map( datum => {
            return { title: datum.tabName };
        });
        return (
            <div className="slider-container">
                <UsageCategoryTabs tabs={tabsTitles} id="usage-card-tabs"/>
                <Slider { ...settings }>
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
