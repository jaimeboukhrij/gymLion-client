import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./HorizontalScrollBar.css"
import { Link } from 'react-router-dom'

const HorizontalScrollbar = ({ showBodyPartList, setShowBodyPart }) => {


    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div className="carousel">
            <Slider ref={sliderRef} {...settings}>
                {
                    showBodyPartList?.map((part, index) => {

                        return (
                            <>
                                <Link key={index} onClick={() => {
                                    setShowBodyPart(part)
                                    setTimeout(() => {
                                        window.scrollTo(0, 2100);
                                    }, 500)

                                }}>
                                    <div className="cardScroll">
                                        <img className='scrollImg' src="../../gym.png" alt="" />
                                        <p >{part.toUpperCase()} </p>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </Slider>


            <div className="scrollNavigation">
                <button className='right' onClick={nextSlide}><img src="../../right-arrow.png" alt="" /></button>
                <button className='left' onClick={previousSlide}><img src="../../left-arrow.png" alt="" /></button>
            </div>

        </div >
    );
};

export default HorizontalScrollbar;
