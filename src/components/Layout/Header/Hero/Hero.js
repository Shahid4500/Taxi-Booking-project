import React from 'react'
import Button from '../../../UI/Button'
import classes from './Hero.module.css'
import Image from '../../../../assets/images/Perth taxi service.png';
const Hero = () => {
  return (
    <main className={classes.hero}>
    <div className={classes['hero-details']}>
    <div className={classes['hero-info']}>
        <h2>WE ARE BEST TAXI COMPANY IN PERTH </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, temporibus quos cupiditate illo aperiam omnis incidunt itaque! Nulla, nisi at. Aspernatur ea provident at pariatur fuga, nemo quo adipisci. Atque.</p>
        <Button type='submit'>Book Taxi</Button>
    </div>
    <div className={classes['hero-image']}>
        <img src={Image} alt="" />
    </div>
    </div>
    </main>
  )
}

export default Hero