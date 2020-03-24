import styled from "styled-components";

export const StyledLogoImg = styled.img`
  text-align: center;
  margin: auto;
  width: ${props => props.width};
  height: ${props => props.height};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    height: 100%;
    width: 100%;
  }
`;
