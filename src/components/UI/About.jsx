import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us.jpg";


const chooseData = [
    {id:1,
        icon:"ri-wifi-line",
        title:"First Working Process",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi repellat, dicta possimus nulla vero."
    },

    {id:2,
        icon:"ri-team-line",
        title:"Dedicated Team",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi repellat, dicta possimus nulla vero."
    },

    {id:3,
        icon:"ri-headphone-line",
        title:"24/7 Hours Support",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi repellat, dicta possimus nulla vero."
    }
]

const About = () => {
    
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
            <h6 className="subtitle">Why Choose Us?</h6>
            <h2>Specialist in Aviding clients on</h2>
            <h2 className="highlight"> Financial Challange</h2>
            <p className="description about_content_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              reiciendis veniam nihil sit accusantium inventore minus rem in
              dolorum qui!
            </p>
            
            <div className="choose_item_wrapper">
            {
                    chooseData.map((item,index)=>
                    <div className="choose_us_item">
                    <span className="choose_us_icon">
                    <i class={item.icon}></i>
                    </span>
                    <div>
                      <h2 className="choose_us_title">{item.title}</h2>
                      <p className="description">{item.description}</p>
                    </div>
                    </div>
                    )
                }
            </div>
             
            
            
          </div>

          <div className="about_img">
            <img src={aboutImg} alt="about img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
