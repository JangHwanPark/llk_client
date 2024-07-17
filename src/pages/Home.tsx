import React from 'react';
import SearchBar from '../components/SearchBar';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";
import Review from "../components/Review/Review";
import HomeSection from "../layout/HomeSection";

const exploreData = [
  {path: './img/home01.jpeg'},
  {path: './img/home02.jpeg'},
  {path: './img/home03.jpeg'},
  {path: './img/home04.jpeg'},
  {path: './img/home05.jpeg'},
  {path: './img/home06.jpeg'},
  {path: './img/home07.jpeg'},
  {path: './img/home08.jpeg'},
]

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
        <div>회사 소개를 작성해 주세요.</div>
      </HomeSection>
      <HomeSection
        className='explore-section'
        title='Explore'>
        <div className='explore-container'>
          {exploreData.map((item, index) => (
            <div key={index} className="explore-item">
              <img src={item.path} alt=""/>
            </div>
          ))}
        </div>
      </HomeSection>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
