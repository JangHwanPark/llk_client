import React from 'react';
import Navigation from "../components/Navigation";
import Container from "../layout/Container";
import SellForm from '../components/SellForm';

const Sell = () => {
  return (
    <Container>
      <Navigation/>
      <SellForm/>
    </Container>
  );
};

export default Sell;
