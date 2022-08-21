import React from 'react'
import Header from '../../Header/Header'
import FaqSection from './Sections/FaqSection'
import FirstSection from './Sections/FirstSection'
import HotOfferSection from './Sections/HotOfferSection'
import RequestQuoteSectioin from './Sections/RequestQuoteSectioin'
import ServiceSection from './Sections/ServiceSection'
import Footer from './Sections/Footer';
const Home = (props) => {
  return (
    <>
    <Header pages={props.pages} />
    <FirstSection/>
    <ServiceSection/>
    <FaqSection/>
    <RequestQuoteSectioin/>
    <HotOfferSection/>
    <Footer>

    </Footer>
    </>
  )
}

export default Home