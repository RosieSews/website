import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import FancyHeader from "../components/FancyHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import { Layout, Wrapper, Button, SectionTitle } from "../components";
import { SecondaryH1 } from "../components/StyledElements";

const Content = styled.div`
  grid-column: 2;
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

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.white};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`;

const Patterns = () => (
  <Layout>
    <Wrapper>
      <React.Fragment>
        <div
          css={css`
            grid-area: header;
          `}
        >
          <FancyHeader />
        </div>
        <Hero>
          <SecondaryH1>homemade mask patterns</SecondaryH1>
        </Hero>
        <Content>
          <p>
            <iframe
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmakershabitatkl%2Fvideos%2F2504854873098703%2F&show_text=0&width=560"
              width="100%"
              height="315"
              scrolling="no"
              frameborder="0"
              allowTransparency="true"
              allowFullScreen="true"
            ></iframe>
          </p>
          <p>
            <SectionTitle>Cloth Mask With Pocket</SectionTitle>
            <a
              href={
                "https://drive.google.com/uc?export=download&id=1p9zJEGtROXhQA2dwHhilPAeKfOYdZGMw"
              }
              download
            >
              <Button big>
                <FontAwesomeIcon icon={faFileDownload} />
                DOWNLOAD PRINTABLE PATTERN & INSTRUCTIONS
              </Button>
            </a>
          </p>
        </Content>
      </React.Fragment>
    </Wrapper>
  </Layout>
);
export default Patterns;

Patterns.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired
    })
  }).isRequired
};

// export const IndexQuery = graphql`
//   query resourcesQuery {
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt(pruneLength: 200)
//         timeToRead
//         fields {
//           slug
//         }
//         frontmatter {
//           title
//           date(formatString: "MM/DD/YYYY")
//           categories
//           primaryColor
//           banner {
//             ...bannerImage640
//           }
//         }
//       }
//     }
//   }
// `;
