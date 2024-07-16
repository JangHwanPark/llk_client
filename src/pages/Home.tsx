import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";
import {useQuery} from "@tanstack/react-query";
import {getReviewAPI} from "../api/review-service";
// import Carousel from "../components/Carousel";

export default function Home() {
  const [review, setReview] = useState('');
  const {data, isLoading, isError} = useQuery({
    queryKey: ['review'],
    queryFn: getReviewAPI
  });
  console.log(data)

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
          <UserReview/>
          <UserReview/>
        </div>
      </section>
      {/*<section className='carousel-section'>
        <Carousel/>
      </section>*/}
      <section className='company-section'>
        <h2>Company About</h2>
        <div className='company-container'>
          {/*<div><img src="./img/hero01.jpg" alt=""/></div>*/}
          <div>회사 소개 섹션 입니다.</div>
        </div>
      </section>
      <section className='explore-section'>
        <h2>Explore</h2>
        <div className='explore-container'>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
          <div className='explore-item'>Item</div>
        </div>
      </section>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
