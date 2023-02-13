import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/UI/About';
import Banner from '../components/UI/Banner';
import Blog from '../components/UI/Blog';
import Career from '../components/UI/Career';
import Contact from '../components/UI/Contact';
import Counter from '../components/UI/Counter';
import Frequently from '../components/UI/Frequently';
import Join from '../components/UI/Join';
import Services from '../components/UI/Services';
import Testimonials from '../components/UI/Testimonials';
const HomePage = () => {
    return (
        <>
            <Header/>
     <Banner/>
     <Counter/>
     <About/>
     <Services/>
     <Testimonials/>
     <Blog/>
      <Join/>
      <Career/>
      <Contact/> 
      <Frequently></Frequently>
        </>
    );
};

export default HomePage;