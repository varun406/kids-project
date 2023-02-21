import styled from "styled-components";
import { SectionDesc, SectionHeading } from "../../components/CommonStyles";

export const Wrapper = styled.div`
  width: min(1250px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-block: 50px;
`;

export const TermsWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledSectionHeading = styled(SectionHeading)`
  font-size: 20px;
  text-align: left;
  margin: 20px 0 10px 0;
`;

export const StyledSectionDesc = styled(SectionDesc)`
  margin: 0px;
`;

export const Points = styled.li`
  font: normal normal 400 18px "Poppins", sans-serif;
`;
