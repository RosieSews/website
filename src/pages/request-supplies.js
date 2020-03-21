import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import logoImg from "../images/logo-icon.png";
import { LogoImg } from "../components/Logo";
import FancyHeader from "../components/FancyHeader";

import {
  Layout,
  Article,
  Wrapper,
  Button,
  SectionTitle,
  Header,
  Content,
  Hero
} from "../components";
import {
  StyledH3,
  SecondaryH2,
  SecondaryH1
} from "../components/StyledElements";
import config from "../../config";

const StyledFrame = styled.iframe`
  background: transparent;
  border: 1px solid #ccc;
`;

const RequestSupplies = props => (
  <Layout>
    <Wrapper>
      <Helmet title={`Request Supplies | ${config.siteTitle}`} />
      <div
        css={css`
          grid-area: header;
        `}
      >
        <FancyHeader />
      </div>
      <Content>
        <SecondaryH1>Request Supplies</SecondaryH1>
        <StyledFrame
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shr5nBY7UkLhrqj4R?backgroundColor=yellow"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1867"
        ></StyledFrame>
      </Content>
    </Wrapper>
  </Layout>
);

export default RequestSupplies;
