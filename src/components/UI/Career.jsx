import React from 'react';
import { Link } from 'react-router-dom';
const servicesData = [
    {
        id:1,
        icon:"ri-reactjs-line",
        post:"React Developer",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:2,
        icon:"ri-angularjs-line",
        post:"Angular Developer",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:3,
        icon:"ri-vuejs-line",
        post:"Vue Developer",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    }
  
]
const Career = () => {
    return (
        <section className='service' id='career'>
            <div className="container">
                <div className="service_top_content">
                    <h2 className="highlight ">Career</h2>
                    <h2> Be a member of <span className='highlight'>our team</span></h2>
                   
                </div>
                <div className="service_item_wrapper">
                    {
                            servicesData.map((item)=>
                            <div className="service_item">
                            <span className='service_icon'><i className={item.icon}></i></span>
                            <h3 className="service_title">{item.post}</h3>
                            <p className="description">{item.description}</p>
                            <button className='primary_btn'><Link to="/apply">Apply Now</Link></button>
                        </div>
                            )
                    }
                   
                </div>
            </div>
            
        </section>
    );
};

export default Career;