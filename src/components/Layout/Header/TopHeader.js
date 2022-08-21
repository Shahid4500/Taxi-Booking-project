import React from 'react'
import { BsFacebook,BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import classes from './TopHeader.module.css';
const TopHeader = () => {
  return (
    <nav className={classes['top-nav']}>
    <div className={classes['top-icons']}>
    <span><BsFacebook/></span>
    <span><BsLinkedin/></span>
    <span><AiFillTwitterCircle/></span>
    </div>  
    <div className="top-info">
      <p>24/7 Services available</p>
    </div>
    </nav>
  );
}

export default TopHeader