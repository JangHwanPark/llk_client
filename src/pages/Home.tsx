import React from 'react';
import SearchBar from '../components/SearchBar';
import UserReview from '../components/UserReview';
import Container from '../layout/Container';
import ContactUsForm from "../components/ContactUsForm";
import {useQuery} from "@tanstack/react-query";
import {getReviewAPI} from "../api/review-service";
import LoadingSpinner from '../components/LoadingSpinner';
// import Carousel from "../components/Carousel";

interface ReviewTypes {
  review_id: number;
  review_score: string;
  review_description: string;
  user_name: string
}

export default function Home() {
  const {data, isLoading} = useQuery({
    queryKey: ['review'],
    queryFn: getReviewAPI
  });
  console.log(data);

  return (
    <Container>
      <section className='hero'>
        <SearchBar />
      </section>
      <section className='review-section'>
        <h2>what our clients says</h2>
        <div className='review-wrapper'>
          {isLoading ? (
            <LoadingSpinner/>
          ) : (
            data && data.data.map((item: ReviewTypes) => (
              <UserReview key={item.review_id} item={item} />
            ))
          )}
        </div>
      </section>
      {/*<section className='carousel-section'>
        <Carousel/>
      </section>*/}
      <section className='company-section'>
        <h2>Company About</h2>
        <div className='company-container'>
          <div>회사 소개 섹션 입니다.</div>
        </div>
      </section>
      <section className='explore-section'>
        <h2>Explore</h2>
        <div className='explore-container'>
          {Array.from([1,2,3,4,5,6,7,8]).map(item => (
            <div className="explore-item">Item + {item}</div>
          ))}
        </div>
      </section>
      <section>
        <ContactUsForm/>
      </section>
    </Container>
  );
}
