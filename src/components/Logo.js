import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import logoImg from "../images/logo-icon.png";

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
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

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

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
