import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

// const Content = styled.article`
//   grid-column: 2;
//   max-width: 1000px;
//   border-radius: 1rem;
//   padding: 2rem 4.5rem;
//   ${"" /* background-color: ${props => props.theme.colors.bg}; */}
//   z-index: 9000;
//   margin-top: -3rem;
//   @media (max-width: ${props => props.theme.breakpoints.tablet}) {
//     padding: 3rem 3rem;
//   }
//   @media (max-width: ${props => props.theme.breakpoints.phone}) {
//     padding: 2rem 1.5rem;
//   }
//   p {
//     font-size: 1.1rem;
//     letter-spacing: -0.003em;
//     line-height: 1.58;
//     --baseline-multiplier: 0.179;
//     --x-height-multiplier: 0.35;
//     @media (max-width: ${props => props.theme.breakpoints.phone}) {
//       font-size: 1rem;
//     }
//   }

//   .prism-code {
//     padding: 0.75rem;
//     border-radius: 5px;
//     margin-bottom: 1rem;
//     font-size: 16px;
//   }
// `;

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

export const components = {
  h1: StyledH1,
  h3: StyledH3,
  h2: StyledH2
};
