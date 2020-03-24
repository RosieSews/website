import React from "react";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 4em;
  margin-bottom: 0px;
`;

export const SecondaryH1 = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  ${"" /* margin-top: 0px;
  margin-bottom: 0px; */}
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    ${"" /* padding: 2rem 1.5rem; */}
    ${"" /* font-size: 1.3em; */}
  }
`;

export const StyledH2 = styled.h2`
  text-transform: capitalize;
  color: ${props => props.theme.colors.primaryLight};
`;

export const SecondaryH2 = styled.h2`
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    ${"" /* padding: 2rem 1.5rem; */}
    font-size: 1.3em;
  }
`;

export const StyledH3 = styled.h3`
  text-transform: lowercase;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: center;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    ${"" /* padding: 2rem 1.5rem; */}
    font-size: 1.3em;
  }
`;

export const StyledSubHeading = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.9em !important;
  color: ${props => props.theme.colors.grey.dark};
  font-style: italic;
  text-transform: lowercase;
`;

export const StyledInputField = styled.input`
  margin: 0 auto 1em;
  text-align: center;
  font-size: 1.25em !important;
  background-color: ${props => props.theme.colors.white};
  border: 5px solid ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.bg};
  font-style: italic;
  display: block;
`;

export const StyledLabel = styled.label`
  display: block;
  text-align: center;
  font-size: 1.5em !important;
  color: ${props => props.theme.colors.white};
  ${"" /* font-style: italic; */}
  text-transform: uppercase;
`;

export const StyledInput = ({ id, label, ...rest }) => (
  <React.Fragment>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInputField id={id} {...rest} />
  </React.Fragment>
);

// these are what get used by mdx-providers
export const components = {
  h1: StyledH1,
  h3: StyledH3,
  h2: StyledH2
};
