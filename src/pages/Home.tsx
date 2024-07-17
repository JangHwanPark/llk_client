import React from 'react';
import SearchBar from '../components/SearchBar';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";
import Review from "../components/Review/Review";
import SectionLayout from "../layout/HomeSection";

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
      <SectionLayout
        className='review-section'
        title='what our clients says'>
        <Review/>
      </SectionLayout>
      <SectionLayout
        className='explore-section'
        title='Explore'>
        <div className='explore-container'>
          {exploreData.map((item, index) => (
            <div key={index} className="explore-item">
              <img src={item.path} alt=""/>
            </div>
          ))}
        </div>
      </SectionLayout>
      <SectionLayout
        className='company-section'
        title='News'>
        <div>부동산 뉴스.</div>
      </SectionLayout>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
