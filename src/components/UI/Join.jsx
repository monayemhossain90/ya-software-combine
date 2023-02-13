import React from 'react';
import "../../styles/join.css";

const Join = () => {
    return (
        <section  className='newsletter'>
            <div className="container">
                <div className="newsletter_wrapper">
                <div className="newsletter_content">
                        <h6 className="subtitle">Let's Work</h6>
                        <h2>Explore the <span className="highlight">hidden</span> ideas and subscribe!</h2>
                    </div>
            <div className="right-j">
                <div className="email-container">
                <input type="email" placeholder='Write your email here' />
                <button>Join Now</button>
                </div>
            </div>
                </div>
          
            </div>
         
            
        </section>
    );
};

export default Join;