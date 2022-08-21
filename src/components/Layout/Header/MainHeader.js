import React from 'react'
import Button from '../../UI/Button'
import classes from '../Header/MainHeader.module.css'

import {Link} from 'react-router-dom';
const MainHeader = (props) => {
    const buttonClickHandler=()=>{
        console.log('dynamic button');
      }
  return (
    <nav className={classes.navbar}>
    <div className="logo">
        <h1>Perth Maxi Van</h1>
    </div>
    <ul className='nav-items'>
        <li className='list-item'><Link className={classes['list-link']} to='/'> {props.pages.Home}</Link></li>
        <li className='list-item'><Link  className={classes['list-link']} to='service'> {props.pages.Services}</Link></li>
        <li className='list-item'><Link  className={classes['list-link']} to='about'> {props.pages.About}</Link></li>
        <li className='list-item'><Link  className={classes['list-link']} to='contact'> {props.pages.Contact}</Link></li>
        <li><Button type='submit' onClick={buttonClickHandler}>Book Taxi</Button></li>
    </ul>
    </nav>
  
  )
}

export default MainHeader