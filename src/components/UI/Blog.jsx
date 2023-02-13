import React from 'react';
import "../../styles/blog.css";
import artificial from "../../images/video.png";
import article from "../../images/article.png";
import caseStudy from "../../images/case-study.png";


const blogData = [
    {
        id:1,
        title:"Artificial Intelligent",
        img:artificial,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
        icon:"ri-arrow-right-line",
        linkURL:"#"
    },
    {
        id:2,
        title:"Web Development",
        img:article,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
        icon:"ri-arrow-right-line",
        linkURL:"#"
    },
    {
        id:3,
        title:"Machine Learning",
        img:caseStudy,
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
        icon:"ri-arrow-right-line",
        linkURL:"#"
    },
]

const Blog = () => {
    return (
        <section className='blog' id='blog'>
            <div className="container">
                <div className="blog_top_content">
                    <h6 className='subtitle'>Our Blog</h6>
                    <h2>Let's have a look from our <span className="highlight">recent blog</span></h2>
                </div>

                <div className="blog_wrapper">
                    {
                        blogData.map((item,index)=>
                        <div className="blog_item">
                        <h3>{item.title}</h3>
                        <div className='blog_img'>
                            <img src={item.img} alt="blog img" />
                        </div>
                        <p className="description">{item.description}</p>

                        <div>
                            <a href={item.linkURL} className="learn_more">
                                <i className={item.icon}></i>
                            </a>
                        </div>
                    </div>
                        )
                    }
                  
                </div>
            </div>
            
        </section>
    );
};

export default Blog;