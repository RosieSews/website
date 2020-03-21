import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import logoImg from "../images/logo-icon.png";
import { LogoImg } from "../components/Logo";
import Header from "../components/Header";
import FancyHeader from "../components/FancyHeader";

import {
  Layout,
  Article,
  Wrapper,
  Button,
  SectionTitle,
  Subline,
  Content,
  Hero,
  LoadingSubline
} from "../components";
import {
  StyledH3,
  SecondaryH2,
  StyledInput
} from "../components/StyledElements";

const IndexPage = ({}) => (
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
        <Content>
          <Link
            to="/request-supplies"
            style={{ display: "block", textAlign: "center", margin: "1em" }}
          >
            <Button big>
              <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              REQUEST SUPPLIES
            </Button>
          </Link>
          <SectionTitle>What is RosieSews?</SectionTitle>
          <p>
            In an effort to help curb medical supply shortages as we battle
            COVID19, we’re requesting seamstresses, makers and manufacturers to
            make masks and other supplies for use by medical professionals,
            at-risk community members and essential workers including postal
            works, grocery store workers, manufacturing personnel (and more).
          </p>
          <p>
            We are attempting to attack with a two-pronged approach: Homemade
            Small Batch and Mass Production.
          </p>
          <SectionTitle>Homemade Small Batch:</SectionTitle>
          <p>
            Homemade masks are not preferred to professional, medical grade n95
            respirators or surgical masks. However, the CDC does state homemade
            masks may be considered as a last resort (“better than no
            protection”). We are saddened to report that many medical personnel
            are already experiencing shortages so severe they are turning to the
            community to help make masks.
          </p>
          <SectionTitle>Mass Production</SectionTitle>
          <p>
            We’re working on converting maker spaces across the nation into
            supply production sites. If you have contacts with medical fabric
            supply, laser die cut machines or other seemingly helpful resources,
            please post on our{" "}
            <a href={"https://www.facebook.com/groups/837899896730511/"}>
              facebook group
            </a>{" "}
            or send a message to rosiesewscovid19@gmail.com.
          </p>
          <SectionTitle>Donate</SectionTitle>
          <p>
            <a
              href={"https://www.SeattleMakers.org"}
              target="_blank"
              rel="noopener noreferrer"
            >
              SeattleMakers
            </a>{" "}
            has stepped up as the first maker space to convert to a supply
            manufacturer. They are accepting donations which will purchase raw
            materials and cover logistics costs associated with shipping.
          </p>
          <SectionTitle>Connect</SectionTitle>
          <p>Join us and help spread the word on Facebook or Twitter</p>
          <a href={"https://www.facebook.com/groups/837899896730511/"}>
            facebook group
          </a>
        </Content>
      </React.Fragment>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired
    })
  }).isRequired
};

// export const IndexQuery = graphql`
//   query IndexQuery {
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
