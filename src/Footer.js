import React from 'react';
import styled from 'styled-components';
import { StyledFooter, Text } from 'GlobalStyles';

const Footer = () => {
  return (
    <Wrapper>
      <Title>TOOLBOX</Title>
      <ToolboxText>
        Wix, WordPress, Squarespace, any platform, all the Adobes,
        Canva, SEO, Google Ads, Social media, HTML, CSS, JavaScript,
        React, GitHub and most importantly, Compassion.
      </ToolboxText>
      <ContactLink href="mailto:carimoreno1@gmail.com">
        Interested? Contact me
      </ContactLink>
    </Wrapper>
  )
}

const Wrapper = styled(StyledFooter)`
  align-items: center;
  height: auto;
  padding: 5% 15%;
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 20px;
  padding: 1% 2%;
  background-color: #ffffff;
  color: #f567a7;
  font-family: 'Montserrat';
  font-size: 22px;
  line-height: 27px;
  font-weight: bold;
`

const ToolboxText = styled(Text)`
  margin-bottom: 30px;
  text-align: center;
`

const ContactLink = styled.a`
  padding: 12px 24px;
  background-color: #ffffff;
  color: #f567a7;
  font-family: 'Montserrat';
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;

  &:hover {
    background-color: #f4f4f4;
  }
`

export default Footer
