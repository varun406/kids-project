import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-block: 50px;
`;

export const WorkshopSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;
export const WorkshopWrap = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px solid black;
`;
export const WorkshopImage = styled.img`
  width: 100%;
`;
export const WorkshopDetails = styled.div`
  border-top: 1px solid black;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 18px;
  color: darkgray;
`;
export const WorkshopList = styled.ul``;
export const List = styled.li``;
