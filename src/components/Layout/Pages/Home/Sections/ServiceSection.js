import React from 'react'
import classes from './ServiceSection.module.css'
import ServiceCard from './ServiceCard'
import { MdCommute,MdFlightLand,MdOutlineBabyChangingStation } from "react-icons/md";
import Card from '../../../../UI/Card/Card'
const Services=[
    {
        id:'1',
        heading:'Airport transfer',
        para:'We are the best service provider for Airport transfer services',
        icon:<MdFlightLand className={classes.icon}/>
    },
    {
        id: '2',
        heading:'wedding group transfer',
        para:'If you are planning for wedding transfer then Perth Maxi Van will take this job.',
        icon:<MdCommute className={classes.icon} />
    },
    {
        id:'3',
        heading:'Best baby seats',
        para:'We are the best service provider for baby seats transfer in Perth Area',
        icon:<MdOutlineBabyChangingStation className={classes.icon} />
    },
]

const ServiceSection = () => {
    return (
        <Card>
        <section className={classes.services}> 
        <h1>Our Services</h1>
        <div className={classes['service-section']}>
        {Services.map((service)=>(
      <ServiceCard id={service.id} heading={service.heading} description={service.para} icon={service.icon} />
        ))}
        </div>
      </section>
        </Card>
  )
}

export default ServiceSection