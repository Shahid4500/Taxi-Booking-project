import React from 'react'
import Card from '../../../../UI/Card/Card';
import { Device } from '../../../../MediaQueries/Device';
import styled from 'styled-components';
import { BsFillArrowRightCircleFill,BsMessenger,BsYoutube,BsGithub } from "react-icons/bs";
const Services=[
    {
        id:'1',
        title:'Airport Transfer'
    },
    {
        id:'2',
        title:'Wedding Booking'
    },
    {
        id:'3',
        title:'Birthday Party Booking'
    }
]
const FooterSection=styled.footer`
width:100%;
height:50vh;
display:flex;
justify-content:space-between;
align-items:flex-start;
background-color:#7661E1;
padding: 4rem 11rem;
color:#fff;
.footer-services
{
    width:33%;
    .ml-20{
        margin-left:2.5rem;
    }
}
.list-items
{
    margin-top:1rem;
}

.footer-contact
{
    width:33%;
    display:flex;
    flex-direction:column;
    .t-white{
        color:#fff;
        margin-top:0.5rem;
    }
}
.footer-socials
    {
        .icons{
            font-size:40px;
            display:flex;
        flex-direction:column;
        gap:20px;
        }
    }

    @media (max-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:auto;
        width:100%;
        .footer-services{
            width:100%;
            padding:0;
            margin:0 4rem 0 0;

        }
        .footer-contact{
            width:100%;
            padding:0;
            margin:0;
        }
        .footer-socials
        {
            width:100%;
            
        }
        .icons{
                display:flex;
                flex-direction:row;
            }

    }
`
const Footer = () => {
    const serviceList=Services.map((service)=>(
        <li className='list-items' key={service.id}><BsFillArrowRightCircleFill/> {service.title}</li>
    ))
  return (

  <FooterSection>
  <div className="footer-services">
    <h2 className='ml-20'>Our Services</h2>
    <ul>
    {serviceList}
    </ul>
  </div>
  <div className="footer-contact">
    <h2>Contact Us</h2>
    <a className='t-white' href="mailto:shahidkhan4500.s@gmail.com">Email:  shahidkhan4500.s@gmail.com</a>
    <a className='t-white' href="tel:0303-4500554">Call Us:  0303-4500554</a>
    <p>If you have any query you can call us or mail us.</p>
  </div>
  <div className="footer-socials">
    <h2>Connect Us On</h2>
    <div className="icons">
    <BsMessenger/>
    <BsYoutube/>
    <BsGithub/>
    </div>
  </div>
  </FooterSection>
  )
}

export default Footer