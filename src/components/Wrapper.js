import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${props => props.theme.maxWidth}) 1fr;
  grid-template-rows: 300px auto;
  grid-template-areas:
    "header header header"
    ". content .";
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0;
    grid-template-areas:
      "header header header"
      "content content content";
  }
  margin-top: 10px;
`;

export default Wrapper;
