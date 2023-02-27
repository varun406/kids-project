import styled from "styled-components";
import { SectionDesc, SectionHeading } from "../../components/CommonStyles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  padding-block: 20px;
`;

export const TermsWrap = styled.ul`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledSectionHeading = styled(SectionHeading)`
  font-size: 20px;
  text-align: left;
  margin: 7px 0 10px 0;
`;

export const StyledSectionDesc = styled(SectionDesc)`
  text-align: left;
  margin: 0px;
`;

export const Points = styled.li`
  font: normal normal 400 18px "Poppins", sans-serif;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
