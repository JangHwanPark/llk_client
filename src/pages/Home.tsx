import React from 'react';
import SearchBar from '../components/SearchBar';
import ReviewIcon from '../components/ReviewIcon';
import Container from '../layout/Container';
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <Container>
      <section className='hero'>
        <SearchBar />
      </section>
      <section className='review-section'>
        <ReviewIcon />
        <ReviewIcon />
        <ReviewIcon />
      </section>
        <section className='contactus'>
        <ContactUs />
        </section>
    </Container>
  );
}
