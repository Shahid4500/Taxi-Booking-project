
import React from 'react'
import Hero from './Hero/Hero'
import classes from './Header.module.css'
import TopHeader from './TopHeader'
import MainHeader from './MainHeader'
const Header = (props) => {
  return (
    <header className={classes.header}>
    <TopHeader/>
    <MainHeader pages={props.pages}/>
    <Hero/>
    </header>
  )
}

export default Header