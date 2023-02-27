import styled from "styled-components";

export const Wrapper = styled.div``;
export const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;
export const ProgramCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: hsl(0, 0%, 25%);
  }
`;

export const ProgramDetails = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 3;
  text-align: center;
  backdrop-filter: blur(5px);

  &:hover {
    display: flex;
  }
`;

export const ProgramImage = styled.img`
  flex: 1;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 768px) {
    max-height: 200px;
  }

  &:hover ~ ${ProgramDetails} {
    display: flex;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 25px;
  text-shadow: 1px 1px 5px black;

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;
export const AgeTitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: white;
  text-shadow: 1px 1px 5px black;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
export const AgeDescription = styled.h1`
  margin: 0;
  font-weight: 500;
  color: white;
  text-shadow: 1px 1px 5px black;
`;
export const LearnMore = styled.h1`
  width: max-content;
  margin: 0;
  font-size: 25px;
  cursor: pointer;
  margin-inline: auto;
  color: yellow;
  text-decoration: underline;
  text-shadow: 1px 1px 5px black;

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
