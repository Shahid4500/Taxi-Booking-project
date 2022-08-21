import React from 'react'
import styled from 'styled-components';
import Button from '../../../../UI/Button';
import Card from '../../../../UI/Card/Card';
import classes from './RequestQuote.module.css'

const Container=styled.div`
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
background-color:#fff;
color:#000;

@media (max-width:768px)
{
    flex-direction:column;
    width:100%;
    padding:0;
}
`
const Info=styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:5.5rem;
&{
    padding:6rem;
}

@media (max-width:768px)
{
    flex-direction:column;
    width:100%;
    padding:2rem;
    &{
    padding:6rem;
}
}
`
const FormContainer=styled.div`
width:30%;
padding:2rem;
background-color:#ff32;
border-radius:6px;
box-shadow:3px 0px 10px rgba(0,0,0,0.25);
@media (max-width:768px)
{
    flex-direction:column;
    width:85%;
}
`
const FormControl=styled.div
`
width:100%;
display:flex;
flex-direction:column;
margin:2rem 0;
`
const FormInput=styled.input`
padding:1rem;
margin-top:1rem;
background-color:transparent;
outline:none;
border:none;
border-bottom:2px solid #141127;
color:#000;
&:focus {
        outline: none;
        border-bottom:2px solid red;
        background-color:transparent;
        transition: border-bottom 0.4s ease-in-out;

    }
`
const RequestQuoteSectioin = () => {
  return (
    <Card className={classes['full-width']}>
    <Container>
    <Info>
        <h1>We are best Perth Maxi Van</h1>
        <p>If you are looking for best perth maxi van then we are available for your facilitation
        We will provide you all the taxi services like Airport transportation, wedding group transfer
        best baby seats , special events, social events and many more in the great Perth area.
        </p>
        <a href="mailto:infoperthmaxivan@gmail.com" style={{color:'white', marginBottom:'2rem'}}>Email: infoperthmaxivan@gmail.com</a>
        <Button type='submit'>Book Maxi</Button>
    </Info>
    <FormContainer>
    <h2>Request A Quote</h2>
        <form action="">
        <FormControl>
            <label htmlFor="name">Name</label>
            <FormInput type="text" placeholder='enter your name'  />
        </FormControl>
        <FormControl>
            <label htmlFor="email">Email</label>
            <FormInput type="email" placeholder='enter your email'/>
        </FormControl>
        <Button>Request Quote</Button>
        </form>
    </FormContainer>
    </Container>
    </Card>
  );
}

export default RequestQuoteSectioin;