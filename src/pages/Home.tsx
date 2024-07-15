import React from 'react';
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";

export default function Home() {
  return (
    <Container>
      <section className='hero'>
        <SearchBar />
      </section>
      <section className='review-section'>
        <UserReview />
        <UserReview />
        <UserReview />
      </section>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
