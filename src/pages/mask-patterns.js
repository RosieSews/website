import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import logoImg from "../images/logo-icon.png";
import { LogoImg } from "../components/Logo";
import FancyHeader from "../components/FancyHeader";
import ADULT_PATTERN from "../images/A-PATTERN-DIRECTION.jpg";
import CHILD_PATTERN from "../images/CHILD-MASK-PATTERN.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import {
  Layout,
  Article,
  Wrapper,
  Button,
  SectionTitle,
  Subline
} from "../components";
import {
  StyledH3,
  SecondaryH2,
  SecondaryH1
} from "../components/StyledElements";

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

const Patterns = ({}) => (
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

          <Subline>
            Save and print the images below to use as a pattern. Follow the
            directions for construction. More info to come...
          </Subline>
        </Hero>
        <Content>
          <p>
            <SectionTitle>Adult homemade mask pattern</SectionTitle>
            <a href={ADULT_PATTERN} download>
              <Button big>
                <FontAwesomeIcon icon={faFileDownload} />
                DOWNLOAD
              </Button>
            </a>

            <img
              src={ADULT_PATTERN}
              height={"100%"}
              width={"100%"}
              alt="adult pattern and directions"
            />
          </p>
          <p>
            <SectionTitle>Child homemade mask pattern</SectionTitle>
            <a href={CHILD_PATTERN} download>
              <Button big>
                <FontAwesomeIcon icon={faFileDownload} />
                DOWNLOAD
              </Button>
            </a>
            <img
              src={CHILD_PATTERN}
              height={"100%"}
              width={"100%"}
              alt="child pattern"
            />
          </p>
          <p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/9tBg0Os5FWQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
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
