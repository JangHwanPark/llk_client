import React from 'react';
import Container from '../layout/Container';
import AboutContactUsForm from '../components/AboutContactUs';
import ReviewBox from '../components/ReviewBox';

const About: React.FC = () => {
  return (
      <Container>
        <section className="about-page">
          <header className="self-introduction">
            <div className="img-wrapper">
              <img src="/img/geon.jpg" className="profile-photo" alt="Wonjin Han" />
            </div>
            <div className="text-wrapper">
              <h2>Wonjin Han</h2>
              <p>Have a question for our agent?</p>
            </div>
          </header>
          <section  className="container">
            <section className="about-contact">
              <AboutContactUsForm />
            </section>
            <section className="about-review">
              <div className="review">
                <h2>Customer Reviews</h2>
                <h3>See what our customers have to say</h3>
                <ReviewBox
                    customerName="Customer 1"
                    review="It's so good and fantastic"
                    rating={5}
                />
                <ReviewBox
                    customerName="Customer 2"
                    review="It's so good"
                    rating={4}
                />
                <ReviewBox
                    customerName="Customer 3"
                    review="Not bad"
                    rating={2}
                />
              </div>
            </section>
          </section>
        </section>
      </Container>
  );
};

export default About;
