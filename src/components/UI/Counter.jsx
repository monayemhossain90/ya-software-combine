import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../../styles/counter.css";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const counterData = [
    {
      id: 1,
      counter: <CountUp start={0} end={800} duration={2} delay={0}></CountUp>,
      title: "Projects Finished",
    },
    {
      id: 2,
      counter: <CountUp start={0} end={12} duration={2} delay={0}></CountUp>,
      title: "Years of Experience",
    },
    {
      id: 3,
      counter: <CountUp start={0} end={500} duration={2} delay={0}></CountUp>,
      title: "Happy Clients",
    },
    {
      id: 4,
      counter: <CountUp start={0} end={10} duration={2} delay={0}></CountUp>,
      title: "Recognition",
    },
  ];

  return (
    <section className="counter">
      <div className="container">
        <div className="counter_wrapper">
        
          {counterData.map((item, index) => (
            
              <div className="counter_item">
                <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
               {counterOn &&<h2 className="counter_number">{item.counter}+</h2>} 
                </ScrollTrigger>
               
                <h4 className="counter_title">{item.title}</h4>
              </div>
            
          ))}
            
        </div>
      </div>
    </section>
  );
};

export default Counter;
