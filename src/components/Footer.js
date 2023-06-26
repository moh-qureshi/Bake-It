import React, { useState } from 'react'
import styled from  'styled-components'
import { ArrowDownSquareFill, XSquareFill } from 'styled-icons/bootstrap'
const Footer = () => {
    const [dropdownShowing, toggleDropdown] = useState('none')
    return (
    <FooterStyled>
            <div className='footer-links-div'>
                <ul>
                    <div className='footer-link-title'>Customer Service 
                    <ArrowDownSquareFill 
                    className={`dropdown-icon ${dropdownShowing === "customer service"? 'hide': 'show'}`}
                    onClick={() =>{toggleDropdown('customer service')}}
                    />
                    <XSquareFill 
                    className={`cancel-dropdown-icon ${dropdownShowing === 'customer service'? 'show': 'hide'}`}
                    onClick={() =>{toggleDropdown('none')}}
                    />
                    </div>
                    <hr className={`dropdown-closed-divider ${dropdownShowing === 'customer service'? 'hide': 'show'}`}></hr>
                    <div className={`footer-links-column ${dropdownShowing === 'customer service'? 'show': 'hide'}`}>
                    <li className='footer-links'><a href='#'>Contact Us</a></li>
                    <li className='footer-links'><a href='#'>Sign In</a></li>
                    <li className='footer-links'><a href='#'>Create Account</a></li>
                    <li className='footer-links'><a href='#'>My Account</a></li>
                    <li className='footer-links'><a href='#'>Mobile Apps</a></li>
                    </div>
                </ul>
            </div>
            <hr className={`dropdown-open-divider ${dropdownShowing === 'customer service'? 'show': 'hide'}`}></hr>
            <div className='footer-links-div'>
                <ul>
                    <div className='footer-link-title'>Popular Categories 
                    <ArrowDownSquareFill 
                    className={`dropdown-icon ${dropdownShowing === 'popular categories'? 'hide': 'show'}`}
                    onClick={() =>{toggleDropdown('popular categories')}}
                    />
                    <XSquareFill 
                    className={`cancel-dropdown-icon ${dropdownShowing === 'popular categories'? 'show': 'hide'}`}
                    onClick={() =>{toggleDropdown('none')}}
                    />
                    </div>
                    <hr className={`dropdown-closed-divider ${dropdownShowing === 'popular categories'? 'hide': 'show'}`}></hr>
                    <div className={`footer-links-column ${dropdownShowing === 'popular categories'? 'show': 'hide'}`}>
                    <li className='footer-links'><a href='#'>Brownies</a></li>
                    <li className='footer-links'><a href='#'>Cakes</a></li>
                    <li className='footer-links'><a href='#'>Chocolate Strawberries</a></li>
                    <li className='footer-links'><a href='#'>Cookies</a></li>
                    <li className='footer-links'><a href='#'>Donuts</a></li>
                    </div>
                    <hr className={`dropdown-open-divider ${dropdownShowing === 'popular categories'? 'show': 'hide'}`}></hr>
                </ul>
            </div>
            <div className='footer-links-div'>
                <ul>
                    <div className='footer-link-title'>Popular Locations 
                    <ArrowDownSquareFill 
                    className={`dropdown-icon ${dropdownShowing === 'popular locations'? 'hide': 'show'}`}
                    onClick={() =>{toggleDropdown('popular locations')}}
                    />
                    <XSquareFill 
                    className={`cancel-dropdown-icon ${dropdownShowing === 'popular locations'? 'show': 'hide'}`}
                    onClick={() =>{toggleDropdown('none')}}
                    />
                    </div>
                    <hr className={`dropdown-closed-divider ${dropdownShowing === 'popular locations'? 'hide': 'show'}`}></hr>
                    <div className={`footer-links-column ${dropdownShowing === 'popular locations'? 'show': 'hide'}`}>
                    <li className='footer-links'><a href='#'>Edinburgh</a></li>
                    <li className='footer-links'><a href='#'>Glasgow</a></li>
                    <li className='footer-links'><a href='#'>London</a></li>
                    <li className='footer-links'><a href='#'>Liverpool</a></li>
                    <li className='footer-links'><a href='#'>Manchester</a></li>
                    </div>
                    <hr className={`dropdown-open-divider ${dropdownShowing === 'popular locations'? 'show': 'hide'}`}></hr>
                </ul>
            </div>
            <div className='footer-links-div'>
                <ul>
                    <div className='footer-link-title'>About BakeIt 
                    <ArrowDownSquareFill 
                    className={`dropdown-icon ${dropdownShowing === 'about BakeIt'? 'hide': 'show'}`}
                    onClick={() =>{toggleDropdown('about BakeIt')}}
                    />
                    <XSquareFill 
                    className={`cancel-dropdown-icon ${dropdownShowing === 'about BakeIt'? 'show': 'hide'}`}
                    onClick={() =>{toggleDropdown('none')}}
                    />
                    </div>
                    <hr className={`dropdown-closed-divider ${dropdownShowing === 'about BakeIt'? 'hide': 'show'}`}></hr>
                    <div className={`footer-links-column ${dropdownShowing === 'about BakeIt'? 'show': 'hide'}`}>
                    <li className='footer-links'><a href='#'>About Us</a></li>
                    <li className='footer-links'><a href='#'>Careers</a></li>
                    <li className='footer-links'><a href='#'>Privacy Policy</a></li>
                    <li className='footer-links'><a href='#'>Terms & Conditions</a></li>
                    <li className='footer-links'><a href='#'>Cookie Policy</a></li>
                    <li className='footer-links'><a href='#'>Sustainability</a></li>
                    <li className='footer-links'><a href='#'>Modern Slavery Statement</a></li>
                    </div>
                    <hr className={`dropdown-open-divider ${dropdownShowing === 'about BakeIt'? 'show': 'hide'}`}></hr>
                </ul>
            </div>      
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
background-color: lightgrey;
margin-top: 20px;
display: flex;
justify-content: space-between;
padding: 20px;
.footer-links-div ul{
    list-style: none;
}
.footer-links a{
    text-decoration: none;
    color: #4e4e4e;
}
.footer-links a:hover{
    text-decoration: underline;
}
.footer-link-title{
    color: #4e4e4e;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
}
.footer-links-column{
    display: hide;
}
.dropdown-icon, .cancel-dropdown-icon{
    height: 1.2em;
    display: none;
}
.dropdown-closed-divider, .dropdown-open-divider{
    display: none;
}


@media (max-width: 768px){
    flex-direction: column;
   
    .footer-link-title{
        display: flex;
        justify-content: space-between;
    }
    .dropdown-icon{
        margin-left: 40px;
    }
    .show{
        display: inherit;
    }
    .hide{
        display: none;
    }
}
`

export default Footer