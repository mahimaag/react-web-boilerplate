import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import UsageCategoryTabs from '../UsageCatgoryTabs';
import styles from './style.scss';

class UsageCategorySlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div className="slider-container">
                <UsageCategoryTabs/>
                <Slider {...settings}>
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
