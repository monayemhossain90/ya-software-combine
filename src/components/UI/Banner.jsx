import React from 'react';
import "../../styles/banner.css";
import bannerImg from "../../images/bannerImg.png";

const Banner = () => {
    return (
        <section className='banner' id='home'>
            <div className="container">
                <div className="banner_wrapper">
                    <div className="banner_content">
                        <div>
                            <h2>Software Is The Most Powerful Weapon</h2>
                            <h2>Which You Can Use To</h2>
                            <h2 className="highlight">Change The World</h2>
                        </div>
                        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ipsa?</p>
                        <button className='primary_btn'> Get Started Now </button>
                    </div>
                    <div className="banner_img">
                        <img src={bannerImg} alt="banner img" />
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Banner;