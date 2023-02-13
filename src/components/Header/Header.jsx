import React, { useRef } from 'react';
import "./Header.css";
import logo from "../../images/logo.png";

const nav_links= [
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#about',
        display:'About'
    },
    {
        path:'#service',
        display:'Service'
    },
  
    {
        path:'#blog',
        display:'Blog'
    },
    {
        path:'#contact',
        display:'Contact'
    },

    {
        path:'#career',
        display:'Career'
    },
];

const Header = () => {
    const menuRef = useRef(null);
    const toggleMenu = ()=>menuRef.current.classList.toggle("menu_active")

   
    return (
       <header className='header'  >
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                  
                </div>
                {/* navigation start */}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu" >
                        {
                            nav_links.map((item,index)=>
                            <li className="menu_item">
                                <a href={item.path} className="menu_link">{item.display}</a>
                            </li>
                            )
                        }
                    </ul>
                </div>
                  <span className="mobile_menu" onClick={toggleMenu}>
                    <i className='ri-menu-line'></i>
                    </span>           
            </div>
        </div>
       </header>
    )
};

export default Header;