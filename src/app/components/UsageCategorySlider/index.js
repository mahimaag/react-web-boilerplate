import React from 'react';
import Slider from 'react-slick';
import styles from './style.scss';
import PropTypes from 'prop-types';

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
