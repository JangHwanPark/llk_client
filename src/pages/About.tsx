import React from 'react';
import Container from '../layout/Container';
import AboutContactUsForm from '../components/AboutContactUs';
import ReviewBox from '../components/ReviewBox';

const About = () => {
  return (
      <Container>
        <div className="about-page">
          <div className="self-introduction">
            <div className="img-wrapper">
              <img src="/img/hero02.jpg" className="profile-photo" alt="Wonjin Han" />
            </div>
            <div className="text-wrapper">
              <h2>Wonjin Han</h2>
              <p>Have a question for our agent?</p>
            </div>
          </div>
          <div className="container">
            <div className="about-contact">
              <AboutContactUsForm />
            </div>
            <div className="about-review">
              <div className="review">
                <h2>Customer Reviews</h2>
                <h3>See what our customers have to say</h3>
                <ReviewBox
                    customerName="Customer 1"
                    review="it's so good and pantasic"
                    rating={5}
                />
                <ReviewBox
                    customerName="Customer 2"
                    review="it's so good"
                    rating={4}
                />
                <ReviewBox
                    customerName="Customer 3"
                    review="not bad"
                    rating={2}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default About;