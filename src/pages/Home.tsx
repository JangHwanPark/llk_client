import React from 'react';
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <Container>
      <section className='hero'>
        <SearchBar />
      </section>
      <section className='review-section'>
        <h2>what our clients says</h2>
        <div className='review-wrapper'>
          <UserReview/>
          <UserReview/>
          <UserReview/>
        </div>
      </section>
      <section className='carousel-section'>
        <Carousel/>
      </section>
      <section>
        회사 소개 및 바로가기
      </section>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
