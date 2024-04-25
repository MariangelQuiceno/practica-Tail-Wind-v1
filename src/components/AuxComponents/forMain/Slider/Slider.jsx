import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sea1 from '../../../../assets/sliderImg/sea1.jpg'
import sea2 from '../../../../assets/sliderImg/sea2.jpg'
import sea3 from '../../../../assets/sliderImg/sea3.jpg'

export const CarouselSlider = () => {

    const imgSlideUrls = [
        sea1,
        sea2,
        sea3,
    ];

  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="Slider bg-lapiz bg-opacity-0 m-5 h-80 ">
            <Slider {...settings}>
                {imgSlideUrls.map((url, index) => (
                    <div key={index}>
                        <img
                            src={url}
                            alt={`Image ${index + 1}`}
                            className="img-aside-new mt-5 w-11/12 h-60 ml-20"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
