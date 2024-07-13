import React from 'react';
import SearchBar from '../components/SearchBar';
import ReviewIcon from '../components/ReviewIcon';
import Container from '../layout/Container';

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
    </Container>
  );
}
