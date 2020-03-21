import styled, { keyframes } from "styled-components";

const dots = keyframes`

  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;}
      `;

const Subline = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grey.light};
  ${props => props.sectionTitle && "margin-top: -3rem"};
  ${props => props.sectionTitle && "margin-bottom: 4rem"};
  ${props => props.sectionTitle && "text-align: center"};
`;

export const LoadingSubline = styled(Subline)`
  ::after {
    content: " .";
    animation: ${dots} 0.5s steps(5, end) infinite;
  }
`;

export default Subline;
