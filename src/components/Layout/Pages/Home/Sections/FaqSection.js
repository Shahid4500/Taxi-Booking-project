import classes from './FaqSection.module.css';
import Image from '../../../../../assets/images/hero.png';
import Card from '../../../../UI/Card/Card';
import Faq from 'react-faq-component';
const data={
    title:'FREQUENTLY ASKED QUESTIONS',
    rows:[
    {
        title:'Is it costy to tranvel in Perth?',
        content:'No it is very affordable and facilitate to travel in perth area and you will get more about it'
    },
    {
        title:'Is it costy to tranvel in Perth?',
        content:'No it is very affordable and facilitate to travel in perth area and you will get more about it'
    },

    {
        title:'Is it costy to tranvel in Perth?',
        content:'No it is very affordable and facilitate to travel in perth area and you will get more about it'
    },
]
    
};
const styles = {
    // bgColor: 'white',
    //titleTextColor: "blue",
    // rowContentColor: 'grey',
    arrowColor: "#E5735C"
  };
  
  const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };
const FaqSection = () => {
  return (
    <Card>

    <section className={classes.faqSection}>
    <h2>FAQs</h2>
    <div className={classes['details']}>
        <div className={classes['faq-image']}>
            <img src={Image} alt="" />
        </div>
        <div className={classes['faq-info']}>
        <Faq data={data} styles={styles} config={config}/>
        </div>
        </div>
    </section>
    </Card>
  )
}

export default FaqSection