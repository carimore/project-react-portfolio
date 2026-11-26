import React from 'react';
import styled from 'styled-components';
import { SectionContainer, Headings, Text, ProjectTittle } from 'GlobalStyles';
import profileImg from 'Images/profileCM.png';

// To change the text, edit the list below. Keep the quotes and commas.
const qualities = [
  {
    title: 'I am creative',
    text: 'I believe one template doesn’t fit all. Let’s think outside the box and personalise your website. What is the best way to show your uniqueness and make you stand out?'
  },
  {
    title: 'I am curious',
    text: 'If you believe you have something special to share, I want to get to know you and learn more about what you do. How can we share your knowledge and passion to attract customers?'
  },
  {
    title: 'I am caring',
    text: 'Not everyone is a techy. Let’s find the web design tools that fit your business. And don’t worry, I’ll teach you how to use them. I want you to succeed. You are not on your own, and it won’t cost you a fortune.'
  },
  {
    title: 'I am a connector',
    text: 'A website is only one part of your business. What else do you need? Through my network of partners and clients, I can help you find the right people to help your business thrive.'
  }
];

const Guide = () => {
  return (
    <Section>
      <Headings>WHY CHOOSE ME?</Headings>
      <Grid>
        {qualities.map((item) => (
          <Card key={item.title}>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </Card>
        ))}
      </Grid>

      <Bottom>
        <Answer>
          <strong>Why do I need you if I can do it with AI?</strong>
          <br />
          For all the reasons above. AI can build a page. But it can’t be curious about you,
          care about your success, or connect you with the people that will help you grow. I can.
          We will use AI for the right things, to help you reduce the amount of work, to do the
          autmatic tasks that don't require creativity or passion.
          The reason why I love working with entrepreneurs is because they are passionate about
          what they to and they want to share it. I have learned so much from my previous clients,
          from Reiki to making bread. 
          Are you curious? Contact me for a FREE chat and tell me how I ca help you make your next
          project come TRUE.
        </Answer>
        <ProfilePic src={profileImg} alt="Profile Picture Carina Moreno" />
      </Bottom>
    </Section>
  );
};

const Section = styled(SectionContainer)`
  padding: 5% 6%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 40px;
  gap: 30px;

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const Answer = styled(Text)`
  flex: 1;
`;

const ProfilePic = styled.img`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border: 4px solid #f567a7;
  border-radius: 50%;
  object-fit: cover;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Card = styled.article`
  padding: 0 20px 20px;
  background-color: #f4f4f4;
`;

const Title = styled(ProjectTittle)`
  font-size: 20px;
`;

export default Guide;
