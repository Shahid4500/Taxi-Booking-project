import React from 'react'
import classes from './ServiceSection.module.css'

const ServiceCard = (props) => {
  return (
    <div className={classes['service-card']}>
        <div className={classes['card-body']}>
        <div className={classes['card-head']}>
            <div className={classes['card-head-icon']}>
           {props.icon}
            </div>
        </div>
            <div className={classes['card-info']}>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard