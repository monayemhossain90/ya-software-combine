import React from 'react';
import Slider from 'react-slick';
import "../../styles/testimonials.css";
import ava1 from "../..//images/ava-1.jpg";
import ava2 from "../..//images/ava-2.jpg";
import ava3 from "../..//images/ava-3.jpg";

const Testimonials = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:true
      };
    return (
        <section className='testimonials'>
            <div className="container">
                <div className="slider_content_top">
                    <h6 className="subtitle">Testimonial</h6>
                    <h2>Trusted by more Than <span className="highlight">5000 customers</span></h2>

                </div>
            <div className="slider_wrapper">
            <Slider {...settings}>
                <div className="slider_item">
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis atque reprehenderit iusto ea repudiandae eius? Corporis atque reprehenderit iusto ea repudiandae eius? iusto ea repudiandae eius? Corporis atque reprehenderit iusto ea repudiandae eius?</p>
                    <div className="customer_details">
                        <div className="customer_img">
                            <img src={ava1} alt="" />
                        </div>
                        <div className='customer_profile'>
                            <h2 className="customer_name"> jhone doe</h2>
                            <p className='description'> CEO, ARD Technology</p>
                        </div>

                    </div>
                </div>
                <div className="slider_item">
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis atque reprehenderit iusto ea repudiandae eius? Corporis atque reprehenderit iusto ea repudiandae eius? iusto ea repudiandae eius? Corporis atque reprehenderit iusto ea repudiandae eius?</p>
                    <div className="customer_details">
                        <div className="customer_img">
                            <img src={ava2} alt="" />
                        </div>
                        <div className='customer_profile'>
                            <h2 className="customer_name"> PB Eve </h2>
                            <p className='description'>Managing Director, Galaxy Technology</p>
                        </div>

                    </div>
                </div>
                <div className="slider_item">
                    <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis atque reprehenderit iusto ea repudiandae eius? Corporis atque reprehenderit iusto ea repudiandae eius? iusto ea repudiandae eius? Corporis atque reprehenderit iusto ea repudiandae eius?</p>
                    <div className="customer_details">
                        <div className="customer_img">
                            <img src={ava3} alt="" />
                        </div>
                        <div className='customer_profile'>
                            <h2 className="customer_name"> Adam smith</h2>
                            <p className='description'> Head of PY Technology</p>
                        </div>

                    </div>
                </div>
            </Slider>
            </div>
            </div>
            
        </section>
    );
};

export default Testimonials;