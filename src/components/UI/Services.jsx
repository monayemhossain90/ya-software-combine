import React from 'react';
import "../../styles/services.css";

const servicesData = 
[
    {
        id:1,
        icon:"ri-apps-line",
        title:"App Development",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:2,
        icon:"ri-braces-line",
        title:"Web Development",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:3,
        icon:"ri-layout-right-line",
        title:"Web Design",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:4,
        icon:"ri-code-s-slash-line",
        title:"Software Testing",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:5,
        icon:"ri-bug-2-line",
        title:"Bug Fixing",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    },
    {
        id:6,
        icon:"ri-cloud-line",
        title:"Dev OPS",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quo necessitatibus facere quam expedita aut"
    }
]
const Services = () => {
    return (
        <section className='service' id='service'>
            <div className="container">
                <div className="service_top_content">
                    <h6 className="subtitle">Our Services</h6>
                    <h2> Save time with managing your bussiness with </h2>
                    <h2 className='highlight'>our best services</h2>
                </div>
                <div className="service_item_wrapper">
                    {
                            servicesData.map((item)=>
                            <div className="service_item">
                            <span className='service_icon'><i className={item.icon}></i></span>
                            <h3 className="service_title">{item.title}</h3>
                            <p className="description">{item.description}</p>
                        </div>
                            )
                    }
                   
                </div>
            </div>
            
        </section>
    );
};

export default Services;