import React from 'react';
import SearchBar from '../components/SearchBar';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";
import Review from "../components/Review/Review";
import HomeSection from "../layout/HomeSection";

export default function Home() {
  return (
    <Container>
      <section className='hero'>
        <SearchBar />
      </section>
      <HomeSection
        className='review-section'
        title='what our clients says'>
        <Review/>
      </HomeSection>
      <HomeSection
        className='company-section'
        title='Company About'>
        <div>회사 소개 섹션 입니다.</div>
      </HomeSection>
      <HomeSection
        className='explore-section'
        title='Explore'>
        <div className='explore-container'>
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map(item => (
            <div key={item} className="explore-item">Item + {item}</div>
          ))}
        </div>
      </HomeSection>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
