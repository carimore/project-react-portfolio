import React from 'react';
import styled from 'styled-components';
import { SectionContainer, Headings, Text } from 'GlobalStyles';

// To change the text, edit the lists below. Keep the quotes and commas.
const qualities = [
  {
    title: 'Creative',
    text: 'I believe one template doesn’t fit all. Let’s think outside the box and personalise your website. What is the best way to show your uniqueness and make you stand out?'
  },
  {
    title: 'Curious',
    text: 'If you believe you have something special to share, I want to get to know you and learn more about what you do. How can we share your knowledge and passion to attract customers?'
  },
  {
    title: 'Caring',
    text: 'Not everyone is a techy. Let’s find the web design tools that fit your business. And don’t worry, I’ll teach you how to use them. I want you to succeed. You are not on your own, and it won’t cost you a fortune.'
  },
  {
    title: 'Connector',
    text: 'A website is only one part of your business. What else do you need? Through my network of partners and clients, I can help you find the right people to help your business thrive.'
  }
];

const steps = [
  {
    title: 'Write',
    text: 'Most entrepreneurs I’ve met have everything clear in their minds, but haven’t put it on paper. If you are here, the first step is a questionnaire. It helps you get your ideas written and clear. Then we can find the pure essence of your story and share it with your future clients.'
  },
  {
    title: 'Draw',
    text: 'I have a passion for creating brand visuals. If you need to start here, we can work on it together. We choose colours and fonts. We create a logo, and illustrations or icons if needed.'
  },
  {
    title: 'Create',
    text: 'Now the question is: how can I help you shine online? I will get to know you and your business. We will find your USP (Unique Selling Point) and create a personalised website based on your needs.'
  },
  {
    title: 'Learn',
    text: 'I think entrepreneurs should be able to change their websites by themselves. After a couple of months your business will grow, and you will want to change things. I will teach you how to do this and answer all your questions.'
  }
];

const Guide = () => {
  return (
    <SectionContainer>
      <Headings>CARI MORENO: WEBSITE AND BRAND GUIDE</Headings>
      <Subtitle>How can I help you shine online?</Subtitle>

      <Grid>
        {qualities.map((item) => (
          <Card key={item.title}>
            <CardTitle>{item.title}</CardTitle>
            <Text>{item.text}</Text>
          </Card>
        ))}
      </Grid>

      <SmallHeading>Why me?</SmallHeading>
      <Text>
        <strong>Why do I need you if I can do it with AI?</strong>
        <br />
        For all the reasons above. AI can build a page. But it can’t be curious about you,
        care about your success, or connect you with the right people. I can.
      </Text>

      <SmallHeading>The Journey</SmallHeading>
      <Grid>
        {steps.map((step, index) => (
          <Card key={step.title}>
            <CardTitle>{index + 1}. {step.title}</CardTitle>
            <Text>{step.text}</Text>
          </Card>
        ))}
      </Grid>
    </SectionContainer>
  );
};

const Subtitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;

const SmallHeading = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  color: #fd8e49;
  margin: 40px 0 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;

const Card = styled.article`
  background-color: #f4f4f4;
  padding: 20px;
`;

const CardTitle = styled.h4`
  font-family: 'Karla', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  color: #f567a7;
  margin-bottom: 10px;
`;

export default Guide;
