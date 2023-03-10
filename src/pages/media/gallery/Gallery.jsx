import React from "react";
import AnimatedText from "react-animated-text-content";
import { Container, SectionHeading } from "../../../components/CommonStyles";
import Header from "../../../components/header/Header";
import { GalleryGrid, GalleryImage, Wrapper } from "./Gallery.styles";
import { galleryImages } from "./images";

const Gallery = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <center>
          <AnimatedText
            type="chars" // animate words or chars
            animationType="float"
            interval={0.1}
            duration={1.7}
            tag="h1"
          >
            Gallery
          </AnimatedText>
        </center>
        <GalleryGrid>
          {galleryImages.map((item, index) => (
            <GalleryImage src={item.src} alt="" key={index} />
          ))}
        </GalleryGrid>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
