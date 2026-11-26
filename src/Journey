import React from 'react';
import styled from 'styled-components';
import { Headings, Text, ProjectTittle } from 'GlobalStyles';

// To change the text, edit this list. Keep the quotes and commas.
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

const ROAD = '#4d4d4d';
const GRASS = '#6cb281';

const lastIndex = steps.length - 1;
const turnSide = (index) => (index % 2 === 0 ? 'right' : 'left');
const hasTurn = (index, side) => index >= 0 && index < lastIndex && turnSide(index) === side;

const Journey = () => {
  return (
    <Section>
      <Headings>THE JOURNEY</Headings>
      <Track>
        {steps.map((step, index) => (
          <Stop key={step.title}>
            <Band
              $closedLeft={hasTurn(index, 'left') || hasTurn(index - 1, 'left')}
              $closedRight={hasTurn(index, 'right') || hasTurn(index - 1, 'right')} />
            {index < lastIndex && <Turn $side={turnSide(index)} />}
            <Marker>{index + 1}</Marker>
            <Card>
              <ProjectTittle>{step.title}</ProjectTittle>
              <Text>{step.text}</Text>
            </Card>
          </Stop>
        ))}
      </Track>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5% 0;
  background-color: ${GRASS};
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 30px auto 0;
`;

const Stop = styled.article`
  position: relative;
  padding: 84px 0 24px;

  @media (max-width: 799px) {
    padding: 20px 16px 20px 100px;
  }
`;

// The straight piece of road at the top of each stop.
const Band = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => (props.$closedLeft ? '120px' : '-100vw')};
  right: ${(props) => (props.$closedRight ? '120px' : '-100vw')};
  height: 60px;
  background-color: ${ROAD};

  &::after {
    content: '';
    position: absolute;
    top: 28px;
    right: 0;
    left: 0;
    height: 4px;
    background: repeating-linear-gradient(90deg, #fff 0 30px, transparent 30px 62px);
  }

  @media (max-width: 799px) {
    top: 0;
    bottom: 0;
    left: 15px;
    right: auto;
    width: 60px;
    height: auto;

    &::after {
      top: 0;
      bottom: 0;
      left: 28px;
      right: auto;
      width: 4px;
      height: auto;
      background: repeating-linear-gradient(180deg, #fff 0 30px, transparent 30px 62px);
    }
  }
`;

// The curve that joins this stop to the next one.
const Turn = styled.div`
  position: absolute;
  top: 0;
  width: 120px;
  height: calc(100% + 60px);
  border: 60px solid ${ROAD};
  ${(props) => (props.$side === 'right' ? `
    right: 0;
    border-left: 0;
    border-radius: 0 100% 100% 0 / 0 50% 50% 0;
  ` : `
    left: 0;
    border-right: 0;
    border-radius: 100% 0 0 100% / 50% 0 0 50%;
  `)}

  &::after {
    content: '';
    position: absolute;
    top: -32px;
    bottom: -32px;
    border: 4px dashed #fff;
    ${(props) => (props.$side === 'right' ? `
      left: 0;
      right: -32px;
      border-left: 0;
      border-radius: 0 100% 100% 0 / 0 50% 50% 0;
    ` : `
      left: -32px;
      right: 0;
      border-right: 0;
      border-radius: 100% 0 0 100% / 50% 0 0 50%;
    `)}
  }

  @media (max-width: 799px) {
    display: none;
  }
`;

const Marker = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  transform: translateX(-50%);
  border: 4px solid #fff;
  border-radius: 50%;
  background-color: #f567a7;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 799px) {
    top: 24px;
    left: 45px;
  }
`;

// Same look as a project: orange title, black text.
const Card = styled.div`
  position: relative;
  z-index: 1;
  width: calc(100% - 288px);
  max-width: 560px;
  margin: 0 auto;
  padding: 0 24px 24px;
  background-color: #f4f4f4;

  @media (max-width: 799px) {
    width: auto;
    max-width: none;
    margin: 0;
  }
`;

export default Journey;
