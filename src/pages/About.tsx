import React from 'react';
import Container from '../layout/Container';
import ContactUsForm from '../components/ContactUsForm';
import ReviewBox from '../components/ReviewBox';
import SectionLayout from '../layout/HomeSection';

const About: React.FC = () => {
  return (
      <Container>
        <main className="about-page">
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
          <SectionLayout
            className="about-review"
            title="Customer Reviews">
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
              rating={3}
            />
            <ReviewBox
              customerName="Customer 4"
              review="bad"
              rating={2}
            />
            <ReviewBox
              customerName="Customer 5"
              review="so bad"
              rating={1}
            />
          </SectionLayout>
          <section className="about-contact">
            <ContactUsForm />
          </section>
        </main>
      </Container>
  );
};

export default About;
