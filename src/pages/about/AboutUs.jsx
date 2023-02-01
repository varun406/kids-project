import { CheckBoxOutlined } from "@mui/icons-material";
import React from "react";
import {
  Banner,
  BannerSection,
  BriefSection,
  GlobalStyles,
  ImageColumn,
  InfoColumn,
  SectionDesc,
  SectionHeading,
  SectionImage,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Benefit,
  BenefitDesc,
  BenefitLogo,
  BenefitSection,
  Box,
  Heading,
  RegisterButton,
  RegisterNowSection,
  Wrapper,
  ListWrap,
  List,
} from "./AboutUs.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { aboutData } from "./aboutData";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";
import AnimatedText from "react-animated-text-content";

const AboutUs = () => {
  const changeDirection = (index) => {
    return index % 2 === 0 ? "-reverse" : null;
  };

  const FadeDirection = (index) => {
    return index % 2 !== 0 ? true : false;
  };

  return (
    <Box>
      <GlobalStyles />
      <Header />

      <Wrapper>
        <Pulse>
          <BannerSection>
            <center>
              <AnimatedText
                type="chars" // animate words or chars
                animationType="float"
                interval={0.08}
                duration={0.8}
                tag="h1"
              >
                About us
              </AnimatedText>
            </center>
            <Banner src="./assets/Camera Roll/ABOUT/ABOUT US.png" />
          </BannerSection>
        </Pulse>
        <BriefSection>
          <InfoColumn>
            <SectionHeading>Our Methodology</SectionHeading>
            <SectionDesc>
              <ListWrap>
                <List>Understand school culture and values.</List>
                <List>Understand context and environment.</List>
                <List>Identify 21st century competencies to be developed.</List>
                <List>
                  Design activities to achieve learning outcomes for different
                  types of students.
                </List>
                <List>
                  Use identified learning methodology to help students achieve
                  learning objectives.
                </List>
                <List>Continuously monitor the progress of students.</List>
              </ListWrap>
            </SectionDesc>
          </InfoColumn>
          <ImageColumn>
            <SectionImage src="./assets/Camera Roll/ABOUT/Our Methodology.png" />
          </ImageColumn>
        </BriefSection>
        {aboutData.map((item, index) => (
          <BriefSection direction={changeDirection(index)} key={index}>
            <InfoColumn>
              <Fade right={!FadeDirection(index)} left={FadeDirection(index)}>
                <SectionHeading>{item.title}</SectionHeading>
                <SectionDesc>{item.info}</SectionDesc>
              </Fade>
            </InfoColumn>
            <ImageColumn>
              <Fade right={FadeDirection(index)} left={!FadeDirection(index)}>
                <SectionImage src={item.img} />
              </Fade>
            </ImageColumn>
          </BriefSection>
        ))}
        <RegisterNowSection>
          <Heading>Register for Free!</Heading>
          <BenefitSection>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>No credit card required</BenefitDesc>
            </Benefit>
            <Benefit>
              <BenefitLogo>
                <CheckBoxOutlined />
              </BenefitLogo>
              <BenefitDesc>Cancel anytime</BenefitDesc>
            </Benefit>
          </BenefitSection>
          <RubberBand>
            <Link to="/signup">
              <RegisterButton>Register Now</RegisterButton>
            </Link>
          </RubberBand>
        </RegisterNowSection>
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default AboutUs;
