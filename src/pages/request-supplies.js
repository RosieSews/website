import React from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";
import FancyHeader from "../components/FancyHeader";

import { Layout, Wrapper, Content } from "../components";
import { SecondaryH1 } from "../components/StyledElements";
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
