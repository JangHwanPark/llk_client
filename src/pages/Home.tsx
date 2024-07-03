import React from 'react';
import Navigation from "../components/Navigation";
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  return (
    <div className="container">
      <Navigation/>
      <LoadingSpinner/>
    </div>
  );
}