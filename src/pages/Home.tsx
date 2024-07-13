import React from 'react';
import Navigation from "../components/Navigation";
import SearchBar from '../components/SearchBar';
import ReviewIcon from '../components/ReviewIcon';

export default function Home() {
  return (
    <div className="container">
      <Navigation/>
      <section className='hero'>
        <SearchBar/>
      </section>
      <section className='review-section'>
        <ReviewIcon/>
        <ReviewIcon/>
        <ReviewIcon/>
      </section>
    </div>
  );
}
