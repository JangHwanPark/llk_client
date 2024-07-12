import React from 'react';
import Navigation from "../components/Navigation";
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className="container">
      <Navigation/>
      <section className='hero'>
        <SearchBar/>
      </section>
      <section className=''>
        <div className='review'>
          <div><img src="" alt="" /></div>
          <div>
            <p>name</p>
            <p>star</p>
            <p>description</p>
          </div>
        </div>
      </section>
    </div>
  );
}
