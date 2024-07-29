import React from 'react';
import Container from '../layout/Container';
import ContactUsForm from '../components/ContactUsForm';
import SectionLayout from '../layout/HomeSection';
import ReviewCard from '../components/Review/ReviewCard';
import Info from '../components/Info';

const aboutReview = [
  {customer: 'Customer 1', title: 'Customer Reviews', rating: 5},
  {customer: 'Customer 2', title: 'Customer Reviews', rating: 5},
  {customer: 'Customer 3', title: 'Customer Reviews', rating: 5},
  {customer: 'Customer 4', title: 'Customer Reviews', rating: 5},
  {customer: 'Customer 5', title: 'Customer Reviews', rating: 5},
];

const About: React.FC = () => {
  return (
      <Container>
        <main className="about">
          <SectionLayout className="img-wrapper">
            <img src="./agent.jpg" className="profile-photo" alt="Wonjin Han" />
          </SectionLayout>
          <SectionLayout
            className="text-wrapper"
            title="HOJUNG KIM">
            <p>
              호정 사바나 한인 리얼터<br />
              안녕하세요 사바나 지역 한인 리얼터입니다.<br />
              HOJUNG KIM, Savannah Korean Realtor<br /><br />

              Office Location: 5547 Veterans Pkwy, Columbus<br />
              Office Phone Number: 706-653-1400
            </p>

          </SectionLayout>
          <SectionLayout className= "about-info">
          <Info/>
          </SectionLayout>
          <SectionLayout
            className="about-review"
            title="Customer Reviews">
            <h3>See what our customers have to say</h3>
            {aboutReview.map(item => (
              <ReviewCard
                customerName={item.customer}
                review={item.title}
                rating={item.rating}
              />
            ))}
          </SectionLayout>
          <section className="about-contact">
            <ContactUsForm />
          </section>
        </main>
      </Container>
  );
};

export default About;
