import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  min-height: 200px;
  margin-inline: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding-block: 50px;
`;

export const CourseSection = styled.div`
  width: 100%;
`;

export const CardWrap = styled.div`
  width: 100%;
  height: 100%;
  min-height: 230px;
  cursor: pointer;

  @media (max-width: 651px) {
    min-height: 280px;
  }

  @media (max-width: 420px) {
    min-height: 220px;
  }
`;

export const CourseList = styled.div`
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  a {
    text-decoration: none;
  }
`;

export const CourseImg = styled.img`
  width: 100%;
  height: 100%;
  max-height: 180px;
  border-radius: 7px;

  @media (max-width: 651px) {
    min-height: 220px;
  }

  @media (max-width: 420px) {
    min-height: 180px;
  }
`;

export const CourseName = styled.h1`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: black;

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;

export const AuthorName = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: grey;

  @media (max-width: 420px) {
    font-size: 10px;
  }
`;
