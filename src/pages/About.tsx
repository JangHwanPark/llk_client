import React from 'react';
import Container from '../layout/Container';
import ContactUsForm from '../components/ContactUsForm';
import ReviewBox from '../components/ReviewBox';

const About: React.FC = () => {
  return (
      <Container>
        <div className="about-page">
          <div className="self-introduction">
            <div className="img-wrapper">
              <img src="./user.png" className="profile-photo" alt="Wonjin Han" />
            </div>
            <div className="text-wrapper">
              <h2>Wonjin Han</h2>
              <p>Have a question for our agent?</p>
            </div>
          </div>
          <main className="container">
            <section className="about-contact">
              <ContactUsForm />
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
          </main>
        </div>
      </Container>
  );
};

export default About;
