import styled from "styled-components";

const Content = styled.div`
  grid-column: 2;
  grid-area: content;
  text-align: center;
  ${"" /* box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1); */}
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

export default Content;
