import React from 'react';
import Navigation from "../../components/Navigation/Navigation";
import LoadingSpinner from '../../components/LoadingSpiner/LoadingSpinner';

export default function Home() {
  return (
    <div className="container">
      <Navigation/>
      <LoadingSpinner/>
    </div>
  );
}