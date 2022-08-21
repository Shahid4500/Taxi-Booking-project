import Card from "../../../../UI/Card/Card";
import styled from 'styled-components';
import Image from '../../../../../assets/images/pic.jpg'
import { Device } from '../../../../MediaQueries/Device';

const Container=styled.div`
width:100%;
background-color:#fff;
display:flex;
flex-direction:column;
.t-center{
  text-align:center;
}
.container-detail{
  display:flex;
  padding:2rem 4rem;
justify-content:space-between;
margin-top:1.5rem;
position:relative;
align-items:center;
}
.container-info{
  width:50%;
  padding:2rem 5rem;
  display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:flex-start;  
}
.container-image 
{
  background-color:#7661E1;
  box-shadow: 0px 20px 20px rgba(0,0,0,0.15);

  border-radius:12px;
 
}
.container-image img
{
  position:relative;
  transform:translate(-40px,40px);
  width:600px;

}

@media (max-width:768px)
{
    flex-direction:column;
    width:100%;
    padding:2rem;
    .container-detail
    {
      width:100%;
      display:flex;
      flex-direction:column;
      padding:0 1rem;
    }

    .container-info
    {
      width:100%;
      justify-content:center;
      align-items:flex-start;
      padding:0;
      margin-bottom:3rem;
    }

    .container-image 
    {
      width:100%;

    }
    .container-image img
    {
      width:100%;
    }
}
`
const HotOfferData = {
  title: "Hot Offer",
  detail: {
    title: "Book 5,6 and 13 seater Maxi",
    content:
      "We specialise in Minibuses for all of your requirements.Ranging from 5 seater to 13 seater Perth Maxi Cabs, We also provide Airport pick up and drop off. We book in advance, and guarantee your pick up for your peace of mind.We are just a call away. Book a taxi or maxi service by Perth Maxi Van.",
      image:{Image}
  },
};
const HotOfferSection = () => {
  return <Card>
  <Container>
  <h1 className='t-center'>{HotOfferData.title}</h1>
  <div className="container-detail">

  <div className="container-info">
    <h2>{HotOfferData.detail.title}</h2>
    <p>{HotOfferData.detail.content}</p>
  </div>
  <div className="container-image">
    <img src={Image} alt="Perth maxi van" />
  </div>
  </div>
  </Container>
  </Card>;
};

export default HotOfferSection;
