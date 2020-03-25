import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${props => props.theme.maxWidth}) 1fr;
  grid-template-rows: 100px auto;
  grid-template-areas:
    "header header header"
    ". content .";
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0;
    grid-template-areas:
      "header header header"
      "content content content";
  }
  padding: 0 1rem;
  margin-top: 10px;
`;

export default Wrapper;
