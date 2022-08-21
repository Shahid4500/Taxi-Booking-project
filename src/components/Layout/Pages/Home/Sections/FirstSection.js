import React from "react";
import Button from "../../../../UI/Button";
import Card from "../../../../UI/Card/Card";
import Image from '../../../../../assets/images/Perth taxi service.png';
import classes from './FirstSection.module.css'
const FirstSection = () => {
  return (
    <Card className={classes.mt}>
      <div className={classes.section}>
        <div className={classes.info}>
          <h1>We help people reach their destination</h1>
          <p>
            We specialise in Minibuses for all of your requirements.Ranging from
            5 seater to 13 seater Perth Maxi Cabs, We also provide Airport pick
            up and drop off. We book in advance, and guarantee your pick up for
            your peace of mind.We are just a call away. Book a taxi or maxi
            service by Perth Maxi Van.”
          </p>
          <Button type='submit'>Book Maxi</Button>
        </div>
        <div className={classes.image}>
          <img src={Image} alt="" />
        </div>
      </div>
    </Card>
  );
};

export default FirstSection;
